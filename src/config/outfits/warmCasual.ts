import { OutfitCombo } from '../../types/outfit';

export const warmCasual: OutfitCombo = {
  id: 'warm-casual',
  name: 'Warm Casual',
  thumbnail: require('../../assets/thumbnail img for  wardrobe/WarmCasual Thumbnail.png'),
  supportedSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  items: {
    shirt: 'dawn-blue-linen-shirt',
    jacket: 'cream-jacket',
    trouser: 'jeans',
    shoes: 'brown-shoes'
  }
};
