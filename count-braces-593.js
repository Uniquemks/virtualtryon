const fs = require('fs');
const lines = fs.readFileSync('src/utils/patchResolver.ts', 'utf8').split('\n');
let openCount = 0;
let closeCount = 0;

for (let i = 0; i < 593; i++) {
  const line = lines[i];
  if (!line) continue;
  openCount += (line.match(/\{/g) || []).length;
  closeCount += (line.match(/\}/g) || []).length;
}

console.log('Up to 593 - Open:', openCount, 'Close:', closeCount);
