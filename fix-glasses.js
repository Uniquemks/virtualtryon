const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// The glasses block looks like:
// goggles1: { normal: { S: { main: { source: require(...) } } } }

// We will use a regex to replace `main: { source: require(...) }`
// with `main: { source: require(...), transform: { x: 0, y: 20, scale: 1 } }`
// but only inside the `glasses:` block.

const glassesStart = content.indexOf('glasses: {');
const scarfStart = content.indexOf('bag: {'); // Just find the end of glasses. Wait, let's find the next major block

let newContent = content;

if (glassesStart !== -1) {
    let beforeGlasses = content.substring(0, glassesStart);
    let afterGlasses = content.substring(glassesStart);
    
    // Find the next top-level key after glasses
    // It could be `bag: {` or `watch: {` or `};`
    // Let's just do a replace within the glasses string
    let glassesMatch = afterGlasses.match(/glasses:\s*\{[\s\S]*?(?=\n  [a-zA-Z0-9]+:\s*\{|\n\};)/);
    
    if (glassesMatch) {
        let glassesStr = glassesMatch[0];
        
        // Replace `source: require(...)` with `source: require(...), transform: { x: 0, y: 22, scale: 1 }`
        // Make sure not to duplicate it if it already has transform
        glassesStr = glassesStr.replace(/(source:\s*require\([^)]+\))(?!,\s*transform)/g, "$1, transform: { x: 0, y: 22, scale: 1 }");
        
        newContent = beforeGlasses + afterGlasses.replace(glassesMatch[0], glassesStr);
        fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
        console.log('Fixed glasses position');
    }
}
