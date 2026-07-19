const sharp = require('sharp');

async function checkDiff() {
  const f1Data = await sharp('src/assets/bodies/Light-M Body Male light brown/F/F1.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const aa4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  const w = f1Data.info.width;
  const h = f1Data.info.height;
  
  let pixelsOutside = 0;
  
  for (let i = 0; i < w * h * 4; i += 4) {
    const f1A = f1Data.data[i + 3];
    const aa4A = aa4Data.data[i + 3];
    
    if (aa4A > 10 && f1A < 10) {
      pixelsOutside++;
    }
  }
  
  console.log(`AA4 pixels outside of F1: ${pixelsOutside}`);
}

checkDiff().catch(console.error);
