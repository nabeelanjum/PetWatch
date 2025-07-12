import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Pet } from '../../../core/types';
import styles from './styles';
import { AppText } from '../../atoms';

const PetListItem: React.FC<{ pet: Pet; onPress: () => void }> = ({
  pet,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: pet.imageUrl }} style={styles.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.name}>{pet.name}</AppText>
        <View style={styles.tags}>
          <AppText style={styles.tag}>{pet.type}</AppText>
          <AppText style={styles.tag}>{pet.age} years old</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PetListItem;
