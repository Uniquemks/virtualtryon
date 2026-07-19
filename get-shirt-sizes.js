const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const lines = content.split('\n');
const shirtIdx = lines.findIndex(l => l.includes('"white-shirt": {'));
let inSize = false;
let currentSize = '';
let currentFiles = [];

for(let i=shirtIdx; i<shirtIdx+500; i++) {
    const line = lines[i];
    if(!line) break;
    
    // Check if we hit a size block like "S: {" or "M: {"
    const sizeMatch = line.match(/^\s*(S|M|L|XL|XXL):\s*\{\s*$/);
    if(sizeMatch) {
        if(currentSize) {
            console.log(currentSize + ': ' + currentFiles.join(', '));
        }
        currentSize = sizeMatch[1];
        currentFiles = [];
        inSize = true;
        continue;
    }
    
    // If we hit the end of the buttoned_tucked block or another variant
    if(line.match(/^\s*untucked:\s*\{\s*$/)) {
        if(currentSize) {
            console.log(currentSize + ': ' + currentFiles.join(', '));
            currentSize = '';
        }
        break;
    }

    if(inSize) {
        const fileMatch = line.match(/([a-zA-Z0-9_-]+\.avif)/);
        if(fileMatch) {
            currentFiles.push(fileMatch[1]);
        }
    }
}
if(currentSize) {
    console.log(currentSize + ': ' + currentFiles.join(', '));
}
