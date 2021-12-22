import React from 'react';
import TodoScreen from '../screens/TodoScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

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
        <Stack.Screen
          name="EditTaskScreen"
          component={EditTaskScreen}
          options={{
            headerShown: false,
          }}
        />
      </>
    );
  };
  
  export default allScreens;