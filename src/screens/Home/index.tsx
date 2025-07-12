import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import mockData from '../../core/mockData.json';
import styles from './styles';
import { AppText, PetListItem } from '../../components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '../../navigation/MainStack/const';
import { SCREENS } from '../../navigation/routes';

const Home: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => <PetListItem pet={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
