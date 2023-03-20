import React from 'react';

import { createAppContainer } from 'react-navigation';
import { isAndroid } from ':global/constants';
import MainNavigator from './MainNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
