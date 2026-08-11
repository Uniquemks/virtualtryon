import React, { createContext, useContext, useState } from 'react';

type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';

interface AvatarState {
  size: Size;
  setSize: (size: Size) => void;
  selectedCombo: string | null;
  selectCombo: (comboId: string | null) => void;
  selectedProducts: Record<string, string>;
  setProduct: (category: string, id: string | null) => void;
  showDebug: boolean;
  setShowDebug: (show: boolean | ((prev: boolean) => boolean)) => void;
  bodyType: 'Slim' | 'Medium' | 'Athletic' | 'Heavy';
  setBodyType: (type: 'Slim' | 'Medium' | 'Athletic' | 'Heavy') => void;

  // Custom Generated Avatar States
  avatarUri: string | null;
  avatarMetadata: any | null;
  selfieUri: string | null;
  bodyUri: string | null;
  userName: string;
  userGender: 'Male' | 'Female';
  userHeight: string;

  // Dynamic API Wardrobe States
  dynamicInner: any | null;
  dynamicTop: any | null;
  dynamicBottom: any | null;
  dynamicShoes: any | null;
  dynamicGoggles: any | null;
  dynamicCap: any | null;
  dynamicCategoryItems: Record<string, any[]>;

  // Draping State
  isDraping: boolean;
  setIsDraping: (loading: boolean | ((prev: boolean) => boolean)) => void;

  // Actions
  setCustomAvatar: (uri: string | null, metadata: any | null) => void;
  setSelfieUri: (uri: string | null) => void;
  setBodyUri: (uri: string | null) => void;
  setProfileInfo: (name: string, gender: 'Male' | 'Female', height: string) => void;
  resetAvatar: () => void;
  setDynamicInner: (val: any) => void;
  setDynamicTop: (val: any) => void;
  setDynamicBottom: (val: any) => void;
  setDynamicShoes: (val: any) => void;
  setDynamicGoggles: (val: any) => void;
  setDynamicCap: (val: any) => void;
  setDynamicCategoryItems: (val: Record<string, any[]>) => void;
  clearDynamicSelections: () => void;
}

const AvatarContext = createContext<AvatarState | undefined>(undefined);

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [size, setSize] = useState<Size>('M');
  const [selectedCombo, setSelectedCombo] = useState<string | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Record<string, string>>({
    tshirt: 'white-tshirt',
    trouser: 'jeans',
    shoes: 'black-shoes'
  });
  const [showDebug, setShowDebug] = useState<boolean>(false);
  const [bodyType, setBodyType] = useState<'Slim' | 'Medium' | 'Athletic' | 'Heavy'>('Medium');
  const [isDraping, setIsDraping] = useState<boolean>(false);

  // Custom states
  const [avatarUri, setAvatarUri] = useState<string | null>(null);
  const [avatarMetadata, setAvatarMetadata] = useState<any | null>(null);
  const [selfieUri, setSelfieUri] = useState<string | null>(null);
  const [bodyUri, setBodyUri] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [userGender, setUserGender] = useState<'Male' | 'Female'>('Male');
  const [userHeight, setUserHeight] = useState<string>('');

  // Dynamic API Wardrobe states
  const [dynamicInner, setDynamicInner] = useState<any | null>(null);
  const [dynamicTop, setDynamicTop] = useState<any | null>(null);
  const [dynamicBottom, setDynamicBottom] = useState<any | null>(null);
  const [dynamicShoes, setDynamicShoes] = useState<any | null>(null);
  const [dynamicGoggles, setDynamicGoggles] = useState<any | null>(null);
  const [dynamicCap, setDynamicCap] = useState<any | null>(null);
  const [dynamicCategoryItems, setDynamicCategoryItems] = useState<Record<string, any[]>>({});

  const selectCombo = (comboId: string | null) => {
    setSelectedCombo(comboId);
    if (comboId) {
      // When a combo is selected, clear individual products to rely entirely on the combo's definition
      setSelectedProducts({});
    }
  };

  const setProduct = (category: string, id: string | null) => {
    setSelectedCombo(null); // break combo when custom product is selected
    setSelectedProducts(prev => {
      const next = { ...prev };
      if (id === null) {
        delete next[category];
      } else {
        next[category] = id;
      }
      return next;
    });
  };

  const setCustomAvatar = (uri: string | null, metadata: any | null) => {
    setAvatarUri(uri);
    setAvatarMetadata(metadata);
    if (metadata && metadata.sizeCode) {
      // Auto-select best sizing group matching custom profiling
      const mapping: Record<string, Size> = {
        S: 'S',
        M: 'M',
        A: 'L',
        H: 'XXL',
      };
      const resolvedSize = mapping[metadata.sizeCode] || 'M';
      setSize(resolvedSize);
    }
  };

  const setProfileInfo = (name: string, gender: 'Male' | 'Female', height: string) => {
    setUserName(name);
    setUserGender(gender);
    setUserHeight(height);
  };

  const clearDynamicSelections = () => {
    setDynamicInner(null);
    setDynamicTop(null);
    setDynamicBottom(null);
    setDynamicShoes(null);
    setDynamicGoggles(null);
    setDynamicCap(null);
  };

  const resetAvatar = () => {
    setAvatarUri(null);
    setAvatarMetadata(null);
    setSelfieUri(null);
    setBodyUri(null);
    setUserName('');
    setUserGender('Male');
    setUserHeight('');
    clearDynamicSelections();
    setSelectedCombo(null);
    setSize('M');
    setBodyType('Medium');
    setSelectedProducts({
      tshirt: 'white-tshirt',
      trouser: 'jeans',
      shoes: 'black-shoes'
    });
  };

  return (
    <AvatarContext.Provider value={{ 
      size, setSize, 
      selectedCombo, selectCombo,
      selectedProducts, setProduct,
      showDebug, setShowDebug, bodyType, setBodyType,
      isDraping, setIsDraping,
      avatarUri, avatarMetadata, selfieUri, bodyUri, userName, userGender, userHeight,
      dynamicInner, dynamicTop, dynamicBottom, dynamicShoes, dynamicGoggles, dynamicCap, dynamicCategoryItems,
      setCustomAvatar, setSelfieUri, setBodyUri, setProfileInfo, resetAvatar,
      setDynamicInner, setDynamicTop, setDynamicBottom, setDynamicShoes, setDynamicGoggles, setDynamicCap, setDynamicCategoryItems,
      clearDynamicSelections
    }}>
      {children}
    </AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);
  if (!context) throw new Error('useAvatar must be used within an AvatarProvider');
  return context;
};
