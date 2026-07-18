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
  XXL: { bodyShape: 'B5', torso: 'F5', size: 'XXL', chest: 'B5-F5-H', leftArm: 'D4-H', rightArm: 'E4-H', neck: 'C3', shoulders: 'SHL3', legs: 'G3', tummy: 'AA5' }
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


export const getBodyPatches = (
  rawConfig?: AvatarConfig | string,
): PatchLayer[] => {
  let config = DEFAULT_CONFIG;

  if (typeof rawConfig === "string") {
    // If it's a preset size string, pull directly from the BODY_PRESETS map (bypassing validation)
    if (BODY_PRESETS[rawConfig]) {
      config = BODY_PRESETS[rawConfig];
      validateBodyFamily(config);
    } else {
      config = DEFAULT_CONFIG;
    }
  } else if (rawConfig) {
    // Dynamically generated configurations must pass validation
    config = validateConfig(rawConfig);
  }

  const patches: PatchLayer[] = [
    { source: ASSET_MAP[config.legs], zIndex: 2.6, id: BODY_PART_MAPPING.leg },
    { source: ASSET_MAP[config.torso], zIndex: 2, id: BODY_PART_MAPPING.torso },
  ];

  if (config.tummy && ASSET_MAP[config.tummy]) {
    patches.push({
      source: ASSET_MAP[config.tummy],
      zIndex: 3.5,
      id: BODY_PART_MAPPING.tummy,
    });
  }

  patches.push(
    { source: ASSET_MAP[config.chest], zIndex: 3, id: BODY_PART_MAPPING.chest },
    {
      source: ASSET_MAP[config.shoulders],
      zIndex: 4,
      id: BODY_PART_MAPPING.shoulder,
    },
    { source: ASSET_MAP[config.neck], zIndex: 5, id: BODY_PART_MAPPING.neck },
    {
      source: require("../assets/bodies/Light-M Body Male light brown/A/FACE.webp"),
      zIndex: 6,
      id: BODY_PART_MAPPING.face,
    },
    {
      source: ASSET_MAP[config.leftArm],
      zIndex: 2.8,
      id: BODY_PART_MAPPING.hand,
    },
    {
      source: ASSET_MAP[config.rightArm],
      zIndex: 2.4,
      id: BODY_PART_MAPPING.arms,
    },
    {
      source: require("../assets/bodies/Light-M Body Male light brown/H/H1.webp"),
      zIndex: 8,
      id: BODY_PART_MAPPING.feet,
    },
  );

  return patches;
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
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt1.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/mid/tummy/tm1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl2.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt2.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/mid/tummy/tm2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl3.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt3.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/mid/tummy/tm3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl4.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt4.png'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/mid/tummy/tm4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/mid/legs/bl4.png'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/mid/torso/bt5.png'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } },
          tummy: { source: require('../assets/clothes/trousers/mid/tummy/tm5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } }
        }
      }
    },
    'jeans': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/tummy/tm1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/tummy/tm2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/tummy/tm3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/tummy/tm4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/torso/bt5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } },
          tummy: { source: require('../assets/clothes/trousers/normal jeans avif update/mid/tummy/tm5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } }
        }
      }
    },
    'white-cargo': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/tummy/tm1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/tummy/tm2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/tummy/tm3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/tummy/tm4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/legs/bl4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/torso/bt5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } },
          tummy: { source: require('../assets/clothes/trousers/white cargo short normal avif/mid/tummy/tm5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } }
        }
      }
    },
    'white-linen-trouser': {
      'normal': {
        'S': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/tummy/tm1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'M': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/tummy/tm2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'L': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/tummy/tm3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/tummy/tm4.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        'XXL': {
          legs: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/leg/g4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/torso/bt5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } },
          tummy: { source: require('../assets/clothes/trousers/normal trouser white linen avif/mid/tummy/tm5.avif'), transform: { x: 0, y: -15, scale: 1, scaleX: 1.06 } }
        }
      }
    }
  },

  tshirt: {
    "white-tshirt": {
      untucked: {
        S: {
          back: { source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"), transform: { x: 0, y: 0, scale: 1 } },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          },
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 0.992 }
          }
        },
        M: {
          back: { source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"), transform: { x: 0, y: 0, scale: 1 } },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 }
          }
        },
        L: {
          back: { source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"), transform: { x: 0, y: 0, scale: 1 } },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.023 }
          }
        },
        XL: {
          back: { source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"), transform: { x: 0, y: 0, scale: 1 } },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.053 }
          }
        },
        XXL: {
          back: { source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/back patch/bp12.avif"), transform: { x: 0, y: 0, scale: 1 } },
          torso: {
            source: require("../assets/clothes/normal white t-shirt avif/torso/f5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 },
            maskBottom: 10
          },
          tummy: {
            source: require("../assets/clothes/normal white t-shirt avif/tummy/a5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 }
          },
          neck: {
            source: require("../assets/clothes/normal white t-shirt avif/neck/c3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 }
          },
          shoulder: {
            source: require("../assets/clothes/normal white t-shirt avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 }
          },
          sleeve: {
            source: require("../assets/clothes/normal white t-shirt avif/arms/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 }
          },
          chest: {
            source: require("../assets/clothes/normal white t-shirt avif/chest/bm1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.005 }
          }
        },
      }
    },
  },
  shirt: {
    "notch-collar-powder-pink": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy1.avif"),
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
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy2.avif"),
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
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy3.avif"),
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
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/tuck tummy/tmy5.avif"),
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
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pink avif/normal half slv/h1.avif"),
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
    },
    "notch-collar-pumpkin": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy1.avif"),
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
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy2.avif"),
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
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy3.avif"),
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
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/tuck tummy/tmy5.avif"),
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
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt pumkin avif/normal half slv/h1.avif"),
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
    },
    "notch-collar-butter-yellow": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy1.avif"),
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
        M: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy2.avif"),
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
        L: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy3.avif"),
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
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/tuck tummy/tmy5.avif"),
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
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/a1.avif"),
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
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt yellow avif/normal half slv/h1.avif"),
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
    },
    "white-shirt": {

      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t2.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/m1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
        XL: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/mid tuck torso/t5.avif"),
            transform: {
              x: 0, y: 0, scale: 1, scaleX: 1.07,
              maskBottom: 10
            },
            maskBottom: 10,
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/tuck tummy/tmy5.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.07 },
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
          collar_button: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/button/buttonc.avif"),
            transform: { x: 0, y: 0, scale: 1 },
          },
        },
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a4.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a3.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/s1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f4.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/a1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.03 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a4.avif"),
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
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/sh3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          torso: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open torso fitted/f3.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          sleeve: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/normal half slv/h1.avif"),
            transform: { x: 0, y: 0, scale: 1, scaleX: 1.08 },
          },
          tummy: {
            source: require("../assets/clothes/shirts/Normal body Notch Collar shirt white avif/open tummy fitted/a3.avif"),
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
          }
        }
      }
    },
    "blue-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh1.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t3.avif"),
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
              scaleX: 1.03
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
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck torso/t5.avif"),
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
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/tuck tummy/tmy5.avif"),
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
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh1.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f5.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a5.avif"),
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
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/sh1.png"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open torso fitted/f5.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal shirt blue color avif/open tummy fitted/a5.avif"),
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
        }
      }
    },
    "olive-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck torso/t3.avif"),
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
              scaleX: 1.03
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
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/tuck tummy/tmy5.avif"),
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
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar normal  shirt olive avif/normal full slv/h1.avif"),
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
      }
    },
    "black-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/a1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck torso/t3.avif"),
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
              scaleX: 1.03
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
              scaleX: 1.03
            }
          },
          tummy: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/tuck tummy/tmy5.avif"),
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
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic collar shirt normal black avif/normal full slv/h1.avif"),
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
      }
    },
    "dawn-blue-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
        XL: {
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/tuck tummy/tmy5.avif"),
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
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/Mandarin Collar Shirt  normal dawn blue avif/normal full slv/h1.avif"),
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
      }
    },
    "white-linen-shirt": {
      buttoned_tucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
          },
          torso: {
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy1.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t2.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy2.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t4.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t3.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck torso/t5.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            },
            maskBottom: 10
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
            source: require("../assets/clothes/shirts/classic white shirt/tuck tummy/tmy5.avif"),
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
        }
      },
      untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f5.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a5.avif"),
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
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: {
            source: require("../assets/clothes/shirts/classic white shirt/sh1.avif"),
            transform: {
              x: 0,
              y: 0,
              scale: 1,
              scaleX: 1.03
            }
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
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f4.avif"),
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
        XL: {
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
            source: require("../assets/clothes/shirts/classic white shirt/normal full slv/h1.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/open torso fitted/f5.avif"),
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
            source: require("../assets/clothes/shirts/classic white shirt/open tummy fitted/a5.avif"),
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
        }
      }
    },

  }

  , shoes: {
    'formal-black-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png') } } } },
    'black-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/black shoes.png') } } } },
    'brown-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/brown shoes.png') } } } },
    'red-shoes': { 'normal': { 'M': { main: { source: require('../assets/accessories/Shoes/red shoes.png') } } } },
  },
  watch: {
    'watch': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/watch-s-m-a.png') } },
        'XXL': { main: { source: require('../assets/accessories/watch & bag/watch-hy.png') } },
      }
    }
  },
  bag: {
    'bag': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'M': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'L': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
        'XL': { main: { source: require('../assets/accessories/watch & bag/bag-s-m-a.png') } },
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
        'S': { main: { source: require('../assets/accessories/goggles1/sgoggles.png'), transform: { x: 0, y: 4, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles1/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles1/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles1/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    },
    'goggles2': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/goggles2/sgoggles.png'), transform: { x: 0, y: 4, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles2/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles2/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles2/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    },
    'goggles3': {
      'normal': {
        'S': { main: { source: require('../assets/accessories/goggles3/sgoggles.png'), transform: { x: 0, y: 4, scale: 1 } } },
        'M': { main: { source: require('../assets/accessories/goggles3/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'L': { main: { source: require('../assets/accessories/goggles3/mgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png'), transform: { x: 0, y: 5, scale: 1 } } },
        'XXL': { main: { source: require('../assets/accessories/goggles3/hgoggles.png'), transform: { x: 0, y: 6, scale: 1 } } },
      }
    }
  },
  jacket: {
    'cream-jacket': {
      normal: {
        S: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jks1.avif'), transform: { x: 0, y: 0, scale: 1 } },
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
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jka1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XXL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/close/jkf5.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        }
      },
      unbuttoned_untucked: {
        S: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jks1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk1.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        M: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo2.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkm1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk2.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        L: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jka1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bpal.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo3.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
        },
        XXL: {
          shoulder: { source: require('../assets/clothes/Cream Jacket png avif/jksh4.avif'), transform: { x: 0, y: 0, scale: 1 } },
          torso: { source: require('../assets/clothes/Cream Jacket png avif/open/jkfo5.avif'), transform: { x: 0, y: 0, scale: 1 } },
          sleeve: { source: require('../assets/clothes/Cream Jacket png avif/arms/jkh1.avif'), transform: { x: 0, y: 0, scale: 1 } },
          back: { source: require('../assets/clothes/Cream Jacket png avif/arms/bphy.avif'), transform: { x: 0, y: 0, scale: 1 } },
          collar: { source: require('../assets/clothes/Cream Jacket png avif/jk3.avif'), transform: { x: 0, y: 0, scale: 1 } }
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
  const occludes = variantMeta?.occludes || [];

  let assetVariant = variant;
  const isTieVariant = variant.endsWith('_tie');
  if (!CLOTHING_ASSET_MAP[category]?.[id]?.[assetVariant]) {
    if (isTieVariant) {
      assetVariant = assetVariant.slice(0, -4);
    }
  }

  const sizeMap = CLOTHING_ASSET_MAP[category]?.[id]?.[assetVariant]?.[size] || CLOTHING_ASSET_MAP[category]?.[id]?.[assetVariant]?.['M'];
  if (!sizeMap) return patches;

  for (const [part, data] of Object.entries(sizeMap)) {
    if (part === 'transform') continue; // In case any old top-level transform remains

    // Skip open collar button when tie is worn
    if (category === 'shirt' && isTieVariant && part === 'collar_button') {
      continue;
    }

    // data can be an object with {source, transform} (new format) or just the source (old format)
    let source = (data as any)?.source || data;
    const patchTransform = (data as any)?.transform || { x: 0, y: 0, scale: 1 };

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
    if (category === 'shirt' || category === 'tshirt') {
      if (part === 'back') z = 0; // Behind body
    }
    if (category === 'shirt') {
      if (part === 'sleeve') z = 215; // SHIRT_SLEEVE
      // If buttoned_tucked, we tuck the tummy
      if (part === 'tummy' && assetVariant === 'buttoned_tucked') z = 95; // Under trouser (100)
    }
    if (category === 'trouser') {
      if (part === 'tummy') z = 105; // Waistband over base trouser
    }
    if (category === 'jacket') {
      if (part === 'back') z = 0; // Behind body
      if (part === 'sleeve' || part === 'arms') z = 245; // On top of inner top sleeves (shirt sleeve is 215)
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
      maskBottom: (data as any)?.maskBottom,
    });
  }

  return patches;
};

// Dummy exports for missing legacy functions
export const getClothingPatch = (category: string, id: string, size: string): any[] => [];
