import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import { LocationCoordinates } from '../../core/types';
import { AppButton, AppText } from '../../components';

const Map: React.FC = () => {
  const [location, setLocation] = useState<LocationCoordinates | null>(null);

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.error('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <>
          <AppText>Latitude: {location.latitude}</AppText>
          <AppText>Longitude: {location.longitude}</AppText>
        </>
      ) : (
        <AppText>Fetching location...</AppText>
      )}
      <AppButton title="Refresh Location" onPress={getCurrentLocation} />
    </View>
  );
};

export default Map;
