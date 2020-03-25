import 'react-native-gesture-handler';
import * as React from 'react';

// modules

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// redux config

import {Provider} from 'react-redux';
import Store from './store';

// rotes

import Home from './routes/Home';
import Details from './routes/Details';

// config stack

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            ...TransitionPresets.SlideFromRightIOS,
            headerShown: false,
            gestureEnabled: true,
          }}>
          <Stack.Screen name="home" component={Home}></Stack.Screen>
          <Stack.Screen name="details" component={Details}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
// Desenvolvido por Hubert Ryan
