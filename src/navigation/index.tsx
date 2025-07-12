import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import theme from '../assets/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './MainStack';

const RootNavigation = () => {
  return (
    <NavigationContainer theme={theme.light}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default RootNavigation;
