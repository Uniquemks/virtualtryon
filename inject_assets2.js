const fs = require('fs');

const path = 'src/utils/patchResolver.ts';
let content = fs.readFileSync(path, 'utf8');

const injection = `
    , shoes: {
      'formal-black-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png') } } } },
      'black-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png') } } } },
      'brown-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/brown shoes.png') } } } },
      'red-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/red shoes.png') } } } },
    },
    watch: {
      'watch': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/watch-hy.png') } },
        'XXL': { main: { source: require('../assets/accessories/watch & bag/watch-hy.png') } },
      } }
    },
    bag: {
      'bag': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/bag-hy.png') } },
        'XXL': { main: { source: require('../assets/accessories/watch & bag/bag-hy.png') } },
      } }
    },
    cap: {
      'cap': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/cap/scap.png') } },
        'M': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'L': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'XL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
        'XXL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
      } },
      'red-cap': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/cap/scap.png') } },
        'M': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'L': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'XL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
        'XXL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
      } }
    },
    scarf: {
      'scarf': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/scarf/sscarf.png') } },
        'M': { main: { source: require('../assets/accessories/scarf/mscarf.png') } },
        'L': { main: { source: require('../assets/accessories/scarf/mscarf.png') } },
        'XL': { main: { source: require('../assets/accessories/scarf/hscarf.png') } },
        'XXL': { main: { source: require('../assets/accessories/scarf/hscarf.png') } },
      } }
    },
    glasses: {
      'goggles1': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/goggles1/sgoggles.png') } },
        'M': { main: { source: require('../assets/accessories/goggles1/mgoggles.png') } },
        'L': { main: { source: require('../assets/accessories/goggles1/mgoggles.png') } },
        'XL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png') } },
        'XXL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png') } },
      } },
      'goggles2': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/goggles2/sgoggles.png') } },
        'M': { main: { source: require('../assets/accessories/goggles2/mgoggles.png') } },
        'L': { main: { source: require('../assets/accessories/goggles2/mgoggles.png') } },
        'XL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png') } },
        'XXL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png') } },
      } },
      'goggles3': { 'normal': { 
        'S': { main: { source: require('../assets/accessories/goggles3/sgoggles.png') } },
        'M': { main: { source: require('../assets/accessories/goggles3/mgoggles.png') } },
        'L': { main: { source: require('../assets/accessories/goggles3/mgoggles.png') } },
        'XL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png') } },
        'XXL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png') } },
      } }
    },
    jacket: {
      'cream-jacket': { 'normal': { 
        'S': { 
          arms: { source: require('../assets/clothes/Cream Jacket png avif/arms/jks1.avif') },
          main: { source: require('../assets/clothes/Cream Jacket png avif/jk1.avif') } 
        },
        'M': { 
          arms: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkm1.avif') },
          main: { source: require('../assets/clothes/Cream Jacket png avif/jk2.avif') } 
        },
        'L': { 
          arms: { source: require('../assets/clothes/Cream Jacket png avif/arms/jka1.avif') },
          main: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif') } 
        },
        'XL': { 
          arms: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif') },
          main: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif') } 
        },
        'XXL': { 
          arms: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif') },
          main: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif') } 
        }
      } }
    }
`;

const targetIndex = content.lastIndexOf('};', content.indexOf('export interface RenderPatch'));

if (targetIndex !== -1) {
  content = content.slice(0, targetIndex) + injection + '\n};\n' + content.slice(targetIndex + 2);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Appended to CLOTHING_ASSET_MAP successfully.');
} else {
  console.error('Could not find target index for injection.');
}
