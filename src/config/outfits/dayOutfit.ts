import { OutfitCombo } from '../../types/outfit';

export const dayOutfit: OutfitCombo = {
  id: 'day-outfit',
  name: 'Day Outfit',
  thumbnail: require('../../assets/thumbnail img for  wardrobe/white linen shirt.png'),
  supportedSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  items: {
    tshirt: 'white-basic',
    shirt: 'white-shirt',
    variant: 'unbuttoned_untucked',
    shorts: 'white-shorts',
    cap: 'red-cap',
    shoes: 'white-sneakers'
  }
};
