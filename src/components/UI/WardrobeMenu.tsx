import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated, Pressable, BackHandler, Image, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAvatar } from '../../store/avatarStore';
import { getWardrobeItems, getInventoryStats, CATEGORIES_CONFIG, CategoryId, WardrobeItem, WARDROBE_REGISTRY } from '../../utils/wardrobeRegistry';
import { OUTFIT_COMBOS } from '../../config/outfits';
import OutfitCard from './OutfitCard';

interface Props {
  onClose: () => void;
}

const WardrobeMenu: React.FC<Props> = ({ onClose }) => {
  const { 
    selectedCombo, selectCombo, selectedProducts, setProduct,
    avatarUri, avatarMetadata,
    dynamicInner, dynamicTop, dynamicBottom, dynamicShoes, dynamicGoggles, dynamicCap, dynamicCategoryItems,
    setDynamicInner, setDynamicTop, setDynamicBottom, setDynamicShoes, setDynamicGoggles, setDynamicCap, setDynamicCategoryItems
  } = useAvatar();

  const [viewMode, setViewMode] = useState<'PRODUCTS' | 'OUTFITS'>('PRODUCTS');
  const [activeTab, setActiveTab] = useState<CategoryId>('shirts');

  const [isFetchingPatches, setIsFetchingPatches] = useState(false);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(false);
  
  const slideAnim = useRef(new Animated.Value(400)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const inventoryStats = getInventoryStats();

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      })
    ]).start();
  }, [slideAnim, fadeAnim]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 400,
        duration: 250,
        useNativeDriver: true,
      })
    ]).start(() => onClose());
  };

  useEffect(() => {
    const backAction = () => {
      handleClose();
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);
    return () => backHandler.remove();
  }, []);



  const handleSelectLocal = (item: WardrobeItem) => {
    if (item.status !== 'READY') return;
    
    if (item.category === 'shirts') {
      setProduct('shirt', selectedProducts['shirt'] === item.id ? null : item.id);
    } else if (item.category === 'tshirts') {
      setProduct('tshirt', selectedProducts['tshirt'] === item.id ? null : item.id);
    } else if (item.category === 'trousers') {
      setProduct('trouser', selectedProducts['trouser'] === item.id ? null : item.id);
    } else if (item.category === 'caps') {
      setProduct('cap', selectedProducts['cap'] === item.id ? null : item.id);
    } else if (item.category === 'shoes') {
      setProduct('shoes', selectedProducts['shoes'] === item.id ? null : item.id);
    } else if (item.category === 'watches') {
      setProduct('watch', selectedProducts['watch'] === item.id ? null : item.id);
    } else if (item.category === 'bags') {
      setProduct('bag', selectedProducts['bag'] === item.id ? null : item.id);
    } else if (item.category === 'jackets') {
      setProduct('jacket', selectedProducts['jacket'] === item.id ? null : item.id);
    } else if (item.category === 'scarves') {
      setProduct('scarf', selectedProducts['scarf'] === item.id ? null : item.id);
    } else if (item.category === 'glasses') {
      setProduct('glasses', selectedProducts['glasses'] === item.id ? null : item.id);
    } else if (item.category === 'ties') {
      setProduct('tie', selectedProducts['tie'] === item.id ? null : item.id);
    }
  };

  const renderContent = () => {

    // Default static local rendering mode
    const items = getWardrobeItems(activeTab);
    return items.map((item) => {
      const isSelected = (activeTab === 'shirts' && selectedProducts['shirt'] === item.id) || 
                         (activeTab === 'tshirts' && selectedProducts['tshirt'] === item.id) ||
                         (activeTab === 'trousers' && selectedProducts['trouser'] === item.id) ||
                         (activeTab === 'caps' && selectedProducts['cap'] === item.id) ||
                         (activeTab === 'shoes' && selectedProducts['shoes'] === item.id) ||
                         (activeTab === 'watches' && selectedProducts['watch'] === item.id) ||
                         (activeTab === 'bags' && selectedProducts['bag'] === item.id) ||
                         (activeTab === 'jackets' && selectedProducts['jacket'] === item.id) ||
                         (activeTab === 'scarves' && selectedProducts['scarf'] === item.id) ||
                         (activeTab === 'glasses' && selectedProducts['glasses'] === item.id) ||
                         (activeTab === 'ties' && selectedProducts['tie'] === item.id);
      
      const isReady = item.status === 'READY';
      const isComingSoon = item.status === 'COMING_SOON';
      const isMissing = item.status === 'MISSING_ASSETS';

      return (
        <TouchableOpacity 
          key={item.id}
          activeOpacity={0.7}
          style={[
            styles.assetCard, 
            isSelected && styles.activeAssetCard,
            !isReady && styles.disabledAssetCard
          ]}
          onPress={() => handleSelectLocal(item)}
          disabled={!isReady}
        >
          <View style={styles.assetImagePlaceholder}>
            <Image 
              source={item.thumbnail} 
              style={[
                styles.thumbnailImage, 
                (!isReady) && styles.greyedOutImage 
              ]} 
              resizeMode="contain" 
            />
            {!isReady && (
              <View style={styles.overlayBadgeContainer}>
                {isComingSoon && <MaterialCommunityIcons name="lock" size={24} color="#666" />}
                {isMissing && <MaterialCommunityIcons name="alert-circle" size={24} color="#ef4444" />}
              </View>
            )}
            {item.badge && (
              <View style={[styles.stringBadge, item.badge === 'READY' ? styles.badgeReady : (item.badge === 'NEW' ? styles.badgeNew : styles.badgeComingSoon)]}>
                <Text style={styles.stringBadgeText}>{item.badge}</Text>
              </View>
            )}
          </View>
          <Text style={[styles.assetText, !isReady && styles.disabledAssetText]}>{item.name}</Text>
        </TouchableOpacity>
      );
    });
  };

  const renderOutfits = () => {
    return OUTFIT_COMBOS.map((c) => {
      let missingCount = 0;
      Object.values(c.items).forEach(id => {
        if (typeof id === 'string') {
          const item = WARDROBE_REGISTRY.find(w => w.id === id);
          if (!item || item.status === 'COMING_SOON') missingCount++;
        }
      });
      const status = missingCount === 0 ? 'READY' : 'PARTIAL';

      return (
        <OutfitCard
          key={c.id}
          combo={c}
          isActive={selectedCombo === c.id}
          onPress={() => selectCombo(selectedCombo === c.id ? null : c.id)}
          status={status}
          missingCount={missingCount}
        />
      );
    });
  };

  return (
    <>
      {/* Backdrop */}
      <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim, backgroundColor: 'rgba(0,0,0,0.15)', zIndex: 100 }]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={handleClose} />
      </Animated.View>

      {/* Drawer */}
      <Animated.View style={[styles.drawerContainer, { transform: [{ translateY: slideAnim }] }]}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.dragHandleArea} onPress={handleClose}>
            <View style={styles.dragHandle} />
          </TouchableOpacity>
          <View style={styles.tabSwitcher}>
            <TouchableOpacity 
              style={[styles.mainTab, viewMode === 'PRODUCTS' && styles.activeMainTab]} 
              onPress={() => setViewMode('PRODUCTS')}
            >
              <Text style={[styles.mainTabText, viewMode === 'PRODUCTS' && styles.activeMainTabText]}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.mainTab, viewMode === 'OUTFITS' && styles.activeMainTab]} 
              onPress={() => setViewMode('OUTFITS')}
            >
              <Text style={[styles.mainTabText, viewMode === 'OUTFITS' && styles.activeMainTabText]}>Outfits / Combo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {isFetchingPatches && (
          <View style={styles.fetchingPatchesIndicator}>
            <ActivityIndicator size="small" color="#e60000" />
            <Text style={styles.fetchingPatchesText}>Fetching live patches...</Text>
          </View>
        )}

        {viewMode === 'PRODUCTS' ? (
          <>
            {/* Category horizontal scroll bar */}
            <View style={styles.categoryScrollWrapper}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScrollContent}>
                {CATEGORIES_CONFIG.map((cat) => {
                  const isActive = activeTab === cat.id;
                  const stats = getInventoryStats(cat.id);
                  return (
                    <TouchableOpacity
                      key={cat.id}
                      style={[styles.categoryItem, isActive && styles.activeCategoryItem]}
                      onPress={() => setActiveTab(cat.id)}
                    >
                      <MaterialCommunityIcons name={cat.icon as any} size={24} color={isActive ? '#111' : '#888'} />
                      <View style={styles.categoryTextContainer}>
                        <Text style={[styles.categoryName, isActive && styles.activeCategoryName]}>{cat.name}</Text>
                        <Text style={[styles.categorySubtitle, isActive && styles.activeCategorySubtitle]}>
                          {stats.ready} Ready • {stats.comingSoon + stats.missing} Coming Soon
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <ScrollView style={styles.assetsContainer} contentContainerStyle={styles.assetsContent}>
              {renderContent()}
            </ScrollView>
          </>
        ) : (
          <ScrollView style={styles.assetsContainer} contentContainerStyle={styles.outfitsContent}>
            {renderOutfits()}
          </ScrollView>
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 480,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 20,
    paddingBottom: 20,
    zIndex: 101,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  dragHandleArea: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 12,
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#d1d5db',
    borderRadius: 2,
  },
  tabSwitcher: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
    marginTop: 8,
  },
  mainTab: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  activeMainTab: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  mainTabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  activeMainTabText: {
    color: '#111',
  },
  categoryScrollWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  categoryScrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  categoryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: 'transparent',
    gap: 12,
  },
  activeCategoryItem: {
    backgroundColor: '#f3f4f6',
    borderColor: '#111',
  },
  categoryTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#888',
  },
  activeCategoryName: {
    color: '#111',
  },
  categorySubtitle: {
    fontSize: 10,
    fontWeight: '500',
    color: '#a1a1aa',
    marginTop: 2,
  },
  activeCategorySubtitle: {
    color: '#666',
  },
  assetsContainer: {
    flex: 1,
  },
  assetsContent: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  outfitsContent: {
    padding: 20,
  },
  assetCard: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    overflow: 'hidden',
    paddingBottom: 8,
  },
  activeAssetCard: {
    borderColor: '#e60000',
    borderWidth: 2,
  },
  disabledAssetCard: {
    backgroundColor: '#f9fafb',
  },
  assetImagePlaceholder: {
    height: 140,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    position: 'relative',
  },
  thumbnailImage: {
    width: '90%',
    height: '90%',
  },
  greyedOutImage: {
    opacity: 0.4,
  },
  overlayBadgeContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(249, 250, 251, 0.3)',
  },
  stringBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeReady: {
    backgroundColor: '#10b981',
  },
  badgeComingSoon: {
    backgroundColor: '#f59e0b',
  },
  badgeNew: {
    backgroundColor: '#3b82f6',
  },
  stringBadgeText: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  assetText: {
    paddingHorizontal: 12,
    paddingTop: 8,
    fontSize: 12,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#e60000',
    textAlign: 'center',
    marginTop: 2,
  },
  disabledAssetText: {
    color: '#9ca3af',
  },
  emptyStateContainer: {
    width: '100%',
    paddingVertical: 60,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  emptyStateText: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 2,
    color: '#9ca3af',
  },
  dynamicGridContainer: {
    width: '100%',
  },
  removeItemBtn: {
    width: '100%',
    height: 38,
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  removeItemBtnText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#4b5563',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  fetchingPatchesIndicator: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: '#fef2f2',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  fetchingPatchesText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#e60000',
  },
});

export default WardrobeMenu;
