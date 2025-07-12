import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export default Map;
