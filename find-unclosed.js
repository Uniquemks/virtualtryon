const fs = require('fs');
const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

let depth = 0;
let lastKey = '';
let currentKeyPath = [];

const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Find keys like "key: {"
  const keyMatch = line.match(/^\s*(?:"([^"]+)"|([a-zA-Z0-9_]+)):\s*\{/);
  if (keyMatch) {
    const key = keyMatch[1] || keyMatch[2];
    currentKeyPath.push(key);
  } else if (line.match(/\{/)) {
    currentKeyPath.push('???');
  }

  depth += (line.match(/\{/g) || []).length;
  depth -= (line.match(/\}/g) || []).length;
  
  if (line.match(/\}/)) {
    currentKeyPath.pop();
  }

  // If depth goes negative, or if we expect something, we can print
  // Let's just track the depth at the end of the patchResolver object
  if (line.trim() === '};' && depth !== 0) {
    console.log(`At line ${i + 1}, depth is ${depth}. Key path: ${currentKeyPath.join(' -> ')}`);
  }
}

console.log('Final depth:', depth);
