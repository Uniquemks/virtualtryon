const fs = require('fs');

const mappings = {
  S: { torso: 'f1', tummy: 'aa1', neck: 'c1', shoulder: 'sh1', sleeve: 'arms/s1', chest: 'chest/bs1' },
  M: { torso: 'f2', tummy: 'a2', neck: 'c2', shoulder: 'sh2', sleeve: 'arms/m1', chest: 'chest/bm1' },
  L: { torso: 'f4', tummy: 'a4', neck: 'c3', shoulder: 'sh4', sleeve: 'arms/h1', chest: 'chest/bh1' },
  XL: { torso: 'f3', tummy: 'a3', neck: 'c3', shoulder: 'sh3', sleeve: 'arms/a1', chest: 'chest/ba1' },
  XXL: { torso: 'f5', tummy: 'a5', neck: 'c3', shoulder: 'sh3', sleeve: 'arms/a1', chest: 'chest/ba1', maskBottom: 10 }
};

async function run() {
  const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');
  const baseDir = '../assets/clothes/normal white t-shirt avif';

  let newBlock = `    "white-tshirt": {\n      untucked: {\n`;
  
  for (const size of ['S', 'M', 'L', 'XL', 'XXL']) {
    const m = mappings[size];
    
    newBlock += `        ${size}: {\n`;
    newBlock += `          torso: {\n            source: require("${baseDir}/torso/${m.torso}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }${m.maskBottom ? ',\n            maskBottom: 10' : ''}\n          },\n`;
    newBlock += `          tummy: {\n            source: require("${baseDir}/tummy/${m.tummy}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }\n          },\n`;
    newBlock += `          neck: {\n            source: require("${baseDir}/neck/${m.neck}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }\n          },\n`;
    newBlock += `          shoulder: {\n            source: require("${baseDir}/${m.shoulder}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }\n          },\n`;
    newBlock += `          sleeve: {\n            source: require("${baseDir}/${m.sleeve}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }\n          },\n`;
    newBlock += `          chest: {\n            source: require("${baseDir}/${m.chest}.avif"),\n            transform: { x: 0, y: 0, scale: 1 }\n          }\n        },\n`;
  }
  
  newBlock += `      }\n    }`;

  // Replace the white-tshirt block in patchResolver.ts
  const regex = /"white-tshirt":\s*\{\s*untucked:\s*\{[\s\S]*?(?=\n  \},\n  trouser:)/;
  
  const newContent = content.replace(regex, newBlock);
  fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
  console.log('Fixed patchResolver.ts for white-tshirt with accurate body mapping and scale=1');
}

run().catch(console.error);
