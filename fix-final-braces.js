const fs = require('fs');
let content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

content = content.replace(/  \},\n\};\n\nexport interface RenderPatch \{/, '  },\n  },\n  },\n  },\n  },\n};\n\nexport interface RenderPatch {');

fs.writeFileSync('src/utils/patchResolver.ts', content, 'utf8');
console.log('Fixed braces before RenderPatch!');
