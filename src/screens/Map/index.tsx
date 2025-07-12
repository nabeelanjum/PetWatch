import React, { useCallback, useEffect, useState } from 'react';
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

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <View style={styles.container}>
      <AppText style={styles.title}>📍 Your Current Location</AppText>

      <View style={styles.card}>
        {location ? (
          <>
            <View>
              <AppText>Latitude:</AppText>
              <AppText style={styles.value}>{location.latitude}</AppText>
            </View>

            <View>
              <AppText>Longitude:</AppText>
              <AppText style={styles.value}>{location.longitude}</AppText>
            </View>
          </>
        ) : (
          <AppText>Fetching location...</AppText>
        )}
      </View>

      <AppButton title="🔄 Refresh Location" onPress={getCurrentLocation} />
    </View>
  );
};

export default Map;
