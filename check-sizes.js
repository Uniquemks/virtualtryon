const sizeOf = require('image-size');
const fs = require('fs');

const images = [
  './src/assets/bodies/Light-M Body Male light brown/A/FACE.webp',
  './src/assets/bodies/Light-M Body Male light brown/C/C1.webp',
  './src/assets/bodies/Light-M Body Male light brown/F/F1.webp',
  './src/assets/bodies/Light-M Body Male light brown/G/G1.webp',
  './src/assets/shirts/normal full slv/m1.avif',
  './src/assets/shirts/Classic Collar neck/c1.avif',
  './src/assets/trousers/mid/legs/bl1.png'
];

images.forEach(img => {
  if (fs.existsSync(img)) {
    const dimensions = sizeOf(img);
    console.log(`${img}: ${dimensions.width}x${dimensions.height}`);
  } else {
    console.log(`${img}: File not found`);
  }
});
