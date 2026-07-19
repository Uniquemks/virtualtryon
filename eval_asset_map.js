const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// Mock require to avoid loading images
const mockRequire = (path) => path;

// Find CLOTHING_ASSET_MAP definition
const mapStart = content.indexOf('export const CLOTHING_ASSET_MAP');
if (mapStart === -1) {
  console.error('Could not find CLOTHING_ASSET_MAP');
  process.exit(1);
}

// Extract the object literal after the equal sign
const equalIndex = content.indexOf('=', mapStart);
const objectStart = content.indexOf('{', equalIndex);

// Let's find the matching closing brace for CLOTHING_ASSET_MAP
let braceCount = 0;
let objectEnd = -1;
for (let i = objectStart; i < content.length; i++) {
  if (content[i] === '{') braceCount++;
  else if (content[i] === '}') {
    braceCount--;
    if (braceCount === 0) {
      objectEnd = i + 1;
      break;
    }
  }
}

if (objectEnd === -1) {
  console.error('Could not find closing brace');
  process.exit(1);
}

const rawObject = content.substring(objectStart, objectEnd);

// Replace TypeScript type assertions and require statements
let jsObjectStr = rawObject
  .replace(/require\(/g, 'mockRequire(');

try {
  const CLOTHING_ASSET_MAP = eval(`(${jsObjectStr})`);
  console.log('Keys in CLOTHING_ASSET_MAP:', Object.keys(CLOTHING_ASSET_MAP));
  
  if (CLOTHING_ASSET_MAP.jacket) {
    console.log('Jacket key exists!');
    console.log('Jacket structure:', JSON.stringify(CLOTHING_ASSET_MAP.jacket, null, 2));
  } else {
    console.log('Jacket key DOES NOT exist at root of CLOTHING_ASSET_MAP!');
  }
} catch (err) {
  console.error('Failed to eval CLOTHING_ASSET_MAP:', err);
}
