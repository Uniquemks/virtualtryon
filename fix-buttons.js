const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const newContent = content.replace(/front open style patch\/f123456\.(avif|png)/g, 'front open style patch/op123456.avif');

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Fixed f123456 to op123456!');
