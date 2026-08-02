import { OutfitCombo } from '../../types/outfit';

export const dayOutfit: OutfitCombo = {
  id: 'day-outfit',
  name: 'Day Outfit',
  thumbnail: require('../../assets/thumbnail img for  wardrobe/DayOutfit.png'),
  supportedSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  items: {
    tshirt: 'white-tshirt',
    trouser: 'jeans',
    shoes: 'red-shoes'
  }
};

