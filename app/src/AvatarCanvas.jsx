import React, { useRef, useState, useEffect, useCallback } from 'react';

import { getClothingSlot, selectAccessoryPatches, selectRelevantPatches, sortByDrawOrder } from './patchFilters';

// ─── Live API Constants ────────────────────────────────────────────────────
const CLOTHES_API = "https://instastyles.in/script/app/WebserviceApi/MalefetchPriceandDress.php";
const COMBOS_API  = (termId) => `https://instastyles.in/script/app/WebserviceApi/combinations.php?id=${termId}&_=${Date.now()}`;
// Must match backend's temp_canvas = np.zeros((3000, 1100, 4)) exactly
const ORIG_W = 1100;
const ORIG_H = 3000;

// ─── Fetch Helper with Retry ───────────────────────────────────────────────
async function fetchWithRetry(url, options = {}, retries = 3, backoff = 1000) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } catch (err) {
    if (retries > 0 && (err.name === 'TypeError' || err.message.includes('NETWORK'))) {
      console.warn(`⚠️ Fetch failed, retrying in ${backoff}ms... (${retries} left)`, url);
      await new Promise(r => setTimeout(r, backoff));
      return fetchWithRetry(url, options, retries - 1, backoff * 2);
    }
    throw err;
  }
}

// ─── Canvas Composite Helper ──────────────────────────────────────────────
// Mirrors backend exactly:
//   temp_canvas = np.zeros((3000, 1100, 4))        ← ORIG_H × ORIG_W
//   offset_x = (1100 - pw) // 2; offset_y = 0       ← center horizontally, top-align
//   crop from bounding box (x,y,w,h) of that canvas  ← metadata.crop_*
async function compositePatches(patchUrls, ctx, meta, targetWidth, targetHeight) {
  if (!patchUrls.length) return;

  const { crop_x, crop_y, crop_w, crop_h, scale_factor, start_y } = meta;

  // Offscreen canvas — same dimensions as backend temp_canvas
  const offscreen = document.createElement('canvas');
  offscreen.width  = ORIG_W;  // 1100
  offscreen.height = ORIG_H;  // 3000
  const offCtx = offscreen.getContext('2d');

  const loadPatch = (src) => new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      // ── MIRROR BACKEND: center horizontally, top-align
      const px = Math.floor((ORIG_W - img.width) / 2);
      let py = 0;

      // ── ACCESSORY ADJUSTMENT (Goggles/Cap/Collars)
      const file = src.split('/').pop().toLowerCase();
      if (img.height < 1000) {
        if (file.includes('goggles')) py = crop_y + 160; // eye level
        else if (file.includes('cap')) py = crop_y - 20; // top of head
        else if (/^(c|bp)/.test(file) && !file.startsWith('bptm')) py = crop_y; // align cropped collars to head box
      }

      offCtx.drawImage(img, px, py, img.width, img.height);
      
      // DEBUG: Draw the filename on the patch
      offCtx.font = "40px Arial";
      offCtx.fillStyle = "red";
      offCtx.fillText(file, px + 10, py + 100);
      resolve();
    };
    img.onerror = () => { console.warn('❌ Patch failed:', src); resolve(); };
  });

  for (const url of patchUrls) await loadPatch(url);

  // Composite onto main canvas:
  //   source = crop from the 1100×3000 space (same bounding box backend used)
  //   dest   = full avatar width × proportional height
  const destH = Math.min(crop_h * scale_factor, targetHeight - start_y);
  ctx.drawImage(
    offscreen,
    crop_x, crop_y,      // source origin  (in 1100×3000 space)
    crop_w, crop_h,      // source size    (person bounding box)
    0, start_y,          // dest origin    (aligned to avatar feet)
    targetWidth, destH   // dest size      (exact avatar width → perfect fit)
  );
}

// ═══════════════════════════════════════════════════════════════════════════
const AvatarCanvas = ({ selfieSrc, bodySrc, userData, onUploadClick }) => {
  const canvasRef = useRef(null);
  const [isProcessing, setIsProcessing]   = useState(false);
  const [statusText, setStatusText]       = useState('');
  const [baseAvatarImage, setBaseAvatarImage] = useState(null);
  const [originalBaseAvatar, setOriginalBaseAvatar] = useState(null);
  const [avatarMetadata, setAvatarMetadata]   = useState(null);
  const [targetWidth, setTargetWidth]   = useState(0);
  const [targetHeight, setTargetHeight] = useState(0);
  const [loadingStep, setLoadingStep]   = useState(0);

  // ── Dynamic Loading Text Effect ──────────────────────────────────────────
  useEffect(() => {
    if (!isProcessing) {
      setLoadingStep(0);
      return;
    }
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < 6) {
        setLoadingStep(currentStep);
      }
    }, 1500); // Cycle text every 1.5 seconds
    return () => clearInterval(interval);
  }, [isProcessing]);

  // ── Wardrobe state — 5 independent slots ───────────────────────────────
  const [categories, setCategories]         = useState({});
  const [showClothingMenu, setShowClothingMenu] = useState(false);
  const [isFetchingPatches, setIsFetchingPatches] = useState(false);
  const [activeTab, setActiveTab]           = useState('top'); // 'top'|'bottom'|'shoes'|'goggles'|'cap'

  const [selectedInner, setSelectedInner]   = useState(null);
  const [selectedTop, setSelectedTop]       = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoes, setSelectedShoes]   = useState(null);
  const [selectedGoggles, setSelectedGoggles] = useState(null);
  const [selectedCap, setSelectedCap]       = useState(null);

  // ── 1. Load product catalogue ────────────────────────────────────────────
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchWithRetry(CLOTHES_API);
        let raw = await response.text();
        raw = raw.trim();
        const lb = raw.lastIndexOf('}');
        if (lb !== -1) raw = raw.substring(0, lb + 1);
        if (!raw.startsWith('[')) raw = `[${raw}`;
        if (!raw.endsWith(']')) raw = `${raw}]`;
        raw = raw.replace(/}\s*{/g, '},');
        const data = JSON.parse(raw);
        const cats = {};
        data.forEach(item => {
          const cat = item.categories_name || item.dress_type || 'Other';
          if (!cats[cat]) cats[cat] = [];
          cats[cat].push(item);
        });
        setCategories(cats);
      } catch (e) { console.error('Clothes API Error:', e); }
    })();
  }, []);

  // ── 2. Fetch base avatar from backend ───────────────────────────────────
  useEffect(() => {
    if (!selfieSrc || !bodySrc) return;
    (async () => {
      setIsProcessing(true);
      setStatusText('Generating base avatar…');
      setBaseAvatarImage(null);
      setAvatarMetadata(null);

      try {
        const selfieRes  = await fetch(selfieSrc);
        const selfieBlob = await selfieRes.blob();
        
        const bodyRes  = await fetch(bodySrc);
        const bodyBlob = await bodyRes.blob();
        
        const formData = new FormData();
        formData.append('selfie_image', selfieBlob, 'selfie.png');
        formData.append('body_image', bodyBlob, 'body.png');
        if (userData?.height) formData.append('user_height', userData.height);

        const backendRes = await fetch('http://127.0.0.1:5001/process', { method: 'POST', body: formData });
        if (!backendRes.ok) throw new Error('Backend failed');

        const json = await backendRes.json();
        setAvatarMetadata(json.metadata);

        const img = new Image();
        img.src = json.image;
        await new Promise(r => { img.onload = r; });
        setTargetWidth(img.width);
        setTargetHeight(img.height);
        setBaseAvatarImage(img);
        setOriginalBaseAvatar(img);
        setStatusText('Done!');
        setTimeout(() => setIsProcessing(false), 400);
      } catch (e) {
        console.error('Backend error:', e);
        alert('Failed to generate avatar: ' + e.message);
        setIsProcessing(false);
      }
    })();
  }, [selfieSrc, bodySrc, userData]);

  // ── 3. Fetch patches or Run AI VTON for a selected product ────────────────
  const handleSelectProduct = useCallback(async (product) => {
    const slot = getClothingSlot(product);

    setIsFetchingPatches(true);
    try {
      const termId = product.term_id;
      if (!termId) throw new Error('No term_id');

      const res  = await fetchWithRetry(COMBOS_API(termId));
      const data = await res.json();
      let patchUrls = [];
      const allUrls = (Array.isArray(data) && data.length > 0) ? (data[0].img || []) : (product.img || []);

      if (['top', 'innerTop', 'bottom'].includes(slot)) {
        patchUrls = allUrls; // Wait to compute patched URLs dynamically in useEffect
      } else {
        patchUrls = selectAccessoryPatches(allUrls, slot, avatarMetadata);
      }

      const selection = { product, patchUrls, allUrls };
      if (slot === 'top') setSelectedTop(selection);
      else if (slot === 'innerTop') setSelectedInner(selection);
      else if (slot === 'bottom') setSelectedBottom(selection);
      else if (slot === 'shoes')   setSelectedShoes(selection);
      else if (slot === 'goggles') setSelectedGoggles(selection);
      else if (slot === 'cap')     setSelectedCap(selection);

    } catch (e) {
      console.error('Patch fetch error:', e);
    } finally {
      setIsFetchingPatches(false);
    }
  }, [avatarMetadata]);

  // ── 4. Re-render canvas ─────────────────────────────────────────────────
  useEffect(() => {
    if (!baseAvatarImage || !canvasRef.current || !avatarMetadata) return;

    (async () => {
      const canvas = canvasRef.current;
      canvas.width  = targetWidth;
      canvas.height = targetHeight;
      const ctx = canvas.getContext('2d');

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Helper to identify patches that must go BEHIND the avatar (e.g. inner back collar)
      const isBackPatch = (url) => {
        const f = url.split('/').pop().toLowerCase().replace(/^ex/, '');
        return (f.startsWith('bp') && !f.startsWith('bptm')) || f === 'b.avif' || f.startsWith('bpal') || f.startsWith('bphy');
      };

      // Calculate dynamic patch combinations (handles inner t-shirt forcing open shirts)
      const forceOpen = !!selectedInner;
      const innerUrls = selectedInner ? sortByDrawOrder(selectRelevantPatches(selectedInner.allUrls, avatarMetadata, false)) : [];
      const topUrls = selectedTop ? sortByDrawOrder(selectRelevantPatches(selectedTop.allUrls, avatarMetadata, forceOpen)) : [];
      const bottomUrls = selectedBottom ? sortByDrawOrder(selectRelevantPatches(selectedBottom.allUrls, avatarMetadata, false)) : [];

      const innerBack = innerUrls.filter(isBackPatch);
      const innerFront = innerUrls.filter(u => !isBackPatch(u));
      const topBack = topUrls.filter(isBackPatch);
      const topFront = topUrls.filter(u => !isBackPatch(u));
      const bottomBack = bottomUrls.filter(isBackPatch);
      const bottomFront = bottomUrls.filter(u => !isBackPatch(u));

      // 1. Draw BACK clothing patches (Outer back, then Inner back)
      if (bottomBack.length) await compositePatches(bottomBack, ctx, avatarMetadata, targetWidth, targetHeight);
      if (topBack.length)    await compositePatches(topBack,    ctx, avatarMetadata, targetWidth, targetHeight);
      if (innerBack.length)  await compositePatches(innerBack,  ctx, avatarMetadata, targetWidth, targetHeight);

      // 2. Draw the base avatar (person's body & swapped face)
      ctx.drawImage(baseAvatarImage, 0, 0);

      // 3. Draw FRONT clothing patches
      let allFront = [...innerFront, ...bottomFront, ...topFront];
      
      // If no pants are worn, hide the 'bt' (bottom tuck) patches to prevent sharp raw edges at the crotch
      if (!selectedBottom) {
        allFront = allFront.filter(u => !u.split('/').pop().toLowerCase().replace(/^ex/, '').startsWith('bt'));
      }

      // Sort universally to ensure perfect stacking (e.g. untucked shirts drape over jeans)
      const sortedFront = sortByDrawOrder(allFront);
      if (sortedFront.length) await compositePatches(sortedFront, ctx, avatarMetadata, targetWidth, targetHeight);

      // 4. Draw accessories
      if (selectedShoes?.patchUrls?.length)   await compositePatches(selectedShoes.patchUrls,   ctx, avatarMetadata, targetWidth, targetHeight);
      if (selectedGoggles?.patchUrls?.length) await compositePatches(selectedGoggles.patchUrls, ctx, avatarMetadata, targetWidth, targetHeight);
      if (selectedCap?.patchUrls?.length)     await compositePatches(selectedCap.patchUrls,     ctx, avatarMetadata, targetWidth, targetHeight);
    })();
  }, [baseAvatarImage, avatarMetadata, selectedInner, selectedTop, selectedBottom, selectedShoes, selectedGoggles, selectedCap, targetWidth, targetHeight]);

  // ── UI ───────────────────────────────────────────────────────────────────
  const allProducts    = Object.values(categories).flat();
  const innerProducts  = allProducts.filter(p => getClothingSlot(p) === 'innerTop');
  const topProducts    = allProducts.filter(p => getClothingSlot(p) === 'top');
  const bottomProducts = allProducts.filter(p => getClothingSlot(p) === 'bottom');
  const shoesProducts  = allProducts.filter(p => getClothingSlot(p) === 'shoes');
  const gogglesProducts= allProducts.filter(p => getClothingSlot(p) === 'goggles');
  const capProducts    = allProducts.filter(p => getClothingSlot(p) === 'cap');

  const TABS = [
    { key: 'innerTop',label: '👕', title: 'Inner',   selected: selectedInner,   products: innerProducts },
    { key: 'top',     label: '🧥', title: 'Outer',   selected: selectedTop,     products: topProducts },
    { key: 'bottom',  label: '👖', title: 'Bottoms', selected: selectedBottom,  products: bottomProducts },
    { key: 'shoes',   label: '👟', title: 'Shoes',   selected: selectedShoes,   products: shoesProducts },
    { key: 'goggles', label: '🕶️', title: 'Goggles', selected: selectedGoggles, products: gogglesProducts },
    { key: 'cap',     label: '🧢', title: 'Caps',    selected: selectedCap,     products: capProducts },
  ];

  const setterMap = { innerTop: setSelectedInner, top: setSelectedTop, bottom: setSelectedBottom, shoes: setSelectedShoes, goggles: setSelectedGoggles, cap: setSelectedCap };
  const activeTabData = TABS.find(t => t.key === activeTab);

  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-end overflow-hidden pb-4">

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="h-[95%] w-auto object-contain block relative z-10 drop-shadow-2xl"
        style={{ display: baseAvatarImage ? 'block' : 'none', opacity: isProcessing ? 0.5 : 1 }}
      />

      {/* Dynamic Loading Overlay */}
      {isProcessing && (
        <div className="absolute inset-0 z-[100] flex flex-col items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          <div className="bg-white/95 border border-white/50 shadow-2xl rounded-3xl p-8 max-w-sm w-full mx-4 flex flex-col items-center transform transition-all scale-100">
            {/* Spinning Loader */}
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 border-4 border-indigo-100 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-indigo-500 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-indigo-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-extrabold text-slate-800 mb-2">Creating Avatar</h3>
            
            {/* Progress Bar Container */}
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-4 relative shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                style={{ width: `${Math.min(((loadingStep + 1) / 6) * 100, 95)}%` }}
              ></div>
            </div>

            {/* Dynamic Text */}
            <p className="text-sm font-bold text-indigo-600 animate-pulse text-center h-5">
              {
                [
                  "Analyzing body proportions...",
                  "Mapping key landmarks...",
                  "Matching skin tone...",
                  "Rendering AI avatar...",
                  "Applying face swap...",
                  "Finalizing details..."
                ][loadingStep] || "Finalizing details..."
              }
            </p>
          </div>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="absolute top-24 right-8 flex flex-col gap-4 z-50">
        <button
          id="btn-wardrobe"
          onClick={() => setShowClothingMenu(v => !v)}
          className={`w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center shadow-lg transition-all ${
            showClothingMenu ? 'bg-white/60 border-white/80 text-slate-800' : 'bg-black/5 border-black/10 hover:bg-black/10 text-slate-500'
          }`}
          title="Wardrobe"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.38 3.46L16 2a8.96 8.96 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>
          </svg>
        </button>
        <button
          id="btn-upload"
          onClick={onUploadClick}
          className="w-12 h-12 rounded-full bg-black/5 backdrop-blur-md border border-black/10 flex items-center justify-center shadow-lg hover:bg-black/10 transition-all text-slate-500"
          title="Upload Photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </button>
      </div>

      {/* ── Wardrobe Drawer ─────────────────────────────────────────────── */}
      {showClothingMenu && (
        <div className="absolute right-24 top-24 w-80 bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-5 shadow-2xl z-50">

          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-bold text-slate-800">Wardrobe</h2>
            <button onClick={() => setShowClothingMenu(false)} className="text-slate-400 hover:text-slate-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* 5 Tabs */}
          <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
            {TABS.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                title={tab.title}
                className={`flex-1 min-w-[48px] py-2 rounded-xl text-base font-bold transition-all relative ${
                  activeTab === tab.key
                    ? 'bg-indigo-500 text-white shadow-md'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {tab.label}
                {tab.selected && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                )}
              </button>
            ))}
          </div>

          {/* Loading indicator */}
          {isFetchingPatches && (
            <div className="text-center text-[11px] text-indigo-500 font-semibold py-1 mb-2 animate-pulse">
              ✨ Loading patches…
            </div>
          )}

          {/* Remove active slot */}
          <button
            onClick={() => {
              setterMap[activeTab]?.(null);
            }}
            className="w-full mb-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all"
          >
            Remove {activeTabData?.title}
          </button>

          {/* Product Grid */}
          <div className="max-h-[60vh] overflow-y-auto pr-1">
            {!activeTabData?.products.length ? (
              <p className="text-center text-slate-400 text-xs py-8">No {activeTabData?.title} available</p>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {activeTabData.products.map(prod => {
                  const preview    = prod.main_img || prod.img?.[prod.img.length - 1];
                  const isSelected = activeTabData.selected?.product?.term_id === prod.term_id;
                  return (
                    <button
                      key={prod.term_id || prod.price_id}
                      onClick={() => handleSelectProduct(prod)}
                      className={`group flex flex-col items-center p-2 rounded-2xl transition-all border ${
                        isSelected
                          ? 'border-indigo-500 bg-indigo-50/60 ring-2 ring-indigo-400/20'
                          : 'border-transparent hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-full aspect-[4/5] bg-slate-100 rounded-xl mb-2 overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                        {preview && (
                          <img src={preview} alt={prod.title} className="w-full h-full object-cover"
                            onError={e => { e.target.style.display = 'none'; }}
                          />
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 text-center line-clamp-2 leading-tight">{prod.title}</span>
                      <span className="text-[9px] font-semibold text-indigo-500 mt-0.5">
                        ₹{prod.special_price || prod.price || '—'}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
};

export default AvatarCanvas;
