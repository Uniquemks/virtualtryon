import React, { useState, useEffect, useMemo } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useAvatar } from '../../store/avatarStore';
import { getGarmentPatches, PatchLayer, BODY_PART_MAPPING } from '../../utils/patchResolver';
import { getBodyPatches } from '../../utils/patchResolver';
import { resolveOutfit, resolveCombo } from '../../utils/rulesEngine';


const SHOW_BOUNDING_BOX = true;
const SHOW_ANCHORS = true;
const SHOW_MEASUREMENTS = true;
const DEBUG_PATCH_ALIGNMENT = false;
const DEBUG_TUMMY = false;
const SHOW_TUMMY = true;
const DEBUG_PATCH_BOUNDS = false;


const resolveAssetSourceSafe = (source: any) => {
  if (!source || typeof source !== 'number') return null;
  try {
    if (typeof Image.resolveAssetSource === 'function') {
      return Image.resolveAssetSource(source);
    }
    const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
    return resolveAssetSource(source);
  } catch (e) {
    console.warn("Failed to resolve asset source safely", e);
    return null;
  }
};

const getBorderColor = (category?: string, part?: string) => {
  if (DEBUG_PATCH_BOUNDS && category === 'shirt') {
    if (part === 'torso') return 'red';
    if (part === 'tummy') return 'blue';
    if (part === 'sleeve') return 'green';
    if (part === 'collar' || part === 'collar_button') return 'yellow';
    if (part === 'back') return 'purple';
    return 'cyan';
  }
  
  if (category === 'body') return 'red';
  if (category === 'trouser') return 'blue';
  if (category === 'shoes') return 'green';
  return 'transparent';
};

const SimplePatch: React.FC<{ 
  patch: any, 
  showDebug: boolean, 
  currentSize: string, 
  debugIndex: number, 
  tuning: any,
  customStyle?: any
}> = React.memo(({ patch, showDebug, currentSize, debugIndex, tuning, customStyle }) => {
  const isAlignmentDebug = (DEBUG_PATCH_ALIGNMENT && patch.category === 'shirt') || (DEBUG_TUMMY && patch.part === 'tummy');
  const isDebugBox = (showDebug && SHOW_BOUNDING_BOX) || isAlignmentDebug;
  
  const borderColor = getBorderColor(patch.type || patch.category, patch.part);
  const zIndex = patch.zIndex ?? patch.z;
  const name = patch.name ?? patch.part;
  
  const isTunedPatch = patch.category === tuning.category && patch.part === tuning.part;
  
  const finalX = (patch.xOffset || 0) + (isTunedPatch ? tuning.x : 0);
  const finalY = (patch.yOffset || 0) + (isTunedPatch ? tuning.y : 0);
  const finalScale = (patch.scale || 1) + (isTunedPatch ? tuning.scale : 0);

  let imgDim = { w: 0, h: 0 };
  let filename = 'unknown';
  if ((isAlignmentDebug || DEBUG_TUMMY) && patch.source) {
    try {
      const asset = resolveAssetSourceSafe(patch.source);
      if (asset) {
        imgDim = { w: asset.width, h: asset.height };
        let extracted = asset.uri ? asset.uri.split('/').pop()?.split('?')[0] : 'unknown';
        filename = extracted || 'unknown';
        if (filename !== 'unknown') filename = decodeURIComponent(filename);
      }
    } catch (e) {
      console.warn("Failed to resolve asset source", e);
    }
  }
  
  
  const hasMask = typeof patch.maskBottom === 'number';
  const maskHeight = hasMask ? `${100 - patch.maskBottom}%` : '100%';
  const imgHeight = hasMask ? `${100 / (1 - patch.maskBottom/100)}%` : '100%';

  return (
    <View style={customStyle ? customStyle : {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: zIndex,
      transform: [
        { translateX: finalX },
        { translateY: finalY },
        { scale: finalScale },
        ...(patch.scaleX ? [{ scaleX: patch.scaleX }] : []),
      ]
    }} pointerEvents="none">
      <View style={{ width: '100%', height: maskHeight as any, overflow: 'hidden' }}>
        <Image 
          source={patch.source}
          fadeDuration={0}
          style={{
            width: '100%',
            height: imgHeight as any,
            ...((isDebugBox && borderColor !== 'transparent') || isAlignmentDebug ? { borderWidth: 1, borderColor } : {})
          }}
          resizeMode="contain"
        />
      </View>

      {isDebugBox && (name || patch.id) && (
        <View style={{
          position: 'absolute',
          top: 10 + (debugIndex * 45), // Stagger vertically based on render index
          left: 20,
          backgroundColor: 'rgba(0,0,0,0.8)',
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 4
        }}>
          {isAlignmentDebug ? (
            <>
              <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>
                {patch.id?.split('_')[1] || patch.category} | Size: {currentSize}
              </Text>
              <Text style={{ color: borderColor, fontSize: 11, fontWeight: 'bold' }}>
                {patch.part} | z={zIndex}
              </Text>
              <Text style={{ color: 'white', fontSize: 10 }}>
                x:{finalX} y:{finalY} s:{finalScale.toFixed(2)}
              </Text>
              <Text style={{ color: 'yellow', fontSize: 10 }}>
                {imgDim.w} x {imgDim.h}
              </Text>
            </>
          ) : (
            <>
              <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold' }}>
                [{name || patch.id}] z:{zIndex}
              </Text>
              <Text style={{ color: 'white', fontSize: 10 }}>
                x:{patch.xOffset || 0} y:{patch.yOffset || 0} s:{patch.scale || patch.scaleX || 1}
              </Text>
            </>
          )}
        </View>
      )}
    </View>
  );
});

const AvatarCanvas = () => {
  const { 
    selectedCombo, selectedProducts, size, setSize, bodyType, showDebug, avatarUri, avatarMetadata,
    dynamicInner, dynamicTop, dynamicBottom, dynamicShoes, dynamicGoggles, dynamicCap, dynamicCategoryItems,
    setDynamicInner, setDynamicTop, setDynamicBottom, setDynamicShoes, setDynamicGoggles, setDynamicCap, setDynamicCategoryItems
  } = useAvatar();
  const [containerWidth, setContainerWidth] = useState(0);
  
  const [tuneCategory, setTuneCategory] = useState('shirt');
  const [tunePart, setTunePart] = useState('tummy');
  const [tuneX, setTuneX] = useState(0);
  const [tuneY, setTuneY] = useState(0);
  const [tuneScale, setTuneScale] = useState(0);



  // If custom generated avatar is active, we don't render preset bodies
  let allPatches: any[] = [];

  // Function to compute dynamic layout absolute position styles for custom face-swapped avatar overlays
  const getCustomOverlayStyle = (patch: any) => {
    if (!avatarMetadata || containerWidth <= 0) return null;
    try {
      let origW = 1100;
      let origH = 2955;
      
      if (patch.isRemote) {
        origW = patch.dimensions?.w || 1100;
        origH = patch.dimensions?.h || 2955;
      } else {
        const asset = resolveAssetSourceSafe(patch.source);
        if (asset && asset.width && asset.height) {
          origW = asset.width;
          origH = asset.height;
        } else {
          // Fallback based on category/part
          if (patch.category === 'glasses' || patch.part === 'glasses') {
            origW = 200;
            origH = 100;
          } else if (patch.category === 'caps' || patch.part === 'cap') {
            origW = 400;
            origH = 300;
          } else {
            origW = 1100;
            origH = 3000;
          }
        }
      }

      const scaleFactor = avatarMetadata.scale_factor;
      const targetW = Math.floor(avatarMetadata.crop_w * scaleFactor);
      const S_layout = containerWidth / targetW;

      let yCanvas = 0;
      
      if (patch.isRemote) {
        const file = (patch.id || '').split('/').pop()?.toLowerCase() || '';
        if (origH < 1000) {
          if (file.includes('goggles')) {
            yCanvas = avatarMetadata.crop_y + 160;
          } else if (file.includes('cap')) {
            yCanvas = avatarMetadata.crop_y - 20;
          } else if (
            /^(c|bp|sh|jk|j|tie|scarf|button|ltu|f|s|m|a|h|ex)/.test(file) ||
            file.includes('tie') ||
            file.includes('scarf') ||
            file.includes('jacket') ||
            file.includes('black') ||
            file.includes('brown')
          ) {
            if (!file.startsWith('bptm')) {
              yCanvas = avatarMetadata.crop_y;
            }
          }
        }
      } else {
        if (origH < 1000) {
          if (patch.category === 'glasses' || patch.part === 'glasses') {
            yCanvas = avatarMetadata.crop_y + 160;
          } else if (patch.category === 'caps' || patch.part === 'cap') {
            yCanvas = avatarMetadata.crop_y - 20;
          } else if (
            patch.part === 'collar' ||
            patch.part === 'back' ||
            patch.part === 'shoulder' ||
            patch.part === 'sleeve' ||
            patch.part === 'torso' ||
            patch.part === 'tummy' ||
            patch.part === 'buttons' ||
            patch.part === 'main' ||
            patch.category === 'ties' ||
            patch.category === 'tie' ||
            patch.category === 'scarves' ||
            patch.category === 'scarf' ||
            patch.category === 'jackets' ||
            patch.category === 'jacket'
          ) {
            yCanvas = avatarMetadata.crop_y;
          }
        }
      }

      const width = origW * scaleFactor * S_layout;
      const height = origH * scaleFactor * S_layout;
      const left = (((1100 - origW) / 2 - avatarMetadata.crop_x) * scaleFactor) * S_layout;
      const top = (avatarMetadata.start_y + (yCanvas - avatarMetadata.crop_y) * scaleFactor) * S_layout;

      return {
        position: 'absolute' as const,
        left,
        top,
        width,
        height,
        zIndex: patch.zIndex ?? patch.z,
      };
    } catch (e) {
      console.warn("Failed resolving assets dynamically", e);
      return null;
    }
  };

  // Preload all size assets for equipped items & body size presets in the background
  useEffect(() => {
    const ALL_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const CATEGORIES = ['tshirt', 'shirt', 'trouser', 'shorts', 'sweater', 'coat', 'jacket', 'tie', 'scarf', 'shoes', 'cap', 'bag', 'watch', 'glasses'];
    const sourcesToPreload = new Set<any>();

    ALL_SIZES.forEach(sz => {
      // Body size patches
      const bPatches = getBodyPatches(sz);
      bPatches.forEach(p => {
        if (p.source) sourcesToPreload.add(p.source);
      });

      // Garment patches for resolved outfit at size sz
      const outfit = resolveCombo(selectedCombo, selectedProducts, sz);
      if (outfit) {
        CATEGORIES.forEach(category => {
          const garment = (outfit as any)[category];
          if (garment && garment.id) {
            const patches = getGarmentPatches(category, garment.id, garment.variant || 'normal', sz, bodyType);
            patches.forEach(p => {
              if (p.source) sourcesToPreload.add(p.source);
            });
          }
        });
      }
    });

    sourcesToPreload.forEach(source => {
      try {
        if (typeof source === 'number') {
          const asset = resolveAssetSourceSafe(source);
          if (asset && asset.uri) {
            Image.prefetch(asset.uri);
          }
        } else if (typeof source === 'object' && source?.uri) {
          Image.prefetch(source.uri);
        }
      } catch (e) {
        // Silently ignore prefetch failures
      }
    });
  }, [selectedCombo, selectedProducts, bodyType]);

  const { sortedPatches, outfitNotAvailable } = useMemo(() => {
    const bodyPatches = avatarUri ? [] : getBodyPatches(size).map(p => ({ ...p, type: 'body' }));
    const resolvedOutfit = resolveCombo(selectedCombo, selectedProducts, size);

    if (selectedCombo && resolvedOutfit === null) {
      return { sortedPatches: [], outfitNotAvailable: true };
    }

    let garmentPatches: any[] = [];
    const occludedParts = new Set<string>();

    if (resolvedOutfit) {
      ['tshirt', 'shirt', 'trouser', 'shorts', 'sweater', 'coat', 'jacket', 'tie', 'scarf', 'shoes', 'cap', 'bag', 'watch', 'glasses'].forEach(category => {
        const garment = resolvedOutfit[category as keyof typeof resolvedOutfit];
        if (garment) {
          const patches = getGarmentPatches(category, (garment as any).id, (garment as any).variant || 'normal', size, bodyType);
          garmentPatches = [...garmentPatches, ...patches.map(p => ({ ...p, category }))];
          
          // Add patch-level occlusions
          patches.forEach(p => {
            if (p.occludes) {
              p.occludes.forEach(part => occludedParts.add(part));
            }
          });
        }
      });
    }

    const sorted = [
      ...bodyPatches.filter(p => {
        // Map body part IDs (like "AA") to GARMENT_META tags (like "body_tummy")
        const mappedKeys = Object.entries(BODY_PART_MAPPING)
          .filter(([k, v]) => v === p.id)
          .map(([k]) => `body_${k}`);
        return !mappedKeys.some(k => occludedParts.has(k)) && !occludedParts.has(p.id!);
      }),
      ...garmentPatches.filter(p => !occludedParts.has(`${p.category}_${p.part}`) && (SHOW_TUMMY || p.part !== 'tummy')),
    ].sort((a, b) => (a.zIndex ?? a.z) - (b.zIndex ?? b.z));

    return { sortedPatches: sorted, outfitNotAvailable: false };
  }, [selectedCombo, selectedProducts, size, bodyType, avatarUri]);

  if (outfitNotAvailable) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Outfit not available for {size}</Text>
      </View>
    );
  }

  allPatches = sortedPatches;

  const dynamicAspectRatio = 1100 / 3000;

  return (
    <View style={styles.container}>
      <View 
        style={[styles.virtualCanvas, { aspectRatio: dynamicAspectRatio }]}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
      >
        {/* Render base custom avatar face-swapped background under clothing patches */}
        {avatarUri && (
          <Image 
            source={{ uri: avatarUri }} 
            fadeDuration={0}
            style={[StyleSheet.absoluteFill, { zIndex: 5 }]} 
            resizeMode="contain"
          />
        )}

        {/* Unified Render Pipeline */}
        {allPatches.map((patch, index) => {
          return (
            <SimplePatch 
              key={`patch-${index}`} 
              patch={patch} 
              showDebug={showDebug} 
              currentSize={size} 
              debugIndex={index} 
              tuning={{ category: tuneCategory, part: tunePart, x: tuneX, y: tuneY, scale: tuneScale }} 
            />
          );
        })}

        {/* SHOW_ANCHORS Reference Lines */}
        {showDebug && SHOW_ANCHORS && (
          <View style={StyleSheet.absoluteFill} pointerEvents="none">
            {/* Head Anchor (Red) */}
            <View style={{ position: 'absolute', top: '18%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(255,0,0,0.7)', borderStyle: 'dashed' }} />
            {/* Waist Anchor (Blue) */}
            <View style={{ position: 'absolute', top: '45%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(0,0,255,0.7)', borderStyle: 'dashed' }} />
            {/* Hip Anchor (Purple) */}
            <View style={{ position: 'absolute', top: '55%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(128,0,128,0.7)', borderStyle: 'dashed' }} />
            {/* Knee Anchor (Orange) */}
            <View style={{ position: 'absolute', top: '75%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(255,165,0,0.7)', borderStyle: 'dashed' }} />
            {/* Ankle Anchor (Yellow) */}
            <View style={{ position: 'absolute', top: '92%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(255,255,0,0.7)', borderStyle: 'dashed' }} />
            {/* Foot Reference (Green) */}
            <View style={{ position: 'absolute', top: '98%', left: 0, right: 0, height: 2, backgroundColor: 'rgba(0,128,0,0.7)' }} />
          </View>
        )}

        {/* SHOW_MEASUREMENTS Panel */}
        {showDebug && SHOW_MEASUREMENTS && (
          <View style={{
            position: 'absolute',
            top: 100,
            left: 20,
            backgroundColor: 'rgba(255,255,255,0.9)',
            padding: 10,
            borderRadius: 8,
            zIndex: 300,
            width: 250,
            shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, elevation: 4
          }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 5 }}>Current Size: {size}</Text>
            
            <Text style={{ fontWeight: 'bold', marginTop: 10, color: 'red' }}>Body Layers:</Text>
            {allPatches.filter(p => p.type === 'body' && (p.id === BODY_PART_MAPPING.torso || p.id === BODY_PART_MAPPING.tummy || p.id === BODY_PART_MAPPING.leg)).map(p => (
              <Text key={p.id} style={{ fontSize: 12 }}>• {p.id} patch</Text>
            ))}

            <Text style={{ fontWeight: 'bold', marginTop: 10, color: 'blue' }}>Garments:</Text>
            {allPatches.filter(p => p.type !== 'body').map((p, i) => (
              <Text key={`g-${i}`} style={{ fontSize: 12 }}>• {p.id || p.name || p.part}</Text>
            ))}
          </View>
        )}

        {/* Live Calibration Panel */}
        {showDebug && (
          <View style={{
            position: 'absolute',
            top: 20,
            right: 20,
            backgroundColor: 'rgba(255,255,255,0.95)',
            padding: 10,
            borderRadius: 8,
            zIndex: 400,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 4,
            maxWidth: 250,
          }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 5 }}>Live Tuner (Shirt)</Text>
            
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>
              {['torso', 'tummy', 'sleeve', 'collar', 'collar_button', 'back'].map(part => (
                <TouchableOpacity key={part} onPress={() => { setTunePart(part); setTuneX(0); setTuneY(0); setTuneScale(0); }} style={{ padding: 4, backgroundColor: tunePart === part ? '#000' : '#ddd', margin: 2, borderRadius: 4 }}>
                  <Text style={{ color: tunePart === part ? '#fff' : '#000', fontSize: 10 }}>{part}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {['X', 'Y', 'Scale'].map(axis => {
              const val = axis === 'X' ? tuneX : axis === 'Y' ? tuneY : tuneScale;
              const setVal = axis === 'X' ? setTuneX : axis === 'Y' ? setTuneY : setTuneScale;
              const step = axis === 'Scale' ? 0.05 : 5;
              return (
                <View key={axis} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
                  <Text style={{ width: 40, fontWeight: 'bold' }}>{axis}:</Text>
                  <TouchableOpacity onPress={() => setVal((v: number) => v - step)} style={{ paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#e5e7eb', borderRadius: 4 }}>
                    <Text style={{ fontWeight: 'bold' }}>-</Text>
                  </TouchableOpacity>
                  <Text style={{ marginHorizontal: 10, width: 40, textAlign: 'center' }}>{axis === 'Scale' ? val.toFixed(2) : val}</Text>
                  <TouchableOpacity onPress={() => setVal((v: number) => v + step)} style={{ paddingHorizontal: 12, paddingVertical: 4, backgroundColor: '#e5e7eb', borderRadius: 4 }}>
                    <Text style={{ fontWeight: 'bold' }}>+</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
            
            <TouchableOpacity onPress={() => { setTuneX(0); setTuneY(0); setTuneScale(0); }} style={{ marginTop: 5, backgroundColor: '#ffcccc', padding: 5, borderRadius: 4, alignItems: 'center' }}>
               <Text>Reset Tuning</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Head Anchor Debug Dot */}
        {showDebug && (
          <View style={{
            position: 'absolute',
            top: '18%', // Approx head center
            left: '50%',
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            backgroundColor: 'red',
            borderRadius: 5,
            zIndex: 100
          }} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  canvas: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  errorText: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: '600',
  },
  virtualCanvas: {
    width: '100%',
    height: '100%',
    maxWidth: 600,
    aspectRatio: 1100 / 3000,
    position: 'relative',
  },
});

export default AvatarCanvas;
