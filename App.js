import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadScreen from './src/screens/LoadScreen';
import LogIn from "./src/screens/LogIn"
import HomePage from "./src/screens/HomePage"
import SignUp from "./src/screens/SignUp"
import MicrophoneInput from './src/screens/MicrophoneInput';
import YourAppliance from './src/screens/YourAppliance';
import AcRemote from './src/screens/AcRemote';
import TvRemote from './src/screens/TvRemote';
import MusicControls from './src/screens/MusicControls';
import AddAppliance from './src/screens/AddAppliance';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="LoadScreen" component={LoadScreen} />
      <Stack.Screen name="LogIn" component={LogIn} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MicrophoneInput" component={MicrophoneInput} />
      <Stack.Screen name="YourAppliance" component={YourAppliance} />
      <Stack.Screen name="AcRemote" component={AcRemote} />
      <Stack.Screen name="TvRemote" component={TvRemote} />
      <Stack.Screen name="MusicControls" component={MusicControls} />
      <Stack.Screen name="AddAppliance" component={AddAppliance} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
