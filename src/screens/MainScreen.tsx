import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Text, Alert, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AvatarProvider, useAvatar } from '../store/avatarStore';
import AvatarCanvas from '../components/Avatar/AvatarCanvas';
import WardrobeMenu from '../components/UI/WardrobeMenu';
import SizeDropdown from '../components/UI/SizeDropdown';
import OutfitSliderBar from '../components/UI/OutfitSliderBar';
import { LegacyTryOnFlow } from '../components/UI/LegacyTryOnFlow';

const MainScreenContent = () => {
  const [activePanel, setActivePanel] = useState<'none' | 'wardrobe'>('none');
  const [isLegacyOpen, setIsLegacyOpen] = useState(false);
  const [showSlider, setShowSlider] = useState(true);
  const { showDebug, setShowDebug, avatarUri, resetAvatar } = useAvatar();

  const togglePanel = (panel: 'wardrobe') => {
    setActivePanel((prev) => (prev === panel ? 'none' : panel));
  };

  const handleOpenLegacy = () => {
    setIsLegacyOpen(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Top Logo Bar */}
        <View style={styles.header}>
          <Text style={styles.logoText}>f</Text>
        </View>

        <View style={styles.container}>
          {/* Avatar Rendering Area - Full Screen */}
          <View style={styles.avatarContainer}>
            <AvatarCanvas />
          </View>

          {/* Floating Action Buttons */}
          <View style={styles.fabContainer}>
            <TouchableOpacity style={styles.fab} onPress={() => togglePanel('wardrobe')}>
              <Ionicons name="shirt-outline" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.fab} onPress={handleOpenLegacy}>
              <Ionicons name="sparkles-outline" size={24} color="#fff" />
            </TouchableOpacity>

            {avatarUri && (
              <TouchableOpacity style={[styles.fab, { backgroundColor: 'rgba(230, 0, 0, 0.7)' }]} onPress={resetAvatar}>
                <Ionicons name="refresh-outline" size={24} color="#fff" />
              </TouchableOpacity>
            )}

            <TouchableOpacity style={[styles.fab, showDebug && { backgroundColor: 'rgba(255, 0, 0, 0.5)' }]} onPress={() => setShowDebug(prev => !prev)}>
              <Ionicons name="bug-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Initial Startup Outfit Thumbnail Slider */}
          {showSlider && !avatarUri && activePanel !== 'wardrobe' && (
            <OutfitSliderBar onClose={() => setShowSlider(false)} />
          )}

          {/* Floating Panels */}
          {activePanel === 'wardrobe' && (
            <View style={styles.wardrobeContainer}>
              <WardrobeMenu onClose={() => setActivePanel('none')} />
            </View>
          )}

          {/* Persistent Size Picker - Hidden after custom avatar is generated */}
          {!avatarUri && <SizeDropdown isWardrobeOpen={activePanel === 'wardrobe'} />}
        </View>

        {/* Legacy Custom Avatar Onboarding/Upload Workflow */}
        {isLegacyOpen && (
          <LegacyTryOnFlow onClose={() => setIsLegacyOpen(false)} />
        )}
      </SafeAreaView>
  );
};

const MainScreen = () => {
  return (
    <AvatarProvider>
      <MainScreenContent />
    </AvatarProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#d6d8d9', // Gray background like the first image
  },
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c6c8c9', // Slightly darker gray for the header
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    zIndex: 10,
  },
  logoText: {
    fontFamily: 'cursive',
    fontSize: 40,
    color: '#e60000', // Red logo text
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  container: {
    flex: 1,
    position: 'relative',
  },
  avatarContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    gap: 16,
    zIndex: 20,
  },
  fab: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(0, 0, 0, 0.15)', // Darker transparent background for white icons
    justifyContent: 'center',
    alignItems: 'center',
  },
  wardrobeContainer: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'flex-end',
    zIndex: 100,
  },
  panelOverlay: {
    position: 'absolute',
    top: 100,
    right: 80,
    width: 300,
    zIndex: 100,
  },
  fabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 8,
  },
  fabLabel: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  legacyModalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    zIndex: 1000,
  },
  legacyModalHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
  },
  legacyHeaderTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legacyModalTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  legacyModalSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    fontStyle: 'italic',
  },
  legacyCloseButton: {
    padding: 4,
  },
  legacyIframeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default MainScreen;
