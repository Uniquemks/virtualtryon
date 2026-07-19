const sharp = require('sharp');
const fs = require('fs');

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
    return null; // File might be .png instead of .avif
  }
}

async function processShirts() {
  const targetW = {
    'S': 700.4,
    'M': 674.65,
    'L': 724.09,
    'XL': 744.12,
    'XXL': 712.62
  };
  
  const content = fs.readFileSync('src/utils/patchResolver.ts', 'utf8');
  
  const shirtIds = [
    "white-shirt",
    "notch-collar-powder-pink",
    "notch-collar-pumpkin",
    "notch-collar-butter-yellow",
    "blue-linen-shirt",
    "olive-linen-shirt",
    "black-linen-shirt",
    "dawn-blue-linen-shirt",
    "white-linen-shirt"
  ];

  let newContent = content;

  for (const shirtId of shirtIds) {
    const shirtRegex = new RegExp(`("${shirtId}":\\s*\\{)([\\s\\S]*?)(?=\\n    \\},)`, 'g');
    
    // To find the directory for this shirt, we can look for the first require path
    const match = shirtRegex.exec(newContent);
    if (!match) continue;
    const shirtContent = match[2];
    const requireMatch = shirtContent.match(/require\("([^"]+)\/[^\/]+"\)/);
    if (!requireMatch) continue;
    
    // The base directory path
    // e.g. "../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso"
    // Actually, we just need the parent of the last folder.
    const fullPath = requireMatch[1]; 
    const baseDirMatch = fullPath.match(/^(.*\/clothes\/shirts\/[^\/]+)/);
    if (!baseDirMatch) continue;
    
    let baseDir = baseDirMatch[1];
    baseDir = baseDir.replace('../assets/', 'src/assets/');
    
    // Try to measure the torso for each size
    const scales = {};
    const sizeMap = {
      'S': 't1', 'M': 't2', 'L': 't4', 'XL': 't3', 'XXL': 't5'
    };
    
    for (const [size, prefix] of Object.entries(sizeMap)) {
      // It might be in "mid tuck torso", "tuck torso", etc.
      // Let's just find ANY file ending in /t1.avif or /t1.png for this shirt in patchResolver.ts
      const torsoRegex = new RegExp(`require\\("([^"]+/${prefix}\\.(avif|png))"\\)`);
      const tMatch = shirtContent.match(torsoRegex);
      if (tMatch) {
        const filePath = tMatch[1].replace('../assets/', 'src/assets/');
        const w = await getWidth(filePath);
        if (w) {
          scales[size] = (targetW[size] / w).toFixed(3);
        }
      }
    }
    
    console.log(`Scales for ${shirtId}:`, scales);
    
    // Now apply these scales
    newContent = newContent.replace(shirtRegex, (matchStr, prefix, sContent) => {
      let updatedSContent = sContent;
      
      const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
      for (const size of sizes) {
        if (!scales[size]) continue;
        
        const scaleVal = scales[size];
        
        // Find the size block
        const sRegex = new RegExp(`(${size}:\\s*\\{)([\\s\\S]*?)(?=\\n        [SMLXL]{1,3}:\\s*\\{|\\n      \\})`, 'g');
        updatedSContent = updatedSContent.replace(sRegex, (sMatchStr, sPrefix, sBlock) => {
          
          // Replace transform in shoulder, torso, sleeve, tummy
          // Currently, they might look like: transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } or just scale: 1
          let updatedSBlock = sBlock;
          const layersToScale = ['shoulder', 'torso', 'sleeve', 'tummy'];
          
          for (const layer of layersToScale) {
            const lRegex = new RegExp(`(${layer}:\\s*\\{[^}]*?)transform:\\s*\\{([^}]+)\\}([^}]*\\})`, 'g');
            updatedSBlock = updatedSBlock.replace(lRegex, (lMatchStr, lPrefix, transformInner, lSuffix) => {
              // Parse inner
              // e.g. x: 0, y: 0, scale: 1, scaleX: 1.03
              let newTransform = transformInner.replace(/,\s*scaleX:\s*[0-9.]+/, '');
              
              // Only apply scaleX if it's not 1.000
              if (scaleVal !== "1.000") {
                newTransform += `, scaleX: ${scaleVal}`;
              }
              
              return `${lPrefix}transform: {${newTransform}}${lSuffix}`;
            });
          }
          
          return sPrefix + updatedSBlock;
        });
      }
      
      return prefix + updatedSContent;
    });
  }
  
  fs.writeFileSync('src/utils/patchResolver.ts', newContent, 'utf8');
  console.log('Done fixing patchResolver.ts');
}

processShirts().catch(console.error);
