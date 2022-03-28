import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './src/navigation/AppStack'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <AppStack />
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
