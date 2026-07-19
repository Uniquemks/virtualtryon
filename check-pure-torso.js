const sharp = require('sharp');

async function checkTorsoWidth(path) {
  const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const w = data.info.width;
  
  let maxW = 0;
  for (let y = 1000; y < 1400; y++) {
    const cy = y;
    const cx = Math.floor(w / 2);
    
    // scan left
    let lx = cx;
    while (lx > 0 && data.data[(cy * w + lx) * 4 + 3] > 10) lx--;
    
    // scan right
    let rx = cx;
    while (rx < w - 1 && data.data[(cy * w + rx) * 4 + 3] > 10) rx++;
    
    const torsoW = rx - lx;
    if (torsoW > maxW) maxW = torsoW;
  }
  
  console.log(`${path.split('/').pop()}: pure torso width is ${maxW}`);
}

async function main() {
  await checkTorsoWidth('src/assets/bodies/Light-M Body Male light brown/F/F1.webp');
  await checkTorsoWidth('src/assets/bodies/Light-M Body Male light brown/F/F3.webp');
  await checkTorsoWidth('src/assets/bodies/Light-M Body Male light brown/F/F4.webp');
  await checkTorsoWidth('src/assets/bodies/Light-M Body Male light brown/F/F5.webp');
}

main().catch(console.error);
