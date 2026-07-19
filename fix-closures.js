const fs = require('fs');
let content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

// Remove the 4 braces I added wrongly
content = content.replace(/  \},\n  \},\n  \},\n  \},\n  \},\n\};\n/, '  },\n};\n');

// Find places where a size block (e.g. M: {) is preceded by a layer closure (          },)
// instead of a size closure (        },)
const sizes = ['M', 'L', 'XL', 'XXL'];
for (const size of sizes) {
  const regex = new RegExp(`(          \\},\\n)        (${size}: \\{)`, 'g');
  content = content.replace(regex, '$1        },\n        $2');
}

// Also check if XXL's closure was deleted, which would mean the variant ends abruptly.
// A variant closure is `      },` (6 spaces).
const variantRegex = /(          \},\n)      (\w+: \{)/g;
content = content.replace(variantRegex, '$1        },\n      $2');

fs.writeFileSync('src/utils/patchResolver.ts', content, 'utf8');
console.log('Fixed missing size closures!');
