import React from 'react';
import TodoScreen from '../screens/TodoScreen';
import AddTaskScreen from '../screens/AddTaskScreen';

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
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };
  
  export default allScreens;