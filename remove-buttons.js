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
  "white-linen-shirt",
  "white-shirt" // Also the white shirt, so it's consistently open
];

let newContent = content;

for (const shirtId of shirtIds) {
  const shirtRegex = new RegExp(`("${shirtId}":\\s*\\{)([\\s\\S]*?)(?=\\n    \\},|$)`, 'g');
  newContent = newContent.replace(shirtRegex, (match, prefix, shirtContent) => {
    
    const uuRegex = /(unbuttoned_untucked:\s*\{)([\s\S]*?)(?=\n      \},|\\n    \},)/g;
    let newShirtContent = shirtContent.replace(uuRegex, (uuMatch, uuPrefix, uuContent) => {
      
      const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
      let newUuContent = uuContent;
      
      for (const size of sizes) {
        const sRegex = new RegExp(`(${size}:\\s*\\{)([\\s\\S]*?)(?=\\n        [SMLXL]{1,3}:\\s*\\{|\\n      \\})`, 'g');
        newUuContent = newUuContent.replace(sRegex, (sMatch, sPrefix, sContent) => {
          // Remove the buttons block entirely!
          // It looks like:
          // buttons: {
          //   source: require("..."),
          //   transform: { ... },
          // },
          let newSContent = sContent.replace(/\s*buttons:\s*\{[^}]+?\},\n/g, '\n');
          return sPrefix + newSContent;
        });
      }
      return uuPrefix + newUuContent;
    });
    
    return prefix + newShirtContent;
  });
}

fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
console.log('Removed central buttons from unbuttoned_untucked for all shirts!');
