

import React from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import Navigation from './src/navigation/Navigation'
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/store';


const App = () => {
  console.log(store);
  return (
    <Provider store={store()}>
      <View style={{flex: 1}}>
        <StatusBar barStyle='dark-content' />
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </View>
    </Provider>
    
  )
}

export default App;
