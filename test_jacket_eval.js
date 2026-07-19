const fs = require('fs');

// Mock require function for TS file eval
global.require = (path) => {
  if (path.endsWith('.png') || path.endsWith('.avif') || path.endsWith('.jpg')) {
    return path;
  }
  try {
    return require(path);
  } catch (e) {
    return path;
  }
};

let patchResolverContent = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');
let rulesEngineContent = fs.readFileSync('src/utils/rulesEngine.ts', 'utf8');

// Strip imports/exports/types from patchResolver
patchResolverContent = patchResolverContent
  .replace(/import\b[\s\S]*?;/g, '')
  .replace(/export\s+const\b/g, 'const ')
  .replace(/export\s+type\b[\s\S]*?;/g, '')
  .replace(/export\s+interface\b[\s\S]*?}/g, '')
  .replace(/:\s*RenderPatch\b/g, '')
  .replace(/:\s*any\b/g, '')
  .replace(/:\s*string\b/g, '')
  .replace(/:\s*number\b/g, '')
  .replace(/:\s*boolean\b/g, '')
  .replace(/:\s*Record<[\s\S]*?>/g, '')
  .replace(/as\s+any/g, '')
  .replace(/as\s+keyof\s+typeof\s+CLOTHING_ASSET_MAP/g, '');

// Strip imports/exports/types from rulesEngine
rulesEngineContent = rulesEngineContent
  .replace(/import\b[\s\S]*?;/g, '')
  .replace(/export\s+function\b/g, 'function ')
  .replace(/export\s+const\b/g, 'const ')
  .replace(/export\s+interface\b[\s\S]*?}/g, '')
  .replace(/:\s*OutfitSelection\b/g, '')
  .replace(/:\s*RenderOutfit\b/g, '')
  .replace(/:\s*string\b/g, '')
  .replace(/:\s*null\b/g, '')
  .replace(/:\s*undefined\b/g, '')
  .replace(/as\s+any/g, '');

// Mock WARDROBE_REGISTRY and GARMENT_META
const WARDROBE_REGISTRY = [
  { id: 'cream-jacket', category: 'jackets', status: 'READY' },
  { id: 'white-tshirt', category: 'tshirts', status: 'READY' }
];

const GARMENT_META = {
  tshirt: { layer: 110, variants: { untucked: { occludes: [] } } },
  jacket: { layer: 240, variants: { normal: { occludes: [] }, unbuttoned_untucked: { occludes: [] } } }
};

// Evaluate the stripped contents
try {
  eval(patchResolverContent);
  eval(rulesEngineContent);

  console.log('Evaluated modules successfully!');

  const selection = {
    tshirt: 'white-tshirt',
    jacket: 'cream-jacket'
  };

  const resolved = resolveOutfit(selection);
  console.log('Resolved Outfit:', JSON.stringify(resolved, null, 2));

  if (resolved.jacket) {
    const patches = getGarmentPatches(
      'jacket',
      resolved.jacket.id,
      resolved.jacket.variant || 'normal',
      'M',
      'Medium'
    );
    console.log('Jacket Patches:', JSON.stringify(patches, null, 2));
  } else {
    console.log('No jacket in resolved outfit');
  }

} catch (err) {
  console.error('Error during eval:', err);
}
