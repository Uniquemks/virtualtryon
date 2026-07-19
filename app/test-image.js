const fs = require('fs');

function getDimensions(filePath) {
  // A simple hack to read dimensions if it's webp or just read file size
  const stats = fs.statSync(filePath);
  console.log(`${filePath} - Size: ${stats.size} bytes`);
}

getDimensions('c:/Users/HP/virtual-trail-room-demo/app/public/patches/A/FACE.webp');
getDimensions('c:/Users/HP/virtual-trail-room-demo/app/public/patches/B/B1 flat/B1-F1-A.webp');
getDimensions('c:/Users/HP/virtual-trail-room-demo/app/public/patches/C/C1.webp');
