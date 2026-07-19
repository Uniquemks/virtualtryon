const fs = require('fs');

const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');

const shirtIds = [
  "notch-collar-powder-pink",
  "notch-collar-pumpkin",
  "notch-collar-butter-yellow",
  "blue-linen-shirt",
  "olive-linen-shirt",
  "black-linen-shirt",
  "dawn-blue-linen-shirt",
  "white-linen-shirt"
];

let newContent = content;

// Mapping size to open torso filename
const torsoMap = {
  'S': 'f1', 'M': 'f2', 'L': 'f4', 'XL': 'f3', 'XXL': 'f5'
};
// Mapping size to open tummy filename
const tummyMap = {
  'S': 'a2', 'M': 'a3', 'L': 'a4', 'XL': 'a1', 'XXL': 'a5'
};

for (const shirtId of shirtIds) {
  const shirtRegex = new RegExp(`("${shirtId}":\\s*\\{)([\\s\\S]*?)(?=\\n    \\},)`, 'g');
  newContent = newContent.replace(shirtRegex, (match, prefix, shirtContent) => {
    
    // We want to replace inside unbuttoned_untucked
    const uuRegex = /(unbuttoned_untucked:\s*\{)([\s\S]*?)(?=\n      \})/g;
    let newShirtContent = shirtContent.replace(uuRegex, (uuMatch, uuPrefix, uuContent) => {
      
      let newUuContent = uuContent;
      
      const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
      for (const size of sizes) {
        const sRegex = new RegExp(`(${size}:\\s*\\{)([\\s\\S]*?)(?=\\n        [SMLXL]{1,3}:\\s*\\{|\\n      \\})`, 'g');
        newUuContent = newUuContent.replace(sRegex, (sMatch, sPrefix, sContent) => {
          
          let newSContent = sContent;
          
          // Replace torso
          // It might be tuck torso/t1.avif or mid tuck torso/t1.avif
          const torsoRepl = `open torso fitted/${torsoMap[size]}`;
          newSContent = newSContent.replace(/(torso:\s*\{[^}]*?source:\s*require\("[^"]+?)\/(?:tuck torso|mid tuck torso)\/t[12345]\.(avif|png)("\)[^}]*\})/, `$1/${torsoRepl}.$2$3`);
          
          // Replace tummy
          const tummyRepl = `open tummy fitted/${tummyMap[size]}`;
          newSContent = newSContent.replace(/(tummy:\s*\{[^}]*?source:\s*require\("[^"]+?)\/(?:tuck tummy|tuck tummy low)\/tmy[12345]\.(avif|png)("\)[^}]*\})/, `$1/${tummyRepl}.$2$3`);
          
          // Replace buttons
          newSContent = newSContent.replace(/(buttons:\s*\{[^}]*?source:\s*require\("[^"]+?)\/button\/buttontu\.(avif|png)("\)[^}]*\})/, `$1/front open style patch/f123456.$2$3`);
          
          // Note: Some shirts might use f123456.avif, some might use op123456.avif. We'll try f123456 first, but wait, white shirt uses op123456.avif. 
          // All other shirts have f123456.avif based on our ls earlier.
          
          return sPrefix + newSContent;
        });
      }
      return uuPrefix + newUuContent;
    });
    
    return prefix + newShirtContent;
  });
}

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Done mapping unbuttoned_untucked files!');
