import React from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView>
      <View></View>
    </GestureHandlerRootView>
  );
};

export default App;
