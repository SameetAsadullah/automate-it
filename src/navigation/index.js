import React from 'react';
import AppStack from './AppStack';
import {NavigationContainer} from '@react-navigation/native'

const Providers = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
  );
}

export default Providers;