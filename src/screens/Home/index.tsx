import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import mockData from '../../core/mockData.json';
import styles from './styles';
import { AppText } from '../../components';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={mockData}
        renderItem={({ item }) => (
          <TouchableOpacity
            // onPress={() => navigation.navigate('Details', { pet: item })}
            style={{ padding: 15, borderBottomWidth: 1 }}
          >
            <AppText>
              {item.name} - {item.type}
            </AppText>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Home;
