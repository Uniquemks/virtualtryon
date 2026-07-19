const { resolveOutfit } = require('./src/utils/rulesEngine');
const { getGarmentPatches } = require('./src/utils/patchResolver');

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
