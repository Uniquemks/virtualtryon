const fs = require('fs');
let content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// The file is missing 4 closing braces in bodyTypeMap.
// Replace `Medium: {` with `},\n          Medium: {`
content = content.replace(/            \},\n          Medium: \{/, '            },\n          },\n          Medium: {');
content = content.replace(/            \},\n          Athletic: \{/, '            },\n          },\n          Athletic: {');
content = content.replace(/            \},\n          Heavy: \{/, '            },\n          },\n          Heavy: {');
content = content.replace(/            \},\n        \},\n      \},\n    \},\n  \},\n  trouser: \{/, '            },\n          },\n        },\n      },\n    },\n  },\n  trouser: {');

// I also need to remove the 4 closing braces I added at the end of the file!
content = content.replace(/  \},\n  \},\n  \},\n  \},\n  \},\n\};\n\nexport interface RenderPatch \{/, '  },\n};\n\nexport interface RenderPatch {');

fs.writeFileSync('src/utils/patchResolver.ts', content, 'utf8');
console.log('Fixed the original syntax errors!');
