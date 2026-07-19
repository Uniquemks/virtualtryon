const fs = require('fs');

const path = 'src/utils/patchResolver.ts';
let content = fs.readFileSync(path, 'utf8');

const injection = `
  trouser: {
    'black-trouser': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/low/legs/bl1l.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/low/torso/bt1l.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/low/tummy/tm1l.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/low/legs/bl2l.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/low/torso/bt2l.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/low/tummy/tm2l.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/low/legs/bl3l.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/low/torso/bt3l.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/low/tummy/tm3l.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/low/legs/bl4l.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/low/torso/bt4l.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/low/tummy/tm4l.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/low/legs/bl4l.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/low/torso/bt5l.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/low/tummy/tm5l.png'), transform: { x: 0, y: 0, scale: 1 } }
        }
      }
    },
    'jeans': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/low/legs/bl1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/low/torso/bt1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/low/tummy/tm1l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/low/legs/bl2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/low/torso/bt2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/low/tummy/tm2l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/low/legs/bl3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/low/torso/bt3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/low/tummy/tm3l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/low/torso/bt4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/low/tummy/tm4l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/low/torso/t5l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/low/tummy/tm5l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        }
      }
    },
    'white-cargo': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/legs/bl1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/torso/bt1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/tummy/tm1l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/legs/bl2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/torso/bt2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/tummy/tm2l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/legs/bl3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/torso/bt3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/tummy/tm3l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/torso/bt4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/tummy/tm4l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/torso/bt5l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/low/tummy/tm5l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        }
      }
    },
    'white-linen-trouser': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/legs/bl1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/torso/bt1l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/tummy/tm1l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/legs/bl2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/torso/bt2l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/tummy/tm2l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/legs/bl3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/torso/bt3l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/tummy/tm3l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/torso/bt4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/tummy/tm4l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/legs/bl4l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/torso/bt5l.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/low/tummy/tm5l.avif'), transform: { x: 0, y: 0, scale: 1 } }
        }
      }
    }
  },
`;

// Insert the trouser config right after "tshirt: {" ends.
// Wait, the safest is to inject it at the very beginning of the map!
const startIdx = content.indexOf('export const CLOTHING_ASSET_MAP: Record<string, any> = {') + 'export const CLOTHING_ASSET_MAP: Record<string, any> = {'.length;
content = content.substring(0, startIdx) + '\\n' + injection + content.substring(startIdx);
fs.writeFileSync(path, content, 'utf8');
console.log('Injected trousers.');
