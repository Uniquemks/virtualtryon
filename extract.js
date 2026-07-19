const fs = require('fs');

const bundle = fs.readFileSync('bundle.js', 'utf8');

const shirts = [
  "blue-linen-shirt",
  "olive-linen-shirt",
  "black-linen-shirt",
  "dawn-blue-linen-shirt",
  "white-linen-shirt"
];

let output = '';

for (const shirt of shirts) {
  const searchStr = `"${shirt}": {`;
  const startIdx = bundle.indexOf(searchStr);
  if (startIdx === -1) {
    console.log(`Could not find shirt: ${shirt}`);
    continue;
  }
  
  let braces = 0;
  let endIdx = -1;
  for (let i = startIdx; i < bundle.length; i++) {
    if (bundle[i] === '{') braces++;
    if (bundle[i] === '}') {
      braces--;
      if (braces === 0) {
        endIdx = i + 1;
        break;
      }
    }
  }
  
  if (endIdx === -1) {
    console.log(`Could not find closing brace for: ${shirt}`);
    continue;
  }
  
  let block = bundle.substring(startIdx, endIdx);
  
  // Clean up bundled require statements
  block = block.replace(/require\(_dependencyMap\[\d+\],\s*"([^"]+)"\)/g, 'require("$1")');
  
  output += block + ',\n';
}

fs.writeFileSync('extracted_shirts.txt', output, 'utf8');
console.log('Successfully extracted shirts to extracted_shirts.txt');
