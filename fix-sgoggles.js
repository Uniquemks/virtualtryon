const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// Replace transform: { x: 0, y: 8, scale: 1 } with transform: { x: 0, y: 0, scale: 1 } ONLY for sgoggles.png lines
const newContent = content.replace(/(source:\s*require\("[^"]+sgoggles\.png"\),\s*transform:\s*\{\s*x:\s*0,\s*y:\s*)8(,\s*scale:\s*1\s*\})/g, "$10$2");

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Fixed sgoggles position to y: 0');
