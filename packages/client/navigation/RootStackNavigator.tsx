import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainStackNavigator from './MainStackNavigator';

import ModalScreen from '../screen/Modal';

const RootStack = createStackNavigator();

const theme = {
  Button: {
    raised: true,
  },
};

export default function RootStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode="modal" initialRouteName="Main">
        <RootStack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Modal" component={ModalScreen} options={{ title: '모달' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}