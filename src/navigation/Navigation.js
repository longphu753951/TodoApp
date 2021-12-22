import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import allScreens from './allScreens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
        {allScreens(Stack)}
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();
const Navigation = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" edgeWidth={0}>
          <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;