import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../routes';
import { MainStackParamList } from './const';
import { Home } from '../../screens';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;
