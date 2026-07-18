export interface OutfitCombo {
  id: string;
  name: string;
  thumbnail: any; // e.g. require('../assets/outfits/warm-casual.png')
  supportedSizes: string[];
  status?: 'READY' | 'PARTIAL' | 'COMING_SOON';
  items: {
    tshirt?: string;
    shirt?: string;
    variant?: 'buttoned_tucked' | 'unbuttoned_untucked';
    trouser?: string;
    shorts?: string;
    sweater?: string;
    coat?: string;
    jacket?: string;
    tie?: string;
    scarf?: string;
    shoes?: string;
    cap?: string;
    bag?: string;
    watch?: string;
    glasses?: string;
  };
  bodyType?: 'Slim' | 'Medium' | 'Athletic' | 'Heavy';
}
