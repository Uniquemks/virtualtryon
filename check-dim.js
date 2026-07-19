const sharp = require('sharp');

async function checkImage(path) {
  const info = await sharp(path).metadata();
  console.log(`${path}: ${info.width}x${info.height}`);
}

async function main() {
  await checkImage('src/assets/clothes/trousers/mid/legs/bl2.png');
  await checkImage('src/assets/clothes/trousers/mid/legs/bl3.png');
  await checkImage('src/assets/clothes/trousers/mid/legs/bl4.png');
  await checkImage('src/assets/clothes/trousers/mid/torso/bt2.png');
  await checkImage('src/assets/clothes/trousers/mid/torso/bt4.png');
}

main().catch(console.error);
