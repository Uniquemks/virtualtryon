export enum RenderLayer {
  BODY = 0,
  TROUSER = 100,
  SHORTS = 100,
  TSHIRT = 110,
  SHIRT = 200,
  SHIRT_SLEEVE = 215,
  TIE = 210,
  SWEATER = 220,
  SCARF = 230,
  JACKET = 240,
  COAT = 250,
  SHOES = 90,
  BAG = 350,
  CAP = 400,
  ACCESSORY = 450
}

export const GARMENT_META = {
  tshirt: {
    layer: RenderLayer.TSHIRT,
    variants: {
      untucked: {
        occludes: []
      }
    }
  },
  shirt: {
    layer: RenderLayer.SHIRT,
    variants: {
      buttoned_tucked: {
        occludes: ['tshirt_torso', 'tshirt_tummy', 'tshirt_shoulder', 'tshirt_sleeve', 'tshirt_chest']
      },
      unbuttoned_untucked: {
        occludes: ['tshirt_torso', 'tshirt_tummy', 'tshirt_shoulder', 'tshirt_sleeve']
      },
      buttoned_tucked_tie: {
        occludes: ['tshirt_torso', 'tshirt_tummy', 'tshirt_shoulder', 'tshirt_sleeve', 'tshirt_chest']
      },
      unbuttoned_untucked_tie: {
        occludes: ['tshirt_torso', 'tshirt_tummy', 'tshirt_shoulder', 'tshirt_sleeve']
      }
    }
  },
  trouser: {
    layer: RenderLayer.TROUSER,
    variants: {
      normal: {
        occludes: []
      }
    }
  },
  shorts: {
    layer: RenderLayer.SHORTS,
    variants: {
      normal: {
        occludes: []
      }
    }
  },
  sweater: {
    layer: RenderLayer.SWEATER,
    variants: {
      normal: { occludes: [] }
    }
  },
  coat: {
    layer: RenderLayer.COAT,
    variants: {
      normal: { occludes: [] }
    }
  },
  jacket: {
    layer: RenderLayer.JACKET,
    variants: {
      normal: { occludes: ['shirt_sleeve', 'tshirt_sleeve'] },
      unbuttoned_untucked: { occludes: ['shirt_sleeve', 'tshirt_sleeve'] }
    }
  },
  tie: {
    layer: RenderLayer.TIE,
    variants: {
      normal: { occludes: [] }
    }
  },
  scarf: {
    layer: RenderLayer.SCARF,
    variants: {
      normal: { occludes: [] }
    }
  },
  shoes: {
    layer: RenderLayer.SHOES,
    variants: {
      normal: { occludes: [] }
    }
  },
  cap: {
    layer: RenderLayer.CAP,
    variants: {
      normal: { occludes: [] }
    }
  },
  bag: {
    layer: RenderLayer.BAG,
    variants: {
      normal: { occludes: [] }
    }
  },
  watch: {
    layer: RenderLayer.ACCESSORY,
    variants: {
      normal: { occludes: [] }
    }
  },
  glasses: {
    layer: RenderLayer.ACCESSORY,
    variants: {
      normal: { occludes: [] }
    }
  }
};
