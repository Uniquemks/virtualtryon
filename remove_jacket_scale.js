const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/utils/patchResolver.ts');
let content = fs.readFileSync(filePath, 'utf8');

// We only want to remove scaleX: 1.03 from the 'cream-jacket' block.
// So we find the start and end of the 'cream-jacket' block.
const startIndex = content.indexOf("'cream-jacket': {");
const tieIndex = content.indexOf("tie: {", startIndex);
let endIndex = tieIndex !== -1 ? tieIndex : content.length;

const before = content.substring(0, startIndex);
let target = content.substring(startIndex, endIndex);
const after = content.substring(endIndex);

// Replace ', scaleX: 1.03' with ''
target = target.replace(/,\s*scaleX:\s*1\.03/g, '');

fs.writeFileSync(filePath, before + target + after, 'utf8');
console.log('Successfully removed scaleX: 1.03 from cream-jacket!');
