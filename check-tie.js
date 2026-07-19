const sharp = require('sharp');

async function checkTie() {
  const { data, info } = await sharp('src/assets/clothes/shirts/classic white shirt/tie collar/c1t.avif')
    .raw()
    .ensureAlpha()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const centerX = Math.floor(w / 2);
  let whitePixels = 0;
  let blackPixels = 0;
  let transparentPixels = 0;

  for (let y = 800; y < 1200; y++) {
    const idx = (y * w + centerX) * info.channels;
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    const a = data[idx + 3];
    
    if (a === 0) {
      transparentPixels++;
    } else if (r > 200 && g > 200 && b > 200) {
      whitePixels++;
    } else if (r < 50 && g < 50 && b < 50) {
      blackPixels++;
    }
  }
  
  console.log(`c1t.avif From y=800 to y=1200 at centerX:`);
  console.log(`Transparent: ${transparentPixels}`);
  console.log(`White: ${whitePixels}`);
  console.log(`Black: ${blackPixels}`);
}

checkTie().catch(console.error);
