const sharp = require('sharp');

async function checkDiff() {
  const f4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/F/F4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const aa4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  const w = f4Data.info.width;
  const h = f4Data.info.height;
  
  let pixelsOutside = 0;
  
  for (let i = 0; i < w * h * 4; i += 4) {
    const f4A = f4Data.data[i + 3];
    const aa4A = aa4Data.data[i + 3];
    
    if (aa4A > 10 && f4A < 10) {
      pixelsOutside++;
    }
  }
  
  console.log(`AA4 pixels outside of F4: ${pixelsOutside}`);
}

checkDiff().catch(console.error);
