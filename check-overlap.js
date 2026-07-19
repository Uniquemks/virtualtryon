const sharp = require('sharp');

async function checkDiff() {
  const chestData = await sharp('src/assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const aa4Data = await sharp('src/assets/bodies/Light-M Body Male light brown/AA/AA4.webp').raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  
  let cY = 0, aY = 0;
  
  for (let i = 0; i < chestData.data.length; i += 4) {
    if (chestData.data[i + 3] > 10) cY++;
    if (aa4Data.data[i + 3] > 10) aY++;
  }
  console.log(`Chest solid pixels: ${cY}, Tummy solid pixels: ${aY}`);
  
  // check overlap
  let overlap = 0;
  for (let i = 0; i < chestData.data.length; i += 4) {
    if (chestData.data[i + 3] > 10 && aa4Data.data[i + 3] > 10) overlap++;
  }
  console.log(`Overlap pixels: ${overlap}`);
}

checkDiff().catch(console.error);
