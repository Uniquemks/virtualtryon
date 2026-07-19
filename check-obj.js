const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');
console.log('pant:', content.includes('pant'));
console.log('goggles1:', content.includes('goggles1'));
