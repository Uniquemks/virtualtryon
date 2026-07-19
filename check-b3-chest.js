const sharp = require('sharp');

async function getWidth(path) {
  try {
    const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const w = data.info.width;
    const h = data.info.height;
    
    let minX = w;
    let maxX = 0;
    
    // check waist area
    for (let y = 1000; y < 1400; y++) {
      for (let x = 0; x < w; x++) {
        const idx = (y * w + x) * 4;
        if (data.data[idx + 3] > 0) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
        }
      }
    }
    
    console.log(`${path.split('/').pop()}: width at waist is ${maxX - minX}`);
  } catch(e) {}
}

async function main() {
  await getWidth('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp');
  await getWidth('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-H.webp');
  await getWidth('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-M.webp');
  await getWidth('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-S.webp');
}

main();
