const sharp = require('sharp');

async function getWidth(path) {
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
    return maxX - minX;
  } catch(e) {
    return 0;
  }
}

async function main() {
  const wsTorso = await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t3.avif');
  const wsShoulder = await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif');
  
  const blTorso = await getWidth('src/assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t3.avif');
  const blShoulder = await getWidth('src/assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif');
  
  console.log(`White shirt XL: torso=${wsTorso}, shoulder=${wsShoulder}`);
  console.log(`Black linen XL: torso=${blTorso}, shoulder=${blShoulder}`);
}

main();
