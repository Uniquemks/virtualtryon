const sharp = require('sharp');

async function checkDiff() {
  const f3Data = await sharp('src/assets/bodies/Light-M Body Male light brown/F/F3.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const aa4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  const w = f3Data.info.width;
  const h = f3Data.info.height;
  
  for (let y = 1040; y < 1575; y += 50) {
    let line = `Y=${y}: `;
    for (let x = 264; x < 767; x += 50) {
      const idx = (y * w + x) * 4;
      const f3A = f3Data.data[idx + 3];
      const aa4A = aa4Data.data[idx + 3];
      
      if (aa4A > 10 && f3A < 10) {
        line += `X${x} `;
      }
    }
    if (line.length > 10) console.log(line);
  }
}

checkDiff().catch(console.error);
