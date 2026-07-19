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
    return 0;
  }
}

async function main() {
  const whiteW = {
    'S': await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t1.avif'),
    'M': await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t2.avif'),
    'L': await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t4.avif'),
    'XL': await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t3.avif'),
    'XXL': await getWidth('src/assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t5.avif')
  };
  
  console.log(`White shirt unscaled widths:`, whiteW);
  
  // the scaleX applied to white-shirt
  const whiteScale = {
    'S': 1.03,
    'M': 1.03,
    'L': 1.03,
    'XL': 1.08,
    'XXL': 1.07
  };
  
  const targetW = {
    'S': whiteW['S'] * whiteScale['S'],
    'M': whiteW['M'] * whiteScale['M'],
    'L': whiteW['L'] * whiteScale['L'],
    'XL': whiteW['XL'] * whiteScale['XL'],
    'XXL': whiteW['XXL'] * whiteScale['XXL']
  };
  
  console.log(`Target widths:`, targetW);
  
  // Now measure the other shirts
  const shirts = {
    "dawn-blue-linen-shirt": "Mandarin Collar Shirt  normal dawn blue avif/tuck torso",
    "blue-linen-shirt": "classic collar normal shirt blue color avif/tuck torso"
  };
  
  for (const [name, dir] of Object.entries(shirts)) {
    const w = {
      'S': await getWidth(`src/assets/clothes/shirts/${dir}/t1.avif`),
      'M': await getWidth(`src/assets/clothes/shirts/${dir}/t2.avif`),
      'L': await getWidth(`src/assets/clothes/shirts/${dir}/t4.avif`),
      'XL': await getWidth(`src/assets/clothes/shirts/${dir}/t3.avif`),
      'XXL': await getWidth(`src/assets/clothes/shirts/${dir}/t5.avif`)
    };
    
    console.log(`${name} widths:`, w);
    
    const scale = {
      'S': targetW['S'] / w['S'],
      'M': targetW['M'] / w['M'],
      'L': targetW['L'] / w['L'],
      'XL': targetW['XL'] / w['XL'],
      'XXL': targetW['XXL'] / w['XXL']
    };
    
    console.log(`${name} needed scaleX:`, scale);
  }
}

main();
