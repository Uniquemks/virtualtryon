const fs = require('fs');
const sharp = require('sharp');

async function getWidth(path) {
  try {
    const data = await sharp(path).raw().ensureAlpha().toBuffer({ resolveWithObject: true });
    const w = data.info.width;
    let minX = w, maxX = 0;
    for (let i = 0; i < data.data.length; i += 4) {
      if (data.data[i + 3] > 10) {
        const x = (i / 4) % w;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
      }
    }
    return maxX - minX;
  } catch(e) {
    return null;
  }
}

const targetW = {
  'S': 700.4,
  'M': 674.65,
  'L': 724.09,
  'XL': 744.12,
  'XXL': 712.62
};

const mappings = {
  S: { torso: 'f2', tummy: 'a2', neck: 'c1', shoulder: 'sh2', sleeve: 'arms/m1', chest: 'chest/bm1' },
  M: { torso: 'f3', tummy: 'a3', neck: 'c2', shoulder: 'sh3', sleeve: 'arms/a1', chest: 'chest/ba1' },
  L: { torso: 'f4', tummy: 'a4', neck: 'c3', shoulder: 'sh4', sleeve: 'arms/h1', chest: 'chest/bh1' },
  XL: { torso: 'f3', tummy: 'a3', neck: 'c3', shoulder: 'sh3', sleeve: 'arms/a1', chest: 'chest/ba1' },
  XXL: { torso: 'f5', tummy: 'a5', neck: 'c3', shoulder: 'sh3', sleeve: 'arms/a1', chest: 'chest/ba1', maskBottom: 10 }
};

async function run() {
  const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');
  const baseDir = '../assets/clothes/normal white t-shirt avif';
  const localBaseDir = 'src/assets/clothes/normal white t-shirt avif';

  let newBlock = `    "white-tshirt": {\n      untucked: {\n`;
  
  for (const size of ['S', 'M', 'L', 'XL', 'XXL']) {
    const m = mappings[size];
    const torsoPath = `${localBaseDir}/torso/${m.torso}.avif`;
    const w = await getWidth(torsoPath);
    let scaleX = 1;
    if (w) {
      scaleX = (targetW[size] / w).toFixed(3);
    }
    
    newBlock += `        ${size}: {\n`;
    newBlock += `          torso: {\n            source: require("${baseDir}/torso/${m.torso}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }${m.maskBottom ? ',\n            maskBottom: 10' : ''}\n          },\n`;
    newBlock += `          tummy: {\n            source: require("${baseDir}/tummy/${m.tummy}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }\n          },\n`;
    newBlock += `          neck: {\n            source: require("${baseDir}/neck/${m.neck}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }\n          },\n`;
    newBlock += `          shoulder: {\n            source: require("${baseDir}/${m.shoulder}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }\n          },\n`;
    newBlock += `          sleeve: {\n            source: require("${baseDir}/${m.sleeve}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }\n          },\n`;
    newBlock += `          chest: {\n            source: require("${baseDir}/${m.chest}.avif"),\n            transform: { x: 0, y: 0, scale: 1, scaleX: ${scaleX} }\n          }\n        },\n`;
  }
  
  newBlock += `      }\n    }`;

  // Replace the white-tshirt block in patchResolver.ts
  const regex = /"white-tshirt":\s*\{\s*untucked:\s*\{[\s\S]*?(?=\n  \},\n  trouser:)/;
  
  const newContent = content.replace(regex, newBlock);
  fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
  console.log('Fixed patchResolver.ts for white-tshirt');
}

run().catch(console.error);
