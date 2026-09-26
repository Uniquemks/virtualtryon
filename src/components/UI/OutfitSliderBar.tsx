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
    <View style={styles.fullScreenOverlay}>
      {/* Full-Screen Horizontal Paged Carousel */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {OUTFIT_COMBOS.map((combo) => (
          <TouchableOpacity
            key={combo.id}
            style={[styles.slide, { width: windowWidth }]}
            onPress={() => handleSelectCombo(combo.id)}
            activeOpacity={0.95}
          >
            <View style={styles.imageContainer}>
              <Image 
                source={combo.thumbnail} 
                style={styles.fullImage} 
                resizeMode="contain" 
              />

              {/* Close Cross Button Directly On The Image */}
              <TouchableOpacity 
                style={styles.imageCloseButton} 
                onPress={handleCutThumbnail} 
                activeOpacity={0.8}
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              >
                <Ionicons name="close" size={24} color="#111" />
              </TouchableOpacity>

              {/* Bottom Title & Action Overlay */}
              <View style={styles.detailsOverlay}>
                <Text style={styles.comboTitle}>{combo.name}</Text>
                <Text style={styles.tapPrompt}>Tap to Drape Outfit</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    zIndex: 1000,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  slide: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullImage: {
    width: '100%',
    height: '100%',
  },
  imageCloseButton: {
    position: 'absolute',
    top: 24,
    right: 20,
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    zIndex: 1020,
  },
  detailsOverlay: {
    position: 'absolute',
    bottom: 28,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#f1f5f9',
  },
  comboTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 2,
  },
  tapPrompt: {
    fontSize: 12,
    fontWeight: '700',
    color: '#e60000',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});

export default OutfitSliderBar;



