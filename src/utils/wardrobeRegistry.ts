import { ImageSourcePropType } from 'react-native';

export type ItemStatus = 'READY' | 'COMING_SOON' | 'MISSING_ASSETS';

export type CategoryId = 'shirts' | 'tshirts' | 'trousers' | 'shoes' | 'caps' | 'scarves' | 'glasses' | 'watches' | 'bags' | 'jackets' | 'ties';
export interface WardrobeItem {
  id: string;
  name: string;
  category: CategoryId;
  thumbnail: ImageSourcePropType;
  status: ItemStatus;
  badge?: 'NEW' | 'COMING SOON' | 'READY';
  drapingAssets?: string[];
}

export const WARDROBE_REGISTRY: WardrobeItem[] = [
  // ===================== T-SHIRTS =====================
  {
    id: 'white-tshirt',
    name: 'Normal White T-Shirt',
    category: 'tshirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/Notch Collar Shirt white.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'white-basic',
    name: 'White Basic T-Shirt',
    category: 'tshirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/Notch Collar Shirt white.png'),
    status: 'COMING_SOON'
  },

  // ===================== SHIRTS =====================
  {
    id: 'white-shirt',
    name: 'Notch Collar Shirt White',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/Notch Collar Shirt white.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'dawn-blue-linen-shirt',
    name: 'Dawn Blue Linen Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/Dawn Blue linen shirt.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'black-linen-shirt',
    name: 'Black Linen Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/black linen shirt.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'blue-linen-shirt',
    name: 'Blue Linen Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/blue linen shirt.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'cream-jacket',
    name: 'Cream Jacket',
    category: 'jackets',
    thumbnail: require('../assets/thumbnail img for  wardrobe/cream jacket.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'notch-collar-butter-yellow',
    name: 'Notch Collar Butter Yellow',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/notch collar shirt Butter Yellow.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'notch-collar-powder-pink',
    name: 'Notch Collar Powder Pink',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/notch collar shirt Powder Pink.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'notch-collar-pumpkin',
    name: 'Notch Collar Pumpkin',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/notch collar shirt Pumpkin.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'olive-linen-shirt',
    name: 'Olive Linen Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/olive linen shirt.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'sweater',
    name: 'Sweater',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/sweater.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'tie',
    name: 'Tie',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/tie.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'white-linen-shirt',
    name: 'White Linen Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/white linen shirt.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'grey-sweater',
    name: 'Grey Sweater',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/sweater.png'),
    status: 'COMING_SOON'
  },
  {
    id: 'white-formal',
    name: 'White Formal Shirt',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/Notch Collar Shirt white.png'),
    status: 'COMING_SOON'
  },
  {
    id: 'beige-overcoat',
    name: 'Beige Overcoat',
    category: 'shirts',
    thumbnail: require('../assets/thumbnail img for  wardrobe/cream jacket.png'),
    status: 'COMING_SOON'
  },


  // ===================== TROUSERS =====================
  {
    id: 'black-trouser',
    name: 'Black Pant Trouser',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/black pant trouser.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'grey-short',
    name: 'Grey Short',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/grey short.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'jeans',
    name: 'Jeans',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/jeans.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'white-cargo',
    name: 'White Cargo',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/white cargo.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'white-linen-trouser',
    name: 'White Linen Trouser',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/white linen trouser.png'),
    status: 'READY',
    badge: 'READY'
  },
  {
    id: 'blue-jeans',
    name: 'Blue Jeans',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/jeans.png'),
    status: 'COMING_SOON'
  },
  {
    id: 'white-shorts',
    name: 'White Shorts',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/grey short.png'),
    status: 'COMING_SOON'
  },
  {
    id: 'formal-black',
    name: 'Formal Black Trouser',
    category: 'trousers',
    thumbnail: require('../assets/thumbnail img for  wardrobe/black pant trouser.png'),
    status: 'COMING_SOON'
  },

  // ===================== SHOES =====================
  {
    id: 'black-shoes',
    name: 'Black Shoes',
    category: 'shoes',
    thumbnail: require('../assets/thumbnail img for  wardrobe/black shoes.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'brown-shoes',
    name: 'Brown Shoes',
    category: 'shoes',
    thumbnail: require('../assets/thumbnail img for  wardrobe/brown-shoes.jpg'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'red-shoes',
    name: 'Red Shoes',
    category: 'shoes',
    thumbnail: require('../assets/accessories/Shoes/red shoes.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'white-sneakers',
    name: 'White Sneakers',
    category: 'shoes',
    thumbnail: require('../assets/thumbnail img for  wardrobe/brown-shoes.jpg'), // placeholder
    status: 'COMING_SOON'
  },
  {
    id: 'formal-black-shoes',
    name: 'Formal Black Shoes',
    category: 'shoes',
    thumbnail: require('../assets/thumbnail img for  wardrobe/black shoes.png'),
    status: 'COMING_SOON'
  },

  // ===================== WATCH & BAG =====================
  {
    id: 'watch',
    name: 'Wrist Watch',
    category: 'watches',
    thumbnail: require('../assets/thumbnail img for  wardrobe/watch.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'bag',
    name: 'Side Bag',
    category: 'bags',
    thumbnail: require('../assets/thumbnail img for  wardrobe/bag.png'),
    status: 'READY',
    badge: 'NEW'
  },

  // ===================== CAPS =====================
  {
    id: 'cap',
    name: 'Cap',
    category: 'caps',
    thumbnail: require('../assets/thumbnail img for  wardrobe/cap.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'red-cap',
    name: 'Red Cap',
    category: 'caps',
    thumbnail: require('../assets/thumbnail img for  wardrobe/cap.png'),
    status: 'COMING_SOON'
  },

  // ===================== SCARVES =====================
  {
    id: 'scarf',
    name: 'Scarf',
    category: 'scarves',
    thumbnail: require('../assets/thumbnail img for  wardrobe/scarf.png'),
    status: 'READY',
  },
  {
    id: 'black-scarf',
    name: 'Black Scarf',
    category: 'scarves',
    thumbnail: require('../assets/thumbnail img for  wardrobe/scarf.png'),
    status: 'READY'
  },

  // ===================== GLASSES =====================
  {
    id: 'goggles1',
    name: 'Goggles Type 1',
    category: 'glasses',
    thumbnail: require('../assets/thumbnail img for  wardrobe/goggles1.png'),
    status: 'READY',
  },
  {
    id: 'goggles2',
    name: 'Goggles Type 2',
    category: 'glasses',
    thumbnail: require('../assets/thumbnail img for  wardrobe/goggles2.png'),
    status: 'READY',
  },
  {
    id: 'goggles3',
    name: 'Goggles Type 3',
    category: 'glasses',
    thumbnail: require('../assets/thumbnail img for  wardrobe/goggles3.png'),
    status: 'READY',
  },

  // ===================== WATCHES =====================
  {
    id: 'watch-1',
    name: 'Watch Thumbnail',
    category: 'watches',
    thumbnail: require('../assets/thumbnail img for  wardrobe/watch-thumbnail.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'watch-2',
    name: 'Watch Classic',
    category: 'watches',
    thumbnail: require('../assets/thumbnail img for  wardrobe/watch.png'),
    status: 'COMING_SOON',
  },

  // ===================== BAGS =====================
  {
    id: 'bag-1',
    name: 'Bag Thumbnail',
    category: 'bags',
    thumbnail: require('../assets/thumbnail img for  wardrobe/bag-thumbnail.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'bag-2',
    name: 'Bag Classic',
    category: 'bags',
    thumbnail: require('../assets/thumbnail img for  wardrobe/bag.png'),
    status: 'COMING_SOON',
  },
  {
    id: 'office-bag',
    name: 'Office Bag',
    category: 'bags',
    thumbnail: require('../assets/thumbnail img for  wardrobe/bag.png'),
    status: 'COMING_SOON'
  },
  // ===================== TIES =====================
  {
    id: 'black-tie',
    name: 'Black Tie',
    category: 'ties',
    thumbnail: require('../assets/thumbnail img for  wardrobe/tie.png'),
    status: 'READY',
    badge: 'NEW'
  },
  {
    id: 'brown-tie',
    name: 'Brown Tie',
    category: 'ties',
    thumbnail: require('../assets/thumbnail img for  wardrobe/tie.png'),
    status: 'READY',
    badge: 'NEW'
  }
];

export const getWardrobeItems = (category: CategoryId): WardrobeItem[] => {
  return WARDROBE_REGISTRY.filter(item => item.category === category);
};

export const getInventoryStats = () => {
  const stats: Record<CategoryId, { ready: number; total: number; comingSoon: number; missing: number }> = {
    shirts: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    tshirts: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    trousers: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    shoes: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    caps: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    scarves: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    glasses: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    watches: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    bags: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    jackets: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
    ties: { ready: 0, total: 0, comingSoon: 0, missing: 0 },
  };

  WARDROBE_REGISTRY.forEach(item => {
    if (!stats[item.category]) return;
    stats[item.category].total++;
    if (item.status === 'READY') stats[item.category].ready++;
    if (item.status === 'COMING_SOON') stats[item.category].comingSoon++;
    if (item.status === 'MISSING_ASSETS') stats[item.category].missing++;
  });

  return stats;
};

export const CATEGORIES_CONFIG: { id: CategoryId; name: string; icon: string }[] = [
  { id: 'tshirts', name: 'T-Shirts', icon: 'tshirt-crew-outline' },
  { id: 'shirts', name: 'Shirts', icon: 'tshirt-crew' },
  { id: 'trousers', name: 'Trousers', icon: 'human-male-height' },
  { id: 'shoes', name: 'Shoes', icon: 'shoe-formal' },
  { id: 'caps', name: 'Caps', icon: 'hat-fedora' }, // using a valid icon, will check MaterialCommunityIcons
  { id: 'scarves', name: 'Scarves', icon: 'weather-windy' }, // proxy icon for scarf
  { id: 'glasses', name: 'Glasses', icon: 'glasses' },
  { id: 'watches', name: 'Watches', icon: 'watch-variant' },
  { id: 'bags', name: 'Bags', icon: 'bag-personal' },
  { id: 'jackets', name: 'Jackets', icon: 'jacket' },
  { id: 'ties', name: 'Ties', icon: 'tie' },
];
