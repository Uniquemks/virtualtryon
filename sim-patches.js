require('ts-node').register();
const { getGarmentPatches } = require('./src/utils/patchResolver');

const tiePatches = getGarmentPatches('tie', 'black-tie', 'normal', 'XXL', 'Medium');
console.log('Tie Patches:', tiePatches);

const shirtPatches = getGarmentPatches('shirt', 'white-shirt', 'buttoned_tucked_tie', 'XXL', 'Medium');
console.log('Shirt Patches:', shirtPatches);
