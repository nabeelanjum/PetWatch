import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../routes';
import { MainStackParamList } from './const';
import { Home, PetDetails } from '../../screens';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.HOME} component={Home} />
      <Stack.Screen name={SCREENS.PET_DETAILS} component={PetDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
