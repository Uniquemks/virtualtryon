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
    console.log(`${path.split('/').slice(-3).join('/')}: width is ${maxX - minX}`);
  } catch(e) {}
}

async function main() {
  await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t3.avif');
  await getWidth('src/assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t3.avif');
  await getWidth('src/assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t3.avif');
}

main();
