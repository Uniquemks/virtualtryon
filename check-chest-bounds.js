const sharp = require('sharp');

async function checkDiff() {
  const chestData = await sharp('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  let minY = 10000, maxY = 0;
  
  for (let i = 0; i < chestData.data.length; i += 4) {
    if (chestData.data[i + 3] > 10) {
      const y = Math.floor((i / 4) / chestData.info.width);
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
  console.log(`Chest Y bounds: ${minY} - ${maxY}`);
}

checkDiff().catch(console.error);
