const sharp = require('sharp');

async function checkDim(path) {
  try {
    const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const w = data.info.width;
    let minX = w, maxX = 0;
    
    for (let i = 0; i < data.data.length; i += 4) {
      if (data.data[i + 3] > 10) {
        const x = (i / 4) % w;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
    console.log(`${path.split('/').pop()}: width is ${maxX - minX}`);
  } catch(e) {}
}

async function main() {
  await checkDim('src/assets/bodies/Light-M Body Male light brown/F/F3.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/D/D3-A.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/E/E3-A.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/D/D3-H.webp');
  await checkDim('src/assets/bodies/Light-M Body Male light brown/E/E3-H.webp');
}

main();
