import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS } from '../routes';
import { MainStackParamList } from './const';
import { Adopt, Home, Map, PetDetails } from '../../screens';
import { appStackOptions } from '../config';
import { HeaderLocationButton } from '../../components';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={appStackOptions}>
      <Stack.Screen
        name={SCREENS.HOME}
        options={{
          headerRight: props => <HeaderLocationButton {...props} />,
        }}
        component={Home}
      />
      <Stack.Screen name={SCREENS.PET_DETAILS} component={PetDetails} />
      <Stack.Screen name={SCREENS.ADOPT} component={Adopt} />
      <Stack.Screen name={SCREENS.MAP} component={Map} />
    </Stack.Navigator>
  );
};

export default MainStack;
