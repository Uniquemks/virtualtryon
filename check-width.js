const sharp = require('sharp');

async function getWidth(path) {
  const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const w = data.info.width;
  const h = data.info.height;
  
  let minX = w;
  let maxX = 0;
  
  for (let y = 1000; y < 1500; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (data.data[idx + 3] > 0) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  
  console.log(`${path}: width at waist/hips is ${maxX - minX}`);
}

async function main() {
  await getWidth('src/assets/clothes/trousers/mid/torso/bt2.png');
  await getWidth('src/assets/clothes/trousers/mid/torso/bt3.png');
  await getWidth('src/assets/clothes/trousers/mid/torso/bt4.png');
  await getWidth('src/assets/clothes/trousers/mid/torso/bt5.png');
}

main().catch(console.error);
