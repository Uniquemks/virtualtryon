const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const start = content.indexOf('export const CLOTHING_ASSET_MAP');
if (start === -1) {
    console.log("NOT FOUND");
    process.exit(1);
}

// Find all top level keys and second level keys
let inMap = false;
let braces = 0;
const lines = content.substring(start).split('\n');
for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    braces += (l.match(/\{/g) || []).length;
    braces -= (l.match(/\}/g) || []).length;
    
    if (braces === 1 && l.includes('{')) {
        console.log('L1:', l.trim());
    } else if (braces === 2 && l.includes('{')) {
        console.log('L2:', l.trim());
    } else if (braces === 3 && l.includes('{')) {
        console.log('L3:', l.trim());
    }
    
    if (braces === 0 && i > 0) {
        break; // end of map
    }
}
