import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import styles from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/MainStack/const';
import { AppText } from '../../components';

const PetDetails: React.FC = () => {
  const pet =
    useRoute<RouteProp<MainStackParamList, 'PetDetails'>>().params?.pet;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image source={{ uri: pet?.imageUrl }} style={styles.image} />

      <View style={styles.nameContainer}>
        <AppText style={styles.name}>{pet?.name}</AppText>
        <View style={styles.tags}>
          <AppText style={styles.tag}>{pet?.type}</AppText>
          <AppText style={styles.tag}>{pet?.age} years old</AppText>
        </View>
      </View>

      <AppText style={styles.description}>
        {pet?.name} is a friendly and energetic {pet?.type.toLowerCase()} who is
        looking for a loving home!
      </AppText>

      <View>
        {pet?.breed && (
          <AppText style={styles.detail}>🐾 Breed: {pet.breed}</AppText>
        )}
        {pet?.color && (
          <AppText style={styles.detail}>🎨 Color: {pet.color}</AppText>
        )}
        {pet?.gender && (
          <AppText style={styles.detail}>⚧ Gender: {pet.gender}</AppText>
        )}
        {pet?.weight && (
          <AppText style={styles.detail}>⚖️ Weight: {pet.weight} kg</AppText>
        )}
      </View>

      <View>
        <AppText>✔️ Vaccinated</AppText>
        <AppText>✔️ Good with kids</AppText>
        <AppText>✔️ Loves other pets</AppText>
        <AppText>✔️ No special needs</AppText>
      </View>
    </ScrollView>
  );
};

export default PetDetails;
