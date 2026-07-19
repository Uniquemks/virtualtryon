const sharp = require('sharp');

async function checkMismatch(torsoPath, legPath) {
  const tData = await sharp(torsoPath).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const lData = await sharp(legPath).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  const w = tData.info.width;
  const h = tData.info.height;
  
  let mismatchCount = 0;
  
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const tAlpha = tData.data[idx + 3];
      const lAlpha = lData.data[idx + 3];
      
      // If leg is visible (alpha > 0) but torso is transparent (alpha == 0), it sticks out!
      if (lAlpha > 100 && tAlpha < 10) {
        mismatchCount++;
      }
    }
  }
  
  console.log(`${legPath} sticking out of ${torsoPath}: ${mismatchCount} pixels`);
}

async function main() {
  await checkMismatch('src/assets/clothes/trousers/mid/torso/bt2.png', 'src/assets/clothes/trousers/mid/legs/bl2.png');
  await checkMismatch('src/assets/clothes/trousers/mid/torso/bt3.png', 'src/assets/clothes/trousers/mid/legs/bl3.png');
  await checkMismatch('src/assets/clothes/trousers/mid/torso/bt5.png', 'src/assets/clothes/trousers/mid/legs/bl4.png');
}

main().catch(console.error);
