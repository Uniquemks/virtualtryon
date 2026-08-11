import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAvatar } from '../../store/avatarStore';
import { OUTFIT_COMBOS } from '../../config/outfits';

interface Props {
  onClose: () => void;
}

export const OutfitSliderBar: React.FC<Props> = ({ onClose }) => {
  const { width: windowWidth } = useWindowDimensions();
  const { selectCombo, setSize } = useAvatar();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCombo = (comboId: string) => {
    selectCombo(comboId);
    setSize('M'); // Apply draping logic on default M size avatar
    onClose();    // Close full screen slider
  };

  const handleCutThumbnail = () => {
    selectCombo(null); // Clear outfit combo
    setSize('M');      // Show default M size avatar
    onClose();         // Close full screen slider
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / (windowWidth || 1));
    if (slide !== activeIndex && slide >= 0 && slide < OUTFIT_COMBOS.length) {
      setActiveIndex(slide);
    }
  };

  return (
    <SafeAreaView style={styles.fullScreenOverlay}>
      {/* Top Corner Cut / Close Button (No Heading Text) */}
      <TouchableOpacity 
        style={styles.topCloseButton} 
        onPress={handleCutThumbnail} 
        activeOpacity={0.8}
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      >
        <Ionicons name="close" size={24} color="#111" />
      </TouchableOpacity>

      {/* Full-Screen Horizontal Paged Carousel (One Image Per Screen) */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {OUTFIT_COMBOS.map((combo) => (
          <TouchableOpacity
            key={combo.id}
            style={[styles.slide, { width: windowWidth }]}
            onPress={() => handleSelectCombo(combo.id)}
            activeOpacity={0.9}
          >
            <View style={styles.cardContainer}>
              <View style={styles.imageContainer}>
                <Image source={combo.thumbnail} style={styles.fullImage} resizeMode="contain" />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.comboTitle}>{combo.name}</Text>
                <Text style={styles.tapPrompt}>Tap to Drape Outfit</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Pagination Dots at Bottom */}
      <View style={styles.pagination}>
        {OUTFIT_COMBOS.map((_, i) => (
          <View 
            key={i} 
            style={[styles.dot, activeIndex === i && styles.activeDot]} 
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#f8fafc',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topCloseButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    zIndex: 1010,
  },
  scrollView: {
    flex: 1,
    width: '100%',
  },
  slide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 68,
    paddingBottom: 55,
  },
  cardContainer: {
    width: '96%',
    maxWidth: 680,
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  imageContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    alignItems: 'center',
    paddingBottom: 4,
  },
  comboTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 2,
  },
  tapPrompt: {
    fontSize: 13,
    fontWeight: '700',
    color: '#e60000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  pagination: {
    position: 'absolute',
    bottom: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    zIndex: 1010,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#cbd5e1',
  },
  activeDot: {
    width: 24,
    backgroundColor: '#e60000',
  },
});

export default OutfitSliderBar;



