import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigation from './navigation';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <RootNavigation />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
