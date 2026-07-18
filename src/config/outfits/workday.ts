import { OutfitCombo } from '../../types/outfit';

export const workday: OutfitCombo = {
  id: 'workday',
  name: 'Work Day',
  thumbnail: require('../../assets/thumbnail img for  wardrobe/WorkDay Thumbnail.png'),
  supportedSizes: ['S', 'M', 'L', 'XL', 'XXL'],
  items: {
    shirt: 'white-shirt',
    variant: 'buttoned_tucked',
    tie: 'black-tie',
    trouser: 'black-trouser',
    bag: 'bag',
    shoes: 'black-shoes',
    watch: 'watch'
  }
};
