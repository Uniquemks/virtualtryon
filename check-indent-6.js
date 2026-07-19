const fs = require('fs');
const lines = fs.readFileSync('src/utils/patchResolver.ts', 'utf8').split('\n');

for (let i = 0; i < lines.length - 1; i++) {
  const line = lines[i];
  const nextLine = lines[i+1];
  
  if (line === '      },') {
    if (!nextLine.startsWith('      ') && !nextLine.startsWith('    ') && nextLine.trim() !== '') {
      console.log(`Mismatch at line ${i+1}:`);
      console.log(line);
      console.log(nextLine);
    }
  }
}
