const sharp = require('sharp');

async function getWidth(path) {
  try {
    const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const w = data.info.width;
    const h = data.info.height;
    
    let minX = w;
    let maxX = 0;
    
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
  } catch(e) {
    console.log(`Failed to process ${path}: ${e.message}`);
  }
}

async function main() {
  const fPath = 'src/assets/bodies/Light-M Body Male light brown/F/F';
  const aaPath = 'src/assets/bodies/Light-M Body Male light brown/AA/AA';
  
  for(let i=1; i<=6; i++) {
    await getWidth(fPath + i + '.webp');
  }
  for(let i=1; i<=5; i++) {
    await getWidth(aaPath + i + '.webp');
  }
  await getWidth('src/assets/bodies/Light-M Body Male light brown/AA/TC.webp');
}

main().catch(console.error);
