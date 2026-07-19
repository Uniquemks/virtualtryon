// ─── Clothing Category Classifier ─────────────────────────────────────────
export function getClothingSlot(product) {
  const title = (product.title || '').toLowerCase();
  const cat   = (product.categories_name || product.dress_type || '').toLowerCase();
  if (['shoe','sneaker','boot','sandal','slipper','footwear'].some(k => title.includes(k))) return 'shoes';
  if (['goggle','glass','sunglass','spectacle','eyewear'].some(k => title.includes(k))) return 'goggles';
  if (['cap','hat','beanie'].some(k => title.includes(k))) return 'cap';
  if (['trouser','pant','jeans','linen trouser','cargo','shorts','lower'].some(k => title.includes(k) || cat.includes(k))) return 'bottom';
  if (['t-shirt', 'tshirt', 'polo', 'vest', 'inner'].some(k => title.includes(k) || cat.includes(k))) return 'innerTop';
  return 'top';
}

// ─── Accessory Patch Filter ────────────────────────────────────────────────
// Shoes: shoes1-4 map to foot-width (legIndex), shoes.png = preview only
// Goggles/Caps: h/m/s prefix maps to face size (neckIndex)
export function selectAccessoryPatches(allUrls, slot, meta) {
  const li = meta?.legIndex ?? 2;   // 1=skinny 2=avg 3=tall 4=heavy
  const ni = meta?.neckIndex ?? 3;  // 1=small 2=oval 3=avg 4=broad

  // Face size label: small=s, medium=m, heavy/broad=h
  const facePrefix = ni <= 1 ? 's' : ni <= 3 ? 'm' : 'h';

  // ── We want to pick the BEST patch for each type, not all of them
  const patchMap = new Map();

  allUrls.forEach(url => {
    const file = url.split('/').pop().toLowerCase().trim();
    if (file.endsWith('.jpg')) return; // skip thumbnails

    if (slot === 'shoes') {
      const m = file.match(/^shoes(\d+)\.(png|avif)$/);
      if (m && parseInt(m[1]) === li) patchMap.set('main', url);
    }

    if (slot === 'goggles') {
      // Prioritize size-prefixed (e.g., mgoggles.avif) over generic goggles.png
      if (file.match(/^(h|m|s)goggles\.(avif|png)$/)) {
        if (file.startsWith(facePrefix)) patchMap.set('goggles', url);
      } else if (file.match(/^goggles\d*\.(png|avif)$/) && !patchMap.has('goggles')) {
        patchMap.set('goggles', url);
      }
    }

    if (slot === 'cap') {
      if (file.match(/^(h|m|s)cap\.(avif|png)$/)) {
        if (file.startsWith(facePrefix)) patchMap.set('cap', url);
      } else if (file.match(/^cap\d*\.(png|avif)$/) && !patchMap.has('cap')) {
        patchMap.set('cap', url);
      }
    }
  });

  const result = Array.from(patchMap.values());
  console.log(`🔍 ${slot} filter result:`, result.map(u => u.split('/').pop()));
  return result;
}

// ─── Patch Filter ──────────────────────────────────────────────────────────
export function selectRelevantPatches(allUrls, meta, forceOpen = false) {
  const { sizeCode, tummyIndex, legIndex, neckIndex } = meta;
  const s  = (sizeCode || 'a').toLowerCase();
  const ti = tummyIndex ?? 1;
  const li = legIndex   ?? 2;
  const ni = neckIndex  ?? 3;

  const patches = {
    torso_s: {}, torso_b: {}, ex_s: {}, ex_b: {}, c: {}, sh: {},
    tm: {}, tmy: {}, stmy: {}, t: {}, abd: {}, ex_abd: {}, aa: {}, bt: {}, ltu: {}, op: [], bp: {}
  };

  const slots = new Map();

  for (const url of allUrls) {
    const file = url.split('/').pop().toLowerCase().trim();
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.includes('skinhair') || file.startsWith('main')) continue;

    // Torso (b?)(smah)(\d+)
    const torsoM = file.match(/^(b?)([smah])(\d+)\.avif$/);
    if (torsoM) {
      const isB = torsoM[1] === 'b';
      const sz = torsoM[2];
      const variant = torsoM[3];
      // 'a' + number >= 2 is an Abdomen extension, NOT an Athletic torso!
      if (sz === 'a' && parseInt(variant) >= 2) {
        patches.abd[variant] = url;
        continue;
      }
      if (isB) {
        if (!patches.torso_b[sz]) patches.torso_b[sz] = {};
        patches.torso_b[sz][variant] = url;
      } else {
        if (!patches.torso_s[sz]) patches.torso_s[sz] = {};
        patches.torso_s[sz][variant] = url;
      }
      continue;
    }

    // Abdomen multi-sizes (e.g. a23.avif, a45.avif)
    const abdM = file.match(/^a(\d\d+)\.avif$/);
    if (abdM) { patches.abd[abdM[1]] = url; continue; }

    // EX Sleeves (ex)(b?)([smah])(\d+)
    const exM = file.match(/^ex(b?)([smah])(\d+)\.avif$/);
    if (exM) {
      const isB = exM[1] === 'b';
      const sz = exM[2];
      const variant = exM[3];
      if (sz === 'a' && parseInt(variant) >= 2) {
        patches.ex_abd[variant] = url;
        continue;
      }
      if (isB) {
        if (!patches.ex_b[sz]) patches.ex_b[sz] = {};
        patches.ex_b[sz][variant] = url;
      } else {
        if (!patches.ex_s[sz]) patches.ex_s[sz] = {};
        patches.ex_s[sz][variant] = url;
      }
      continue;
    }
    
    // EX Abdomen multi-sizes
    const exAbdM = file.match(/^exa(\d\d+)\.avif$/);
    if (exAbdM) { patches.ex_abd[exAbdM[1]] = url; continue; }

    // Tummy (tm, tmy, stmy, t)
    const tmMatch = file.match(/^(tmy|tm|stmy|t)(\d+)\.avif$/);
    if (tmMatch) { patches[tmMatch[1]][tmMatch[2]] = url; continue; }

    // Tummy Shape (aa)
    const aaMatch = file.match(/^aa(\d+)\.avif$/);
    if (aaMatch) { patches.aa[aaMatch[1]] = url; continue; }

    // BT (Bottom Tuck)
    const btMatch = file.match(/^bt(\d+)\.avif$/);
    if (btMatch) { patches.bt[btMatch[1]] = url; continue; }

    // Collar (c)
    const cMatch = file.match(/^c(\d)(t?)\.avif$/);
    if (cMatch) {
      if (!patches.c[cMatch[1]] || cMatch[2] === 't') patches.c[cMatch[1]] = url; 
      continue;
    }

    // Shoulder (sh)
    const shMatch = file.match(/^sh(\d)\.avif$/);
    if (shMatch) { patches.sh[shMatch[1]] = url; continue; }

    // BP (Back Patch)
    const bpMatch = file.match(/^bp(\d*)\.avif$/);
    if (bpMatch) { patches.bp[bpMatch[1] || 'generic'] = url; continue; }

    // Overlays
    if (file.startsWith('op')) { patches.op.push(url); continue; }

    // Tucks
    if (file.startsWith('ltu')) { patches.ltu[file] = url; continue; }

    // Always-draw
    if (/^(button|tie|bptm|lt1|scarf)/.test(file) || file === 'p.avif' || file.startsWith('bpal') || file.startsWith('bphy') || file.startsWith('bl')) {
      slots.set(file, url); continue;
    }
  }

  // 1. Pick Torso
  const sizeFallback = {
    's': ['s', 'a', 'm', 'h'],
    'a': ['a', 'm', 'h', 's'],
    'm': ['m', 'h', 'a', 's'],
    'h': ['h', 'm', 'a', 's']
  };
  const sizePriority = sizeFallback[s] || ['a', 'm', 'h', 's'];
  let torsoUrl = null;
  let bestSize = s;
  let bestVariant = '1';
  let isBoxy = false;

  for (const sz of sizePriority) {
    const hasS = patches.torso_s[sz] && Object.keys(patches.torso_s[sz]).length > 0;
    const hasB = patches.torso_b[sz] && Object.keys(patches.torso_b[sz]).length > 0;
    
    if (hasS || hasB) {
      bestSize = sz;
      if (forceOpen && hasB) {
         isBoxy = true;
         bestVariant = Object.keys(patches.torso_b[sz])[0];
         torsoUrl = patches.torso_b[sz][bestVariant];
      } else if (hasS) {
         isBoxy = false;
         bestVariant = Object.keys(patches.torso_s[sz])[0];
         torsoUrl = patches.torso_s[sz][bestVariant];
      } else {
         isBoxy = true;
         bestVariant = Object.keys(patches.torso_b[sz])[0];
         torsoUrl = patches.torso_b[sz][bestVariant];
      }
      break;
    }
  }

  if (torsoUrl) slots.set('torso', torsoUrl);

  // Map bestSize to a tummy index
  const sizeToTi = { 's': 1, 'm': 2, 'a': 3, 'h': 5 };
  const targetTi = sizeToTi[bestSize] || ti;

  // 2. Add Sleeves (ex) matching exact variant!
  const exTarget = isBoxy ? patches.ex_b : patches.ex_s;
  if (exTarget[bestSize] && exTarget[bestSize][bestVariant]) {
     slots.set('ex', exTarget[bestSize][bestVariant]);
  } else if (exTarget[bestSize]) {
     slots.set('ex', Object.values(exTarget[bestSize])[0]);
  }

  // 3. Add Tummy details (tm, tmy, stmy) - must match the chosen Tummy size!
  ['tm', 'tmy', 'stmy'].forEach(k => {
    if (patches[k][targetTi]) slots.set(k, patches[k][targetTi]);
    else if (patches[k][ti]) slots.set(k, patches[k][ti]); 
    else if (patches[k]['1']) slots.set(k, patches[k]['1']); // Plackets can fallback
  });
  
  // 3.2 Tummy extensions (t) - structural, MUST match size, no fallback to '1'
  if (patches.t[targetTi]) slots.set('t', patches.t[targetTi]);
  else if (patches.t[ti]) slots.set('t', patches.t[ti]);
  
  // 3.5 Abdomen extensions (a2, a3, a45, etc)
  const tiStr = targetTi.toString();
  if (patches.abd[tiStr]) {
    slots.set('a', patches.abd[tiStr]);
  } else {
    for (const [k, v] of Object.entries(patches.abd)) {
      if (k.includes(tiStr)) { slots.set('a', v); break; }
    }
  }

  if (patches.ex_abd[tiStr]) {
    slots.set('exa', patches.ex_abd[tiStr]);
  } else {
    for (const [k, v] of Object.entries(patches.ex_abd)) {
      if (k.includes(tiStr)) { slots.set('exa', v); break; }
    }
  }

  // 4. BT (Bottom extension)
  if (patches.bt[targetTi]) slots.set('bt', patches.bt[targetTi]);
  else if (patches.bt[ti]) slots.set('bt', patches.bt[ti]);
  else if (patches.bt['1']) slots.set('bt', patches.bt['1']);

  // 5. Collar & Shoulders (Prevent double collar if torso provides one)
  if (patches.c[ni]) slots.set('collar', patches.c[ni]);
  if (patches.sh[Math.min(ni, 4)]) slots.set('shoulder', patches.sh[Math.min(ni, 4)]);

  // 6. Back Patch (bp)
  if (patches.bp[ni]) slots.set('bp', patches.bp[ni]);
  else if (patches.bp['generic']) slots.set('bp', patches.bp['generic']);

  // 7. Overlay
  if (patches.op.length > 0) slots.set('overlay', patches.op[0]);
  
  // 8. Tucks (ltu)
  // Usually ltu corresponds to variants or specific tummy sizes, fallback to 16 or bestVariant
  for (const [k, v] of Object.entries(patches.ltu)) {
     if (k.includes(bestVariant) || k.includes('16')) {
       slots.set('ltu', v);
       break;
     }
  }
  
  // Do NOT add 'aa' patches. They are naked skin patches that overwrite the backend avatar's body shape!

  // Handle open/closed conflicts
  if (forceOpen) {
    if (slots.has('overlay')) slots.delete('collar');
    for (const key of slots.keys()) {
      if (key.startsWith('button')) slots.delete(key);
    }
  } else {
    // If closed, remove generic overlays but KEEP tm/tmy (front placket)
    slots.delete('overlay');
    slots.delete('bptm');
    for (const key of slots.keys()) {
      if (key.startsWith('op')) slots.delete(key);
    }
    // Remove collar if the shirt base already clearly provides a high collar to avoid double-collars
    if (isBoxy) slots.delete('collar');
  }

  return Array.from(slots.values());
}

// ─── Draw Order (back → front) ─────────────────────────────────────────────
export const DRAW_ORDER = [
  'bp', 'bpal', 'bphy', 'b',    // Back
  'f',                          // Hip fill
  'sh',                         // Shoulders
  'bl', 'bt',                   // Legs
  'p.',                         // Base trouser
  'torso', 's1', 'm1', 'a1', 'h1', // Main Body
  't',                          // Tummy Lower Extensions (go OVER the torso to hide the sharp hem)
  'aa', 'a',                    // Tummy Shape & Abdomen Extensions (go OVER the torso to blend the seam)
  'tm', 'tmy', 'stmy',          // Tummy detail (Front Placket/Buttons)
  'c',                          // Collar
  'ltu', 'lt1',                 // Tucks
  'op', 'bptm',                 // Overlays (must be on top)
  'button', 'tie', 'scarf',     // Accessories (top-most)
];

export function sortByDrawOrder(urls) {
  return [...urls].sort((a, b) => {
    let fa = a.split('/').pop().toLowerCase().replace(/^ex/, '');
    let fb = b.split('/').pop().toLowerCase().replace(/^ex/, '');
    
    // Quick fix: rename open shirt bases (bs1, bm1...) to (s1, m1...) so they sort correctly!
    fa = fa.replace(/^b([smah]\d+)/, '$1');
    fb = fb.replace(/^b([smah]\d+)/, '$1');

    const getIndex = (f) => {
      if (f === 'b.avif' || f === 'b.png') return DRAW_ORDER.indexOf('b');
      if (f.startsWith('bptm')) return DRAW_ORDER.indexOf('bptm');
      return DRAW_ORDER.findIndex(p => p !== 'b' && p !== 'bptm' && f.startsWith(p));
    };

    const ia = getIndex(fa);
    const ib = getIndex(fb);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
}
