const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const regex = /require\("([^"]+)"\)/g;
let match;
let missing = [];

while ((match = regex.exec(content)) !== null) {
  const reqPath = match[1];
  const fullPath = path.resolve('src/utils', reqPath);
  if (!fs.existsSync(fullPath)) {
    missing.push(reqPath);
  }
}

console.log(JSON.stringify(missing, null, 2));
