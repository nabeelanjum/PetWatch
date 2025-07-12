import React from 'react';
import { FlatList, View } from 'react-native';
import mockData from '../../core/mockData.json';
import styles from './styles';
import { PetListItem } from '../../components';
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
        renderItem={({ item }) => (
          <PetListItem
            pet={item}
            onPress={() =>
              navigation.navigate(SCREENS.PET_DETAILS, { pet: item })
            }
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

export default Home;
