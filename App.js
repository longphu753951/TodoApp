

import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import Navigation from './src/navigation/Navigation'
import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='dark-content' />
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </View>
  )
}

export default App;
