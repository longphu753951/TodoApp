import React from 'react';
import TodoScreen from '../screens/TodoScreen';

const allScreens = (Stack) => {
    return (
      <>
        <Stack.Screen
          name="TodoScreen"
          component={TodoScreen}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };
  
  export default allScreens;