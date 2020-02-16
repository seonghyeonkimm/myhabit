import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, ThemeProvider, Icon } from 'react-native-elements';


function HomeScreen({ navigation }) {
  const [count ,setCount] = useState(0);
  navigation.setOptions({
    headerRight: () => (
      <Button onPress={() => setCount(c => c + 1)} title="Update count" />
    ),
  });

  // const isFocused = useIsFocused();
  // useFocusEffect(() => {
  //   // focus comes here

  //   return () => {
  //     // blur comes here
  //   }
  // });

  return (
    <View style={styles.container}>
      <Icon name='rowing' />
      <Icon name='g-translate' color='#00aced' />
      <Text>count: {count}</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(
          'Details',
          { itemId: 86, otherParam: 'anything you want here' },
        )}
      />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
}

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function DetailsScreen({ navigation, route }) {
  const { itemId, otherParam } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>ItemId: {itemId}</Text>
      <Text>otherParams: {otherParam}</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

// NOTE: stack, drawer, tab navigator같은 것들이 존재한다.
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
// function FeedTab() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Feed Tab</Text>
//     </View>
//   );
// }

// function MessageTab() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Messages Tab</Text>
//     </View>
//   );
// }

// function TabScreen() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={FeedTab} />
//       <Tab.Screen name="Messages" component={MessageTab} />
//     </Tab.Navigator>
//   );
// }

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
        }}
      />
      <MainStack.Screen name="Details" component={DetailsScreen} options={{ title: '상세화면' }} />
    </MainStack.Navigator>
  );
}

const theme = {
  Button: {
    raised: true,
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <RootStack.Navigator mode="modal" initialRouteName="Main">
          <RootStack.Screen
            name="Main"
            component={MainStackScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen name="MyModal" component={ModalScreen} options={{ title: '모달' }} />
          {/* <Stack.Screen name="Tabs" component={TabScreen} options={{ title: '탭 화면' }} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
