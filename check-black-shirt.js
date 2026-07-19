const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const regex = /"black-linen-shirt":\s*\{([\s\S]*?)\n    \},/g;
let match = regex.exec(content);
if (match) {
  const shirtContent = match[1];
  // extract keys at depth 1
  const keys = [];
  const keyRegex = /\n      ([a-z_]+):\s*\{/g;
  let keyMatch;
  while ((keyMatch = keyRegex.exec(shirtContent)) !== null) {
    keys.push(keyMatch[1]);
  }
  console.log('black-linen-shirt variants:', keys);
}
