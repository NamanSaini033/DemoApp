// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './app/screens/FormScreen';
import ListScreen from './app/screens/ListScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" options={{
          headerTitle: 'Notes App', headerTitleAlign: 'center', headerStyle: {
            backgroundColor: 'red',              // Set the background color of the header
          },headerTintColor: 'white',           // Set the text color of the header
        
        }} component={ListScreen} />
        <Stack.Screen name="Form" options={{title:"Add Note"}} component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;