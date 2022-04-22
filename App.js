import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './src/navigation/AppStack'
import { Provider } from 'react-redux';
import store from './src/user_files/data/store'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <AppStack />
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Provider>
  );
}
