const sharp = require('sharp');

async function checkMiddle(path) {
  try {
    const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const w = data.info.width;
    const h = data.info.height;
    
    // Check center of the image at y=1200
    const y = 1200;
    const x = Math.floor(w / 2);
    const idx = (y * w + x) * 4;
    console.log(`${path.split('/').pop()}: alpha at center is ${data.data[idx + 3]}`);
  } catch(e) {}
}

async function main() {
  await checkMiddle('src/assets/bodies/Light-M Body Male light brown/F/F3.webp');
  await checkMiddle('src/assets/bodies/Light-M Body Male light brown/F/F5.webp');
}

main();
