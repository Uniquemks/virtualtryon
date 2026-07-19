const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// The goal: For every shirt, look at its variants and sizes.
// If it has a layer, copy the transform from "white-shirt" for that variant, size, and layer.
// We can do this with Regex replacement or an AST parser.
// Regex might be easier since the structure is highly uniform.
// Let's parse the white-shirt block first.

const whiteShirtMatch = content.match(/"white-shirt":\s*\{([\s\S]*?)\n    \},/);
if (!whiteShirtMatch) {
  console.log("Could not find white-shirt");
  process.exit(1);
}
const whiteShirtContent = whiteShirtMatch[1];

// We can extract transforms for white-shirt:
// variant -> size -> layer -> transform
const transforms = {};

const variantRegex = /([a-z_]+):\s*\{([\s\S]*?)(?=\n      [a-z_]+:\s*\{|\n    \})/g;
let variantMatch;
while ((variantMatch = variantRegex.exec(whiteShirtContent)) !== null) {
  const variant = variantMatch[1];
  const variantContent = variantMatch[2];
  transforms[variant] = {};
  
  const sizeRegex = /([SML]|XL|XXL):\s*\{([\s\S]*?)(?=\n        [SMLXL]{1,3}:\s*\{|\n      \})/g;
  let sizeMatch;
  while ((sizeMatch = sizeRegex.exec(variantContent)) !== null) {
    const size = sizeMatch[1];
    const sizeContent = sizeMatch[2];
    transforms[variant][size] = {};
    
    const layerRegex = /([a-z_]+):\s*\{[^}]*?transform:\s*(\{[^}]+\})[^}]*\}/g;
    let layerMatch;
    while ((layerMatch = layerRegex.exec(sizeContent)) !== null) {
      const layer = layerMatch[1];
      const transform = layerMatch[2];
      transforms[variant][size][layer] = transform;
    }
  }
}

// console.log(JSON.stringify(transforms, null, 2));

// Now for all other shirts, we replace their transforms with the white-shirt ones.
const shirtIds = [
  "notch-collar-powder-pink",
  "notch-collar-pumpkin",
  "notch-collar-butter-yellow",
  "blue-linen-shirt",
  "olive-linen-shirt",
  "black-linen-shirt",
  "dawn-blue-linen-shirt",
  "white-linen-shirt"
];

let newContent = content;

for (const shirtId of shirtIds) {
  const shirtRegex = new RegExp(`("${shirtId}":\\s*\\{)([\\s\\S]*?)(?=\\n    \\},)`, 'g');
  newContent = newContent.replace(shirtRegex, (match, prefix, shirtContent) => {
    // replace inside shirtContent
    let newShirtContent = shirtContent;
    
    // go through each variant
    for (const variant of Object.keys(transforms)) {
      const vRegex = new RegExp(`(${variant}:\\s*\\{)([\\s\\S]*?)(?=\\n      [a-z_]+:\\s*\\{|\\n    \\})`, 'g');
      newShirtContent = newShirtContent.replace(vRegex, (vMatch, vPrefix, vContent) => {
        let newVContent = vContent;
        
        // go through each size
        for (const size of Object.keys(transforms[variant])) {
          const sRegex = new RegExp(`(${size}:\\s*\\{)([\\s\\S]*?)(?=\\n        [SMLXL]{1,3}:\\s*\\{|\\n      \\})`, 'g');
          newVContent = newVContent.replace(sRegex, (sMatch, sPrefix, sContent) => {
            let newSContent = sContent;
            
            // replace transform for each layer
            for (const layer of Object.keys(transforms[variant][size])) {
              const transform = transforms[variant][size][layer];
              // find the layer block
              const lRegex = new RegExp(`(${layer}:\\s*\\{[^}]*?)transform:\\s*\\{[^}]+\\}([^}]*\\})`, 'g');
              newSContent = newSContent.replace(lRegex, `$1transform: ${transform}$2`);
            }
            
            return sPrefix + newSContent;
          });
        }
        
        return vPrefix + newVContent;
      });
    }
    
    return prefix + newShirtContent;
  });
}

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Successfully updated patchResolver.ts');
