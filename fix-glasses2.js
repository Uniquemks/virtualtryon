const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// Replace transform: { x: 0, y: 22, scale: 1 } with transform: { x: 0, y: 8, scale: 1 }
const newContent = content.replace(/transform:\s*\{\s*x:\s*0,\s*y:\s*22,\s*scale:\s*1\s*\}/g, "transform: { x: 0, y: 8, scale: 1 }");

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Fixed glasses position to y: 8');
