const fs = require('fs');
const lines = fs.readFileSync('src/utils/patchResolver.ts', 'utf8').split('\n');
const w = lines.findIndex(l => l.includes('"white-shirt": {'));
console.log(lines.slice(w-10, w+5).join('\n'));
