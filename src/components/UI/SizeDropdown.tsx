import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAvatar } from '../../store/avatarStore';

const sizes = ['XXL', 'XL', 'L', 'M', 'S'] as const;

interface Props {
  isWardrobeOpen?: boolean;
}

const SizeDropdown: React.FC<Props> = ({ isWardrobeOpen = false }) => {
  const { size, setSize } = useAvatar();
  const [expanded, setExpanded] = useState(false);

  const expandAnim = useRef(new Animated.Value(0)).current;
  const shiftAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(shiftAnim, {
      toValue: isWardrobeOpen ? 1 : 0,
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  }, [isWardrobeOpen, shiftAnim]);

  const toggleExpand = () => {
    Animated.spring(expandAnim, {
      toValue: expanded ? 0 : 1,
      useNativeDriver: true,
      friction: 7,
      tension: 50,
    }).start();
    setExpanded(!expanded);
  };

  const handleSelect = (s: any) => {
    setSize(s);
    Animated.spring(expandAnim, {
      toValue: 0,
      useNativeDriver: true,
      friction: 7,
      tension: 50,
    }).start();
    setExpanded(false);
  };

  const translateY = shiftAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -420], // Shift above the 400px bottom sheet
  });

  const optionsScale = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 1],
  });

  const optionsTranslateY = expandAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [40, 0],
  });

  return (
    <Animated.View style={[styles.wrapper, { transform: [{ translateY }] }]}>
      {/* Expanded Options List */}
      <Animated.View 
        style={[styles.optionsContainer, { 
          opacity: expandAnim,
          transform: [{ scale: optionsScale }, { translateY: optionsTranslateY }]
        }]}
        pointerEvents={expanded ? 'auto' : 'none'}
      >
        {sizes.map((s) => (
          <TouchableOpacity 
            key={s} 
            style={[styles.optionButton, size === s && styles.selectedOptionButton]}
            onPress={() => handleSelect(s)}
          >
            <Text style={[styles.optionText, size === s && styles.selectedOptionText]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      {/* Master Toggle Button */}
      <TouchableOpacity style={styles.masterButton} onPress={toggleExpand} activeOpacity={0.8}>
        <MaterialCommunityIcons name="human-male" size={24} color="#fff" />
        <Text style={styles.masterButtonText}>{size}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
    zIndex: 150, // Must be above wardrobe
  },
  optionsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 24,
    padding: 8,
    marginBottom: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
  },
  optionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectedOptionButton: {
    backgroundColor: '#111',
    borderColor: '#111',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
  },
  selectedOptionText: {
    color: '#fff',
  },
  masterButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  masterButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '800',
    marginTop: -2,
  },
});

export default SizeDropdown;
