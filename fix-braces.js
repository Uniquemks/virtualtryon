const fs = require('fs');
let content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// Insert 4 closing braces before the `};` at the end of the patchResolver object
content = content.replace(/  \},\n\};\n/, '  },\n  },\n  },\n  },\n  },\n};\n');

fs.writeFileSync('src/utils/patchResolver.ts', content, 'utf8');
console.log('Added 4 closing braces!');
