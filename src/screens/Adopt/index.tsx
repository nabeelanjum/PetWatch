import React, { useCallback, useState } from 'react';
import { View, Image } from 'react-native';
import { MainStackParamList } from '../../navigation/MainStack/const';
import { RouteProp, useRoute } from '@react-navigation/native';
import styles from './styles';
import { AppButton, AppText } from '../../components';

const Adopt: React.FC = () => {
  const pet = useRoute<RouteProp<MainStackParamList, 'Adopt'>>().params?.pet;

  const [isLoading, setLoading] = useState(false);
  const [adopted, setAdopted] = useState(false);

  const handleAdoption = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAdopted(true);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {adopted ? (
        <View style={styles.resultBox}>
          <AppText style={styles.successText}>🎉 Congratulations!</AppText>
          <AppText>You've adopted {pet?.name} 🐾</AppText>
        </View>
      ) : (
        <View style={styles.card}>
          <Image source={{ uri: pet?.imageUrl }} style={styles.image} />
          <AppText style={styles.title}>Adopt {pet?.name}?</AppText>
          <AppText style={styles.price}>
            Adoption Fee: ${pet?.adoptionPrice}
          </AppText>
          <AppButton
            isLoading={isLoading}
            title="💖 Confirm Payment"
            onPress={handleAdoption}
          />
        </View>
      )}
    </View>
  );
};

export default Adopt;
