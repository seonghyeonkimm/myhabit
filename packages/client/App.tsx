import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'react-native-elements';

import RootStackNavigator from './navigation/RootStackNavigator';

const theme = {
  Button: {
    raised: true,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootStackNavigator />
    </ThemeProvider>
  );
}
