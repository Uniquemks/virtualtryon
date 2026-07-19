const fs = require('fs');
const path = require('path');

const patchResolverPath = path.join(__dirname, 'src', 'utils', 'patchResolver.ts');
const extractedShirtsPath = path.join(__dirname, 'extracted_shirts.txt');

if (!fs.existsSync(patchResolverPath)) {
  console.error('Could not find patchResolver.ts at:', patchResolverPath);
  process.exit(1);
}

if (!fs.existsSync(extractedShirtsPath)) {
  console.error('Could not find extracted_shirts.txt at:', extractedShirtsPath);
  process.exit(1);
}

let patchResolverContent = fs.readFileSync(patchResolverPath, 'utf8');
const extractedShirtsContent = fs.readFileSync(extractedShirtsPath, 'utf8');

// Target marker: the transition from the end of white-shirt to the start of shoes
// XXL: {
//   ...
//   collar_button: { ... }
// } // XXL ends
// } // unbuttoned_untucked ends
// } // white-shirt ends
// } // shirt category ends
//
// , shoes: {

const targetMarker = `      }\r\n    }\r\n  }\r\n\r\n  , shoes: {`;
const targetMarkerLF = `      }\n    }\n  }\n\n  , shoes: {`;

let marker = '';
if (patchResolverContent.includes(targetMarker)) {
  marker = targetMarker;
} else if (patchResolverContent.includes(targetMarkerLF)) {
  marker = targetMarkerLF;
} else {
  // Let's try a more relaxed search
  console.log('Strict markers not found, attempting generic search for end of white-shirt...');
  const alternateMarker = `button/buttonc.avif"`;
  const idx = patchResolverContent.lastIndexOf(alternateMarker);
  if (idx !== -1) {
    // Find the next occurrence of ", shoes:"
    const shoesIdx = patchResolverContent.indexOf(', shoes:', idx);
    if (shoesIdx !== -1) {
      // Find the closing brace of the shirt block (it should be the brace right before ", shoes:")
      const shirtCloseIdx = patchResolverContent.lastIndexOf('}', shoesIdx);
      if (shirtCloseIdx !== -1) {
        // We want to insert right before the shirt block closing brace
        const before = patchResolverContent.substring(0, shirtCloseIdx);
        const after = patchResolverContent.substring(shirtCloseIdx);
        
        const newContent = before + ',\n' + extractedShirtsContent + '\n' + after;
        fs.writeFileSync(patchResolverPath, newContent, 'utf8');
        console.log('Successfully injected shirts via alternate strategy!');
        process.exit(0);
      }
    }
  }
  
  console.error('Could not find insertion marker in patchResolver.ts');
  process.exit(1);
}

// Replace the marker by placing a comma after white-shirt, injecting the extracted shirts, and then closing the shirt block
const lineEndings = marker.includes('\r\n') ? '\r\n' : '\n';
const replacement = `      }${lineEndings}    },${lineEndings}${extractedShirtsContent}${lineEndings}  }${lineEndings}${lineEndings}  , shoes: {`;

const newContent = patchResolverContent.replace(marker, replacement);
fs.writeFileSync(patchResolverPath, newContent, 'utf8');
console.log('Successfully injected shirts into patchResolver.ts!');
