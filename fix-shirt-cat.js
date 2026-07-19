const fs = require('fs');
const file = 'src/utils/patchResolver.ts';
let content = fs.readFileSync(file, 'utf8');

// Find the exact line for notch-collar-powder-pink
const target = '"notch-collar-powder-pink": {';
if (content.includes(target)) {
    // Only replace the FIRST occurrence, which is the key in the map
    if (!content.includes('shirt: {\\n      "notch-collar-powder-pink": {')) {
        content = content.replace(target, `},
    shirt: {
      "notch-collar-powder-pink": {`);
        fs.writeFileSync(file, content, 'utf8');
        console.log("Fixed shirt category!");
    } else {
        console.log("Already fixed?");
    }
} else {
    console.log("Target not found!");
}
