import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import images from '../../../assets/images';
import styles from './styles';
import {
  StackHeaderRightProps,
  StackNavigationProp,
} from '@react-navigation/stack';
import { MainStackParamList } from '../../../navigation/MainStack/const';
import { SCREENS } from '../../../navigation/routes';

const HeaderLocationButton: React.FC<StackHeaderRightProps> = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREENS.MAP)}
      style={styles.container}
    >
      <Image style={styles.image} source={images.mapLocation} />
    </TouchableOpacity>
  );
};

export default HeaderLocationButton;
