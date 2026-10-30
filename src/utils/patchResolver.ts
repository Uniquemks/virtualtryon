export const BODY_PART_MAPPING = {
  face: "A",
  tummy: "AA",
  chest: "B",
  neck: "C",
  hand: "D",
  arms: "E",
  shoulder: "Shl",
  torso: "F",
  leg: "G",
  feet: "H",
};


export interface PatchLayer {
  source: any;
  zIndex: number;
  name?: string;
  type?: string;
  yOffset?: number;
  xOffset?: number;
  scale?: number;
  id?: string;
  scaleX?: number;
}

export interface AvatarConfig {
  bodyShape: 'B1' | 'B2' | 'B3' | 'B4' | 'B5' | 'B6';
  torso: 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'A' | 'H';
  chest: string;
  leftArm: string;
  rightArm: string;
  neck: string;
  shoulders: string;
  legs: string;
  tummy?: string;
}

export const DEFAULT_CONFIG: AvatarConfig = {
  bodyShape: 'B1',
  torso: 'F1',
  size: 'M',
  chest: 'B1',
  leftArm: 'D1',
  rightArm: 'E1',
  neck: 'C1',
  shoulders: 'SHL1',
  legs: 'L1',
  tummy: 'AA1'
};

export const BODY_PRESETS: Record<string, AvatarConfig> = {
  S: { bodyShape: 'B1', torso: 'F1', size: 'S', chest: 'B1-F1-S', leftArm: 'D1-S', rightArm: 'E1-S', neck: 'C1', shoulders: 'SHL1', legs: 'G1', tummy: 'AA1' },
  M: { bodyShape: 'B2', torso: 'F2', size: 'M', chest: 'B2-F2-M', leftArm: 'D2-M', rightArm: 'E2-M', neck: 'C2', shoulders: 'SHL2', legs: 'G2', tummy: 'AA2' },
  L: { bodyShape: 'B3', torso: 'F3', size: 'L', chest: 'B3-F3-A', leftArm: 'D3-A', rightArm: 'E3-A', neck: 'C3', shoulders: 'SHL3', legs: 'G3', tummy: 'AA3' },
  XL: { bodyShape: 'B4', torso: 'F4', size: 'XL', chest: 'B4-F4-A', leftArm: 'D3-A', rightArm: 'E3-A', neck: 'C3', shoulders: 'SHL4', legs: 'G3', tummy: 'AA4' },
  XXL: { bodyShape: 'B5', torso: 'F5', size: 'XXL', chest: 'B5-F5-H', leftArm: 'D4-H', rightArm: 'E4-H', neck: 'C3', shoulders: 'SHL4', legs: 'G3', tummy: 'AA5' }
};

export const validateBodyFamily = (config: AvatarConfig) => { return true; };
export const validateConfig = (config: AvatarConfig | string) => { return typeof config === 'string' ? BODY_PRESETS[config] || DEFAULT_CONFIG : config; };

export const ASSET_MAP: Record<string, any> = {
  "B1-F1-S": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-S.webp"),
  "B1-F1-M": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-M.webp"),
  "B1-F1-A": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-A.webp"),
  "B1-F1-H": require("../assets/bodies/Light-M Body Male light brown/B/B1 flat/B1-F1-H.webp"),
  "B2-F2-S": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-S.webp"),
  "B2-F2-M": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-M.webp"),
  "B2-F2-A": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-A.webp"),
  "B2-F2-H": require("../assets/bodies/Light-M Body Male light brown/B/B2 rectangle/B2-F2-H.webp"),
  "B3-F3-S": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-S.webp"),
  "B3-F3-M": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-M.webp"),
  "B3-F3-A": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-A.webp"),
  "B3-F3-H": require("../assets/bodies/Light-M Body Male light brown/B/B3 trapzoid/B3-F3-H.webp"),
  "B4-F4-S": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-S.webp"),
  "B4-F4-M": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-M.webp"),
  "B4-F4-A": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-A.webp"),
  "B4-F4-H": require("../assets/bodies/Light-M Body Male light brown/B/B4 triangle/B4-F4-H.webp"),
  "B5-F5-S": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-S.webp"),
  "B5-F5-M": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-M.webp"),
  "B5-F5-A": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-A.webp"),
  "B5-F5-H": require("../assets/bodies/Light-M Body Male light brown/B/B5 oval/B5-F5-H.webp"),
  "B6-F6-S": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-S.webp"),
  "B6-F6-M": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-M.webp"),
  "B6-F6-A": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-A.webp"),
  "B6-F6-H": require("../assets/bodies/Light-M Body Male light brown/B/B6 inverted/B6-F6-H.webp"),

  "FACE": require("../assets/bodies/Light-M Body Male light brown/A/FACE.webp"),
  "AA1": require("../assets/bodies/Light-M Body Male light brown/AA/AA1.webp"),
  "AA2": require("../assets/bodies/Light-M Body Male light brown/AA/AA2.webp"),
  "AA3": require("../assets/bodies/Light-M Body Male light brown/AA/AA3.webp"),
  "AA4": require("../assets/bodies/Light-M Body Male light brown/AA/AA4.webp"),
  "AA5": require("../assets/bodies/Light-M Body Male light brown/AA/AA5.webp"),
  "TC": require("../assets/bodies/Light-M Body Male light brown/AA/TC.webp"),
  "C1": require("../assets/bodies/Light-M Body Male light brown/C/C1.webp"),
  "C2": require("../assets/bodies/Light-M Body Male light brown/C/C2.webp"),
  "C3": require("../assets/bodies/Light-M Body Male light brown/C/C3.webp"),
  "D1-S": require("../assets/bodies/Light-M Body Male light brown/D/D1-S.webp"),
  "D2-M": require("../assets/bodies/Light-M Body Male light brown/D/D2-M.webp"),
  "D3-A": require("../assets/bodies/Light-M Body Male light brown/D/D3-A.webp"),
  "D4-H": require("../assets/bodies/Light-M Body Male light brown/D/D4-H.webp"),
  "E1-S": require("../assets/bodies/Light-M Body Male light brown/E/E1-S.webp"),
  "E2-M": require("../assets/bodies/Light-M Body Male light brown/E/E2-M.webp"),
  "E3-A": require("../assets/bodies/Light-M Body Male light brown/E/E3-A.webp"),
  "E4-H": require("../assets/bodies/Light-M Body Male light brown/E/E4-H.webp"),
  "F1": require("../assets/bodies/Light-M Body Male light brown/F/F1.webp"),
  "F2": require("../assets/bodies/Light-M Body Male light brown/F/F2.webp"),
  "F3": require("../assets/bodies/Light-M Body Male light brown/F/F3.webp"),
  "F4": require("../assets/bodies/Light-M Body Male light brown/F/F4.webp"),
  "F5": require("../assets/bodies/Light-M Body Male light brown/F/F5.webp"),
  "F6": require("../assets/bodies/Light-M Body Male light brown/F/F6.webp"),
  "G1": require("../assets/bodies/Light-M Body Male light brown/G/G1.webp"),
  "G2": require("../assets/bodies/Light-M Body Male light brown/G/G2.webp"),
  "G3": require("../assets/bodies/Light-M Body Male light brown/G/G3.webp"),
  "PATCH-LEG": require("../assets/bodies/Light-M Body Male light brown/G/patch-leg.webp"),
  "H1": require("../assets/bodies/Light-M Body Male light brown/H/H1.webp"),
  "SHL1": require("../assets/bodies/Light-M Body Male light brown/Shoulder/Shl1.webp"),
  "SHL2": require("../assets/bodies/Light-M Body Male light brown/Shoulder/Shl2.webp"),
  "SHL3": require("../assets/bodies/Light-M Body Male light brown/Shoulder/Shl3.webp"),
  "SHL4": require("../assets/bodies/Light-M Body Male light brown/Shoulder/Shl4.webp"),
};


export const BODY_SIZE_ASSETS: Record<string, any> = {
  XS: require("../assets/bodies/BODY_SIZE/skinny-1.png"),
  S: require("../assets/bodies/BODY_SIZE/skinny-1.png"),
  M: require("../assets/bodies/BODY_SIZE/medium-1.png"),
  L: require("../assets/bodies/BODY_SIZE/large-1.png"),
  XL: require("../assets/bodies/BODY_SIZE/xl-1.png"),
  XXL: require("../assets/bodies/BODY_SIZE/Xll-1.png"),
  OBESE: require("../assets/bodies/BODY_SIZE/obese.png"),
};

export const getBodyPatches = (
  rawConfig?: AvatarConfig | string,
): PatchLayer[] => {
  let sizeKey = 'M';

  if (typeof rawConfig === "string") {
    sizeKey = rawConfig.toUpperCase();
  } else if (rawConfig && rawConfig.size) {
    sizeKey = rawConfig.size.toUpperCase();
  }

  const source = BODY_SIZE_ASSETS[sizeKey] || BODY_SIZE_ASSETS['M'];

  return [
    {
      source,
      zIndex: 1,
      id: "body_full",
      name: "full_body",
      type: "body",
    },
  ];
};

import { ImageSourcePropType } from "react-native";
import { GARMENT_META } from "../config/garments";

export class InvalidPatchCombinationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidPatchCombinationError";
  }
}

export const CLOTHING_ASSET_MAP: Record<string, any> = {
  trouser: {
    'black-trouser': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl1.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt1.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl2.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt2.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl3.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt3.png'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl4.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt4.png'), transform: { x: 0, y: 0, scale: 1.01, scaleX: 1.05 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl4.png'), transform: { x: 0, y: -12, scale: 1, scaleX: 1.06 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt5.png'), transform: { x: 0, y: -10, scale: 1, scaleX: 1.08 } }
        }
      }
    },
    'jeans': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl4.avif'), transform: { x: 0, y: -12, scale: 1, scaleX: 1.06 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt5.avif'), transform: { x: 0, y: -10, scale: 1, scaleX: 1.08 } }
        }
      }
    },
    'white-cargo': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl4.avif'), transform: { x: 0, y: -12, scale: 1, scaleX: 1.06 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt5.avif'), transform: { x: 0, y: -10, scale: 1, scaleX: 1.08 } }
        }
      }
    },
    'white-linen-trouser': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt5.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } }
        }
      }
    }
  },

  tshirt: {
    "white-tshirt": {
      untucked: {
        XS: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/aa1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bs1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          }
        },
        S: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/aa1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bs1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.02 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1.02 }
          }
        },
        M: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          }
        },
        L: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/ba1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          }
        },
        XL: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/ba1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.1 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.1 }
          }
        },
        XXL: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.12 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.12 }
          },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.12 }
          }
        }
      },
      buttoned_tucked: {
        XS: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/aa1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bs1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t1.webp"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          }
        },
        S: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/aa1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bs1.avif"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.02 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t1.webp"),
            transform: { x: 0, y: 0, scale: 1 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1.02 }
          }
        },
        M: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t2.webp"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          }
        },
        L: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/ba1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t3.webp"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          }
        },
        XL: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/ba1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.1 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t4.webp"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.1 }
          }
        },
        XXL: {
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.12 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.12 }
          },
          tuck_torso: {
            source: require("../assets/clothes/normal white t-shirt avif/tuck/t5.webp"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.065 }
          },
          back: {
            source: require("../assets/clothes/normal white t-shirt avif/back patch/bpal.avif"),
            transform: { x: 0, y: 3, scale: 1, scaleX: 1.12 }
          }
        }
      }
    },
  },
  shirt: {
    "notch-collar-powder-pink": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1.02 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open tummy fitted/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open tummy fitted/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open tummy fitted/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
    },
    "notch-collar-pumpkin": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1.02 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open tummy fitted/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open tummy fitted/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open tummy fitted/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
    },
    "notch-collar-butter-yellow": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1.02 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open tummy fitted/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open tummy fitted/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open tummy fitted/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
    },
    "white-shirt": {

      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1.02 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1.01 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t5.avif"),
            transform: {
              x: 0, y: 0, scale: 1, scaleX: 1.12
            },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.12 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttontu.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          buttons: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/Notch Collar neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/front open style patch/op123456.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          back: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        }
      }
    },
    "blue-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh2.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.02
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh4.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/aa1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh2.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh4.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh2.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh4.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh3.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/back patch/bp12.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        }
      }
    },
    "olive-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.02
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open tummy fitted/a2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open tummy fitted/a4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open tummy fitted/a5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        }
      }
    },
    "black-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.02
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open tummy fitted/a2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open tummy fitted/a4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open tummy fitted/a5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        }
      }
    },
    "dawn-blue-linen-shirt": {
      buttoned_tucked: {
        S: {
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        M: {
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 0.9,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        L: {
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.02
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        XL: {
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.12
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.12
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open tummy fitted/a2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open tummy fitted/a4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open tummy fitted/a5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/mandarin Collar neck/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        }
      }
    },
    "white-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"), transform: { x: 0, y: 0, scale: 1, scaleX: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic white shirt/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        M: {
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            },
            maskBottom: 10
          },
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.02
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },



          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic white shirt/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        L: {

          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            },
            maskBottom: 10
          },
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.02
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic white shirt/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1.01
            }
          }
        },
        XL: {

          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },

          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          buttons: {
            source: require("../assets/clothes/shirts/classic white shirt/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.08
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            },
            maskBottom: 10
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },

          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1
            }
          },


          buttons: {
            source: require("../assets/clothes/shirts/classic white shirt/button/buttontu.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          }
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          }
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.08
            }
          },
          collar: {
            source: require("../assets/clothes/shirts/classic white shirt/Classic Collar neck/c3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.05
            }
          }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"), transform: { x: 0, y: 0, scale: 1 }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/s1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/m1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        },
        XXL: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/front open style patch/op123456.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          sleeve: {
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          back: {
            source: require("../assets/clothes/shirts/classic white shirt/back patch/bp12.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1
            }
          },
        }
      }
    },

  }

  , shoes: {
    'formal-black-shoes': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.04 } } },
        'XXL': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } } },
      }
    },
    'black-shoes': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.04 } } },
        'XXL': { main: { source: require('../assets/accessories/Shoes/black shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } } },
      }
    },
    'brown-shoes': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/Shoes/brown shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/Shoes/brown shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/Shoes/brown shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/Shoes/brown shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.04 } } },
        'XXL': { main: { source: require('../assets/accessories/Shoes/brown shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } } },
      }
    },
    'red-shoes': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/Shoes/red shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/Shoes/red shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/Shoes/red shoes.png'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/Shoes/red shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.04 } } },
        'XXL': { main: { source: require('../assets/accessories/Shoes/red shoes.png'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } } },
      }
    },
  },
  watch: {
    'watch': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png'), transform: { x: 0, y: -20, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/watch & bag/watch-hy.png'), transform: { x: 5, y: 0, scale: 1 } } },
      }
    }
  },
  bag: {
    'bag': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/bag-hy.png') } },
        'XXL': { main: { source: require('../assets/accessories/watch & bag/bag-hy.png') } },
      }
    }
  },
  cap: {
    'cap': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/cap/scap.png') } },
        'M': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'L': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'XL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
        'XXL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
      }
    },
    'red-cap': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/cap/scap.png') } },
        'M': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'L': { main: { source: require('../assets/accessories/cap/mcap.png') } },
        'XL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
        'XXL': { main: { source: require('../assets/accessories/cap/hcap.png') } },
      }
    }
  },
  scarf: {
    'scarf': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/scarf/sscarf.png') } },
        'M': { main: { source: require('../assets/accessories/scarf/mscarf.png') } },
        'L': { main: { source: require('../assets/accessories/scarf/mscarf.png') } },
        'XL': { main: { source: require('../assets/accessories/scarf/hscarf.png') } },
        'XXL': { main: { source: require('../assets/accessories/scarf/hscarf.png') } },
      }
    }
  },
  glasses: {
    'goggles1': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/goggles1/sgoggles.png'), transform: { x: 0, y: -10, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles1/mgoggles.png'), transform: { x: 0, y: -5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles1/mgoggles.png'), transform: { x: -2, y: -5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    },
    'goggles2': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/goggles2/sgoggles.png'), transform: { x: 0, y: -10, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles2/mgoggles.png'), transform: { x: 0, y: -5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles2/mgoggles.png'), transform: { x: -2, y: -5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    },
    'goggles3': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/goggles3/sgoggles.png'), transform: { x: 0, y: -10, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles3/mgoggles.png'), transform: { x: 0, y: -5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles3/mgoggles.png'), transform: { x: -2, y: -5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    }
  },
  jacket: {
    'cream-jacket': {
      normal: {
        S: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jks1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        M: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkm1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        L: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jka1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XXL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.06 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf5.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jks1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        M: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkm1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk2.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 0.98 } }
        },
        L: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jka1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 0.95 } }
        },
        XL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo4.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 0.96 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk2.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 0.9 } }
        },
        XXL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.06 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo5.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.05 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 1.06 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk1.avif'), transform: { x: 0, y: 0, scale: 1, scaleX: 0.95 } }
        }
      }
    }
  },
  tie: {
    'black-tie': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/tie/black.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/tie/black.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/tie/black.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/tie/black.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/tie/black.avif'), transform: { x: 0, y: 0, scale: 1 } } }
      }
    },
    'brown-tie': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/tie/brown.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/tie/brown.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/tie/brown.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/tie/brown.avif'), transform: { x: 0, y: 0, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/tie/brown.avif'), transform: { x: 0, y: 0, scale: 1 } } }
      }
    }
  }
};


export interface RenderPatch {
  id: string;
  category: string;
  part: string;
  source: any;
  z: number;
  occludes?: string[];
  xOffset?: number;
  yOffset?: number;
  scale?: number;
  scaleX?: number;
  maskBottom?: number;
}

/**
 * Universal Golden Shirt Draping Spec
 * Analyzed and extracted directly from 'dawn-blue-linen-shirt'.
 * Controls the exact transform, scale, scaleX, and maskBottom per size and variant.
 */
export interface PartDrapingRule {
  transform: { x: number; y: number; scale: number; scaleX?: number };
  maskBottom?: number;
}

export const SHIRT_DRAPING_RULES: Record<string, Record<string, Record<string, PartDrapingRule>>> = {
  buttoned_tucked: {
    S: {
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      buttons: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1.01 } },
    },
    M: {
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 } },
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.02 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 0.9, scaleX: 1 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      buttons: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1.01 } },
    },
    L: {
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1.02 } },
      buttons: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1.01 } },
    },
    XL: {
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      buttons: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
    XXL: {
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      buttons: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
  },
  untucked: {
    S: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
    M: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
    L: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
    XL: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
    XXL: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      tummy: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
      collar: { transform: { x: 0, y: 0, scale: 1 } },
    },
  },
  unbuttoned_untucked: {
    S: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
    },
    M: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
    },
    L: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
    },
    XL: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
    },
    XXL: {
      shoulder: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      torso: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back_sleeve: { transform: { x: 0, y: 0, scale: 1, scaleX: 1 } },
      back: { transform: { x: 0, y: 0, scale: 1 } },
    },
  },
};

/**
 * Back sleeve assets for all wardrobe shirts across all sizes
 * bs1: XS / S, bm1: M, ba1: L (A), bh1: XL / XXL (H)
 */
export const SHIRT_BACK_SLEEVE_ASSETS: Record<string, Record<string, any>> = {
  'notch-collar-powder-pink': {
    XS: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/bs1.avif'),
    S: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/bs1.avif'),
    M: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/bm1.avif'),
    L: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/bh1.avif'),
  },
  'notch-collar-pumpkin': {
    XS: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/bs1.avif'),
    S: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/bs1.avif'),
    M: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/bm1.avif'),
    L: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/bh1.avif'),
  },
  'notch-collar-butter-yellow': {
    XS: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/bs1.avif'),
    S: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/bs1.avif'),
    M: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/bm1.avif'),
    L: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/bh1.avif'),
  },
  'white-shirt': {
    XS: require('../assets/clothes/shirts/classic white shirt/bs1.avif'),
    S: require('../assets/clothes/shirts/classic white shirt/bs1.avif'),
    M: require('../assets/clothes/shirts/classic white shirt/bm1.avif'),
    L: require('../assets/clothes/shirts/classic white shirt/ba1.avif'),
    XL: require('../assets/clothes/shirts/classic white shirt/bh1.avif'),
    XXL: require('../assets/clothes/shirts/classic white shirt/bh1.avif'),
  },
  'blue-linen-shirt': {
    XS: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/bs1.avif'),
    S: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/bs1.avif'),
    M: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/bm1.avif'),
    L: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/classic collar normal shirt blue color avif/bh1.avif'),
  },
  'olive-linen-shirt': {
    XS: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/bs1.avif'),
    S: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/bs1.avif'),
    M: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/bm1.avif'),
    L: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/classic collar normal  shirt olive avif/bh1.avif'),
  },
  'black-linen-shirt': {
    XS: require('../assets/clothes/shirts/classic collar shirt normal black avif/bs1.avif'),
    S: require('../assets/clothes/shirts/classic collar shirt normal black avif/bs1.avif'),
    M: require('../assets/clothes/shirts/classic collar shirt normal black avif/bm1.avif'),
    L: require('../assets/clothes/shirts/classic collar shirt normal black avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/classic collar shirt normal black avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/classic collar shirt normal black avif/bh1.avif'),
  },
  'dawn-blue-linen-shirt': {
    XS: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/bs1.avif'),
    S: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/bs1.avif'),
    M: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/bm1.avif'),
    L: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/bh1.avif'),
  },
  'white-linen-shirt': {
    XS: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/bs1.avif'),
    S: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/bs1.avif'),
    M: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/bm1.avif'),
    L: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/ba1.avif'),
    XL: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/bh1.avif'),
    XXL: require('../assets/clothes/shirts/Normal body Notch Collar shirt white avif/bh1.avif'),
  },
};

// Auto-attach back_sleeve patches into CLOTHING_ASSET_MAP for all shirts, sizes, and variants
if (CLOTHING_ASSET_MAP['shirt']) {
  Object.entries(SHIRT_BACK_SLEEVE_ASSETS).forEach(([shirtId, assets]) => {
    const shirt = CLOTHING_ASSET_MAP['shirt'][shirtId];
    if (shirt) {
      Object.keys(shirt).forEach((variant) => {
        ['XS', 'S', 'M', 'L', 'XL', 'XXL'].forEach((sz) => {
          const mappedSz = (sz === 'XS' && !shirt[variant]['XS']) ? 'S' : sz;
          if (shirt[variant]?.[mappedSz] && !shirt[variant][mappedSz]['back_sleeve']) {
            const assetSrc = assets[sz] || assets[mappedSz];
            if (assetSrc) {
              shirt[variant][mappedSz]['back_sleeve'] = {
                source: assetSrc,
                transform: { x: 0, y: 0, scale: 1 },
              };
            }
          }
        });
      });
    }
  });
}

/**
 * Dynamic registry for garments fetched via API or custom uploads
 */
export const DYNAMIC_GARMENT_REGISTRY: Record<string, Record<string, any>> = {};
export const DYNAMIC_SHIRT_REGISTRY: Record<string, any> = {};

/**
 * Universal dynamic garment registration supporting shirts, t-shirts, jackets, trousers, etc.
 * Supports:
 * - Single image URI or { uri: '...' }
 * - Specific patch dictionaries ({ torso, sleeve, shoulder, etc. })
 * - Size-specific maps ({ sizes: { S: {...}, M: {...}, XXL: {...} } })
 * - Direct variants
 */
export const registerDynamicGarment = (
  category: string,
  id: string,
  garmentAssets: any
) => {
  const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const VARIANTS = category === 'shirt'
    ? ['buttoned_tucked', 'untucked', 'unbuttoned_untucked']
    : ['normal', 'untucked', 'unbuttoned_untucked'];

  const entry: Record<string, any> = {};

  VARIANTS.forEach((variant) => {
    entry[variant] = {};
    SIZES.forEach((sz) => {
      entry[variant][sz] = {};

      if (category === 'shirt') {
        const rules = SHIRT_DRAPING_RULES[variant]?.[sz] || SHIRT_DRAPING_RULES['buttoned_tucked']?.[sz] || {};
        Object.entries(rules).forEach(([part, rule]) => {
          let src =
            garmentAssets.variants?.[variant]?.[sz]?.[part] ||
            garmentAssets.sizes?.[sz]?.[part] ||
            garmentAssets[sz]?.[part] ||
            garmentAssets[part] ||
            (part === 'back_sleeve' ? (garmentAssets.variants?.[variant]?.[sz]?.['chest'] || garmentAssets.sizes?.[sz]?.['chest'] || garmentAssets['chest']) : null) ||
            (part === 'buttons' ? garmentAssets['button'] : null);

          if (typeof src === 'string') src = { uri: src };
          if (src) {
            entry[variant][sz][part] = {
              source: src,
              transform: { ...rule.transform },
              ...(rule.maskBottom !== undefined ? { maskBottom: rule.maskBottom } : {}),
            };
          }
        });
      } else {
        // Other categories: tshirt, trouser, jacket, shoes, accessories
        const rawPartMap =
          garmentAssets.variants?.[variant]?.[sz] ||
          garmentAssets.sizes?.[sz] ||
          garmentAssets[sz] ||
          garmentAssets.patches ||
          garmentAssets;

        if (typeof rawPartMap === 'object' && rawPartMap !== null) {
          Object.entries(rawPartMap).forEach(([part, val]: [string, any]) => {
            if (part === 'sizes' || part === 'variants' || part === 'id' || part === 'category') return;
            let src = val?.source || val;
            if (typeof src === 'string') src = { uri: src };
            if (src) {
              entry[variant][sz][part] = {
                source: src,
                transform: val?.transform || { x: 0, y: 0, scale: 1 },
                ...(val?.maskBottom !== undefined ? { maskBottom: val.maskBottom } : {}),
              };
            }
          });
        }
      }
    });
  });

  if (!DYNAMIC_GARMENT_REGISTRY[category]) {
    DYNAMIC_GARMENT_REGISTRY[category] = {};
  }
  DYNAMIC_GARMENT_REGISTRY[category][id] = entry;

  if (category === 'shirt') {
    DYNAMIC_SHIRT_REGISTRY[id] = entry;
  }

  if (!CLOTHING_ASSET_MAP[category]) {
    CLOTHING_ASSET_MAP[category] = {};
  }
  CLOTHING_ASSET_MAP[category][id] = entry;

  return entry;
};

/**
 * Automatically registers an API shirt with the exact golden draping logic of 'dawn-blue-linen-shirt'.
 * Supports single patch images, size-specific images, or URL maps.
 */
export const registerApiShirt = (
  shirtId: string,
  shirtAssets: {
    torso?: any;
    tummy?: any;
    shoulder?: any;
    sleeve?: any;
    back_sleeve?: any;
    chest?: any;
    collar?: any;
    buttons?: any;
    back?: any;
    sizes?: Record<string, Record<string, any>>;
    variants?: Record<string, any>;
    [key: string]: any;
  }
) => {
  return registerDynamicGarment('shirt', shirtId, shirtAssets);
};

export const getGarmentPatches = (
  category: string,
  id: string,
  variant: string,
  size: string = 'M',
  bodyType: string = 'Medium'
): RenderPatch[] => {
  const patches: RenderPatch[] = [];
  const meta = (GARMENT_META as any)[category];
  if (!meta) return patches;

  const variantMeta = (meta.variants as any)[variant];
  let occludes = variantMeta?.occludes || [];
  if (category === 'jacket' && (!occludes || occludes.length === 0)) {
    occludes = ['shirt_sleeve', 'shirt_back_sleeve', 'tshirt_sleeve', 'tshirt_chest', 'shirt_shoulder', 'tshirt_shoulder'];
  }

  let assetVariant = variant;
  const isTieVariant = variant.endsWith('_tie');

  // Support dynamic API garments across all categories
  let categoryMap = CLOTHING_ASSET_MAP[category] || {};
  if (!categoryMap[id]) {
    if (DYNAMIC_GARMENT_REGISTRY[category]?.[id]) {
      categoryMap = { ...categoryMap, [id]: DYNAMIC_GARMENT_REGISTRY[category][id] };
    } else if (category === 'shirt' && DYNAMIC_SHIRT_REGISTRY[id]) {
      categoryMap = { ...categoryMap, [id]: DYNAMIC_SHIRT_REGISTRY[id] };
    }
  }

  let garmentMap = categoryMap[id];
  if (!garmentMap) return patches;

  if (!garmentMap[assetVariant]) {
    if (isTieVariant) {
      assetVariant = assetVariant.slice(0, -4);
    }
    if (!garmentMap[assetVariant]) {
      if (assetVariant === 'unbuttoned_untucked' && garmentMap['untucked']) {
        assetVariant = 'untucked';
      } else if (assetVariant === 'untucked' && garmentMap['unbuttoned_untucked']) {
        assetVariant = 'unbuttoned_untucked';
      } else {
        const availableVariants = Object.keys(garmentMap || {});
        if (availableVariants.length > 0) {
          assetVariant = availableVariants[0];
        }
      }
    }
  }

  const sizeMap = garmentMap[assetVariant]?.[size] ||
    (size === 'XS' ? garmentMap[assetVariant]?.['S'] : null) ||
    garmentMap[assetVariant]?.['M'];
  if (!sizeMap) return patches;

  // Build effectiveSizeMap and inject back_sleeve if missing
  const effectiveSizeMap: Record<string, any> = { ...sizeMap };
  if (category === 'shirt' && !effectiveSizeMap['back_sleeve']) {
    const bsAsset = SHIRT_BACK_SLEEVE_ASSETS[id]?.[size] ||
      (size === 'XS' ? SHIRT_BACK_SLEEVE_ASSETS[id]?.['S'] : null) ||
      SHIRT_BACK_SLEEVE_ASSETS[id]?.['M'];
    if (bsAsset) {
      effectiveSizeMap['back_sleeve'] = {
        source: bsAsset,
        transform: { x: 0, y: 0, scale: 1 },
      };
    }
  }

  for (const [part, data] of Object.entries(effectiveSizeMap)) {
    if (part === 'transform') continue; // In case any old top-level transform remains

    // Skip collar_button (buttonc.avif is a bottom fly/crotch button that must never render on trouser chain)
    if (category === 'shirt' && part === 'collar_button') {
      continue;
    }

    // Trousers: ensure single waistband across all sizes and dynamic items.
    // bt (torso) contains the complete waistband and button. If tummy is present alongside torso, skip it to prevent double waistband.
    if (category === 'trouser' && part === 'tummy' && effectiveSizeMap['torso']) {
      continue;
    }

    // data can be an object with {source, transform} (new format) or just the source (old format)
    let source = (data as any)?.source || data;
    let patchTransform = (data as any)?.transform ? { ...(data as any).transform } : { x: 0, y: 0, scale: 1 };
    let maskBottom = (data as any)?.maskBottom;

    // Automatically apply the golden standard draping spec from 'dawn-blue-linen-shirt'
    // for all shirts (existing wardrobe shirts and dynamic API shirts).
    if (category === 'shirt') {
      const goldenRule = SHIRT_DRAPING_RULES[assetVariant]?.[size]?.[part] ||
        (part === 'chest' ? SHIRT_DRAPING_RULES[assetVariant]?.[size]?.['back_sleeve'] : null);
      if (goldenRule) {
        patchTransform = {
          x: goldenRule.transform.x !== undefined ? goldenRule.transform.x : (patchTransform.x ?? 0),
          y: goldenRule.transform.y !== undefined ? goldenRule.transform.y : (patchTransform.y ?? 0),
          scale: goldenRule.transform.scale !== undefined ? goldenRule.transform.scale : (patchTransform.scale ?? 1),
          scaleX: goldenRule.transform.scaleX !== undefined ? goldenRule.transform.scaleX : (patchTransform.scaleX ?? 1),
        };
        if (maskBottom === undefined && goldenRule.maskBottom !== undefined) {
          maskBottom = goldenRule.maskBottom;
        }
      }
      // For buttoned_tucked, preserve torso maskBottom and mask lowest button to prevent waistband/fly overlap
      if (assetVariant.startsWith('buttoned_tucked')) {
        if (part === 'buttons') {
          maskBottom = 10;
        } else if (part === 'torso' || part === 'tummy') {
          if (maskBottom === undefined) {
            maskBottom = 10;
          }
        }
      }

      // For half-sleeve notch collar shirts in XXL, tuck torso, tummy, and buttons cleanly into the waistband without shrinking width
      const isHalfSleeveShirt = [
        'white-shirt',
        'notch-collar-powder-pink',
        'notch-collar-pumpkin',
        'notch-collar-butter-yellow'
      ].includes(id);

      if (isHalfSleeveShirt && size === 'XXL' && assetVariant.startsWith('buttoned_tucked')) {
        if (part === 'torso' || part === 'tummy' || part === 'buttons') {
          patchTransform = {
            ...patchTransform,
            y: 0,
            scale: 1.0,
            scaleX: 1.0,
          };
        }
      }
    }

    // Dynamic closed tie collar swap for shirts
    if (category === 'shirt' && isTieVariant && part === 'collar') {
      if (size === 'XL') {
        source = require('../assets/clothes/shirts/classic white shirt/tie collar/c2t.avif');
      } else if (size === 'XXL') {
        source = require('../assets/clothes/shirts/classic white shirt/tie collar/c3t.avif');
      } else {
        source = require('../assets/clothes/shirts/classic white shirt/tie collar/c1t.avif');
      }
    }

    let z: number = meta.layer; // BASE: TROUSER=100, TSHIRT=110, SHIRT=200

    // Fine tune Z
    if (category === 'shirt') {
      if (part === 'back') z = 0; // Behind body/neck (inner collar back band)
      if (part === 'back_sleeve') z = 10; // In front of avatarUri (zIndex: 5) to cover bare arms
    }
    if (category === 'tshirt') {
      if (part === 'back') z = 0; // Behind body (only collar back patch); chest is front patch at sequence position 2
    }
    if (category === 'shirt') {
      if (part === 'sleeve') z = 215; // SHIRT_SLEEVE
      // If buttoned_tucked, tuck torso, curved tummy, and buttons cleanly under the trousers (100) and waistband (105)
      if (assetVariant.startsWith('buttoned_tucked')) {
        if (part === 'torso') z = 94; // Base torso under tummy
        if (part === 'tummy') z = 95; // Curved tummy drape over torso, under trousers
        if (part === 'buttons') z = 96; // Button placket over torso, under trousers
      }
    }
    if (category === 'trouser') {
      if (part === 'tummy') z = 105; // Waistband over base trouser
    }
    if (category === 'jacket') {
      if (part === 'back') z = 0; // Behind body
      if (part === 'sleeve' || part === 'arms') z = 245; // On top of inner top sleeves (shirt sleeve is 215)
    }
    if (category === 'watch') {
      z = 200; // Under shirt sleeve (215) so sleeve cuff renders over watch
    }

    patches.push({
      id: `${category}_${id}_${part}`,
      category,
      part,
      source,
      z,
      occludes,
      xOffset: patchTransform.x,
      yOffset: patchTransform.y,
      scale: patchTransform.scale,
      scaleX: patchTransform.scaleX,
      maskBottom: maskBottom,
    });
  }

  // Enforce user's exact T-shirt sequence:
  // 1 tummy, 2 chest, 3 neckline, 4 arms fitted for jacket, 5 normal arms, 6 shoulder, 7 tuck torso, 8 torso
  if (category === 'tshirt') {
    const TSHIRT_ORDER: Record<string, number> = {
      back: 0,
      tummy: 1,
      chest: 2,
      neck: 3,
      neckline: 3,
      fitted_arms: 4,
      arms_fitted: 4,
      fitted_sleeve: 4,
      sleeve: 5,
      arms: 5,
      shoulder: 6,
      tuck_torso: 7,
      tuck: 7,
      torso: 8,
    };
    patches.sort((a, b) => (TSHIRT_ORDER[a.part] || 50) - (TSHIRT_ORDER[b.part] || 50));
  }

  return patches;
};

// Dummy exports for missing legacy functions
export const getClothingPatch = (category: string, id: string, size: string): any[] => [];

