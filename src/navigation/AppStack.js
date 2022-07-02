import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import LoadScreen from '../screens/LoadScreen';
import HomePage from "../screens/HomePage"
import MicrophoneInput from '../screens/MicrophoneInput';
import YourAppliance from '../screens/YourAppliance';
import AcRemote from '../screens/AcRemote';
import TvRemote from '../screens/TvRemote';
import MusicControls from '../screens/MusicControls';
import AddAppliance from '../screens/AddAppliance';
import AcModels from '../screens/AcModels';
import SetChannels from '../screens/SetChannels';
import SetAction from '../screens/SetAction';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
      <Stack.Navigator
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Loading" component={LoadScreen} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="MicrophoneInput" component={MicrophoneInput} />
        <Stack.Screen name="YourAppliance" component={YourAppliance} />
        <Stack.Screen name="AcRemote" component={AcRemote} />
        <Stack.Screen name="TvRemote" component={TvRemote} />
        <Stack.Screen name="MusicControls" component={MusicControls} />
        <Stack.Screen name="AddAppliance" component={AddAppliance} />
        <Stack.Screen name="AcModels" component={AcModels} />
        <Stack.Screen name="SetChannels" component={SetChannels} />
        <Stack.Screen name="SetAction" component={SetAction} />
      </Stack.Navigator>
  );
}
