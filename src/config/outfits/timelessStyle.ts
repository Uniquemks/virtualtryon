import { OutfitCombo } from '../../types/outfit';

export const timelessStyle: OutfitCombo = {
  id: 'timeless-style',
  name: 'Timeless Style',
  thumbnail: require('../../assets/thumbnail img for  wardrobe/Timeless Style.png'),
  supportedSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  items: {
    tshirt: 'white-tshirt',
    trouser: 'white-cargo',
    shoes: 'red-shoes',
    watch: 'watch',
    glasses: 'goggles2'
  }
};
