const fs = require('fs');
const lines = fs.readFileSync('src/utils/patchResolver.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  const nextLine = lines[i+1];
  
  if (line.trim() === '' || nextLine.trim() === '') continue;
  
  const lineIndent = line.match(/^\s*/)[0].length;
  const nextIndent = nextLine.match(/^\s*/)[0].length;
  
  // If indentation drops, the current line should be a closing brace of the higher level
  // OR the next line should be a closing brace of the lower level.
  if (nextIndent < lineIndent) {
    if (line.trim() !== '},' && line.trim() !== '}' && line.trim() !== '};') {
      console.log(`Drop without closing brace at line ${i+1}:`);
      console.log(line);
      console.log(nextLine);
    }
  }
}
