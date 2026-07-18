import { OUTFIT_COMBOS } from '../config/outfits';
import { WARDROBE_REGISTRY } from './wardrobeRegistry';

export interface OutfitSelection {
  tshirt?: string | null;
  shirt?: string | null;
  trouser?: string | null;
  shorts?: string | null;
  sweater?: string | null;
  coat?: string | null;
  jacket?: string | null;
  tie?: string | null;
  scarf?: string | null;
  shoes?: string | null;
  cap?: string | null;
  bag?: string | null;
  watch?: string | null;
  glasses?: string | null;
}

export interface RenderOutfit {
  tshirt?: { id: string; variant?: 'untucked' };
  shirt?: { id: string; variant?: 'buttoned_tucked' | 'unbuttoned_untucked' | 'buttoned_tucked_tie' | 'unbuttoned_untucked_tie' };
  trouser?: { id: string; variant?: 'normal' };
  shorts?: { id: string; variant?: 'normal' };
  sweater?: { id: string };
  coat?: { id: string };
  jacket?: { id: string };
  tie?: { id: string };
  scarf?: { id: string };
  shoes?: { id: string };
  cap?: { id: string };
  bag?: { id: string };
  watch?: { id: string };
  glasses?: { id: string };
}

export function resolveOutfit(selection: OutfitSelection): RenderOutfit {
  const { tshirt, shirt, trouser, shorts, sweater, coat, jacket, tie, scarf, shoes, cap, bag, watch, glasses } = selection;
  const outfit: RenderOutfit = {};

  let tshirtVariant: 'untucked' = 'untucked';
  let shirtVariant: 'buttoned_tucked' | 'unbuttoned_untucked' | 'buttoned_tucked_tie' | 'unbuttoned_untucked_tie' = 'buttoned_tucked';
  
  if (tshirt && shirt) {
    shirtVariant = tie ? 'unbuttoned_untucked_tie' : 'unbuttoned_untucked';
  } else if (!tshirt && shirt && (trouser || shorts)) {
    if (jacket) {
      shirtVariant = tie ? 'unbuttoned_untucked_tie' : 'unbuttoned_untucked';
    } else {
      shirtVariant = tie ? 'buttoned_tucked_tie' : 'buttoned_tucked';
    }
  } else if (!tshirt && shirt && !trouser && !shorts) {
    shirtVariant = tie ? 'unbuttoned_untucked_tie' : 'unbuttoned_untucked'; // Default to untucked if wearing shirt only
  } else if (tshirt && !shirt) {
    tshirtVariant = 'untucked';
  }

  // Pre-configured variants take precedence if specified in combos, but we handle that in resolveCombo mapping now.
  // We'll just map IDs here for generic resolutions.

  if (tshirt) outfit.tshirt = { id: tshirt, variant: tshirtVariant };
  if (shirt) outfit.shirt = { id: shirt, variant: shirtVariant };
  if (trouser) outfit.trouser = { id: trouser, variant: 'normal' };
  if (shorts) outfit.shorts = { id: shorts, variant: 'normal' };
  if (sweater) outfit.sweater = { id: sweater };
  if (coat) outfit.coat = { id: coat };
  if (jacket) {
    const hasInnerTop = !!(tshirt || shirt);
    outfit.jacket = { id: jacket, variant: hasInnerTop ? 'unbuttoned_untucked' : 'normal' };
  }
  if (tie) outfit.tie = { id: tie };
  if (scarf) outfit.scarf = { id: scarf };
  if (shoes) outfit.shoes = { id: shoes };
  if (cap) outfit.cap = { id: cap };
  if (bag) outfit.bag = { id: bag };
  if (watch) outfit.watch = { id: watch };
  if (glasses) outfit.glasses = { id: glasses };

  return outfit;
}

export function resolveCombo(comboId: string | null, selectedProducts: Record<string, string>, avatarSize: string): RenderOutfit | null {
  if (!comboId) {
    // If no combo, use manual products
    return resolveOutfit(selectedProducts as OutfitSelection);
  }

  const combo = OUTFIT_COMBOS.find(c => c.id === comboId);
  if (!combo) return null;

  if (!combo.supportedSizes.includes(avatarSize)) {
    console.warn(`Outfit not available for ${avatarSize}`);
    return null;
  }

  const outfit: RenderOutfit = {};
  
  // Ensure we check availability
  const checkAsset = (category: string, id: string | undefined): string | null => {
    if (!id) return null;
    const item = WARDROBE_REGISTRY.find(w => w.id === id);
    if (!item || item.status === 'COMING_SOON') {
      console.warn('COMING_SOON', id);
      return null;
    }
    return id;
  };

  const tshirt = checkAsset('tshirt', combo.items.tshirt);
  if (tshirt) outfit.tshirt = { id: tshirt, variant: 'untucked' };

  const shirt = checkAsset('shirt', combo.items.shirt);
  if (shirt) {
    const hasJacket = !!combo.items.jacket;
    outfit.shirt = { id: shirt, variant: combo.items.variant || (hasJacket ? 'unbuttoned_untucked' : 'buttoned_tucked') as any };
  }

  const trouser = checkAsset('trouser', combo.items.trouser);
  if (trouser) outfit.trouser = { id: trouser, variant: 'normal' };

  const shorts = checkAsset('shorts', combo.items.shorts);
  if (shorts) outfit.shorts = { id: shorts, variant: 'normal' };

  const sweater = checkAsset('sweater', combo.items.sweater);
  if (sweater) outfit.sweater = { id: sweater };

  const coat = checkAsset('coat', combo.items.coat);
  if (coat) outfit.coat = { id: coat };

  const jacket = checkAsset('jacket', combo.items.jacket);
  if (jacket) {
    const hasInnerTop = !!(tshirt || shirt);
    outfit.jacket = { id: jacket, variant: hasInnerTop ? 'unbuttoned_untucked' : 'normal' };
  }

  const tie = checkAsset('tie', combo.items.tie);
  if (tie) {
    outfit.tie = { id: tie };
    if (outfit.shirt && outfit.shirt.variant && !outfit.shirt.variant.endsWith('_tie')) {
      outfit.shirt.variant = `${outfit.shirt.variant}_tie` as any;
    }
  }

  const scarf = checkAsset('scarf', combo.items.scarf);
  if (scarf) outfit.scarf = { id: scarf };

  const shoes = checkAsset('shoes', combo.items.shoes);
  if (shoes) outfit.shoes = { id: shoes };

  const cap = checkAsset('cap', combo.items.cap);
  if (cap) outfit.cap = { id: cap };

  const bag = checkAsset('bag', combo.items.bag);
  if (bag) outfit.bag = { id: bag };

  const watch = checkAsset('watch', combo.items.watch);
  if (watch) outfit.watch = { id: watch };

  const glasses = checkAsset('glasses', combo.items.glasses);
  if (glasses) outfit.glasses = { id: glasses };

  return outfit;
}
