const sharp = require('sharp');

async function checkDim(path) {
  try {
    const info = await sharp(path).metadata();
    console.log(`${path}: ${info.width}x${info.height}`);
  } catch (e) {
    console.error(`Error reading ${path}: ${e.message}`);
  }
}

async function main() {
  await checkDim('src/assets/bodies/Light-M Body Male light brown/F/F3.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp');
}

main();
