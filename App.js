

import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';

import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <NativeBaseProvider>

      </NativeBaseProvider>
    </View>
  )
}

export default App;
