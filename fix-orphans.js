const fs = require('fs');
let content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// The pattern is: 10 spaces, "},", newline, 10 spaces, "},"
// Let's replace it with just one of them.
// We might need to run it multiple times if there are 3 in a row (there shouldn't be).
const regex = /          \},\n          \},/g;
let matchCount = 0;

let newContent = content.replace(regex, (match) => {
  matchCount++;
  return '          },';
});

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log(`Replaced ${matchCount} orphaned closures!`);
