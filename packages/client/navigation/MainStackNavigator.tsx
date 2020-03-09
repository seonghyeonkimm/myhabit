import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screen/Home';

const MainStack = createStackNavigator();

export default function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
        }}
      />
    </MainStack.Navigator>
  );
}