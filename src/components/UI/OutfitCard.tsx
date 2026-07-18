import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { OutfitCombo } from '../../types/outfit';

interface Props {
  combo: OutfitCombo;
  onPress: () => void;
  isActive: boolean;
  status?: 'READY' | 'PARTIAL' | 'COMING_SOON';
  missingCount?: number;
}

const OutfitCard: React.FC<Props> = ({ combo, onPress, isActive, status = 'READY', missingCount = 0 }) => {
  return (
    <TouchableOpacity 
      style={[styles.card, isActive && styles.cardActive]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image source={combo.thumbnail} style={styles.thumbnail} resizeMode="contain" />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{combo.name}</Text>
        <Text style={styles.supportedText}>
          Sizes: {combo.supportedSizes.join(', ')}
        </Text>
        {status === 'PARTIAL' && missingCount > 0 && (
          <Text style={styles.partialText}>
            {missingCount} item{missingCount > 1 ? 's' : ''} unavailable
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardActive: {
    borderColor: '#111',
  },
  imageContainer: {
    width: '100%',
    height: 180,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: '80%',
    height: '80%',
  },
  details: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
    marginBottom: 4,
  },
  supportedText: {
    fontSize: 12,
    color: '#888',
  },
  partialText: {
    fontSize: 12,
    color: '#f59e0b',
    marginTop: 4,
    fontWeight: '500',
  },
});

export default OutfitCard;
