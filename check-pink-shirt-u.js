const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const regex = /"notch-collar-powder-pink":\s*\{([\s\S]*?)\n    \},/g;
let match = regex.exec(content);
if (match) {
  const shirtContent = match[1];
  const uMatch = shirtContent.match(/unbuttoned_untucked:\s*\{([\s\S]*?)\n      \}/);
  if (uMatch) {
    const lines = uMatch[1].split('\n').filter(l => l.includes('source:'));
    console.log(lines.join('\n'));
  }
}
