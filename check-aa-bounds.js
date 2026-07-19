const sharp = require('sharp');

async function checkDiff() {
  const f3Data = await sharp('src/assets/bodies/Light-M Body Male light brown/F/F3.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const aa4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  const w = f3Data.info.width;
  const h = f3Data.info.height;
  
  let minY = h, maxY = 0, minX = w, maxX = 0;
  
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const f3A = f3Data.data[idx + 3];
      const aa4A = aa4Data.data[idx + 3];
      
      if (aa4A > 10 && f3A < 10) {
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
  }
  
  console.log(`AA4 pixels outside of F3 bounding box: X:${minX}-${maxX}, Y:${minY}-${maxY}`);
}

checkDiff().catch(console.error);
