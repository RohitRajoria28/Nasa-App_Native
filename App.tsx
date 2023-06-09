import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import RandomAsteroid from './Components/RandomAsteroid';
import AsteroidData from './Components/AsteroidData';



const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}

        />
        <Stack.Screen name="RandomAsteroid" component={RandomAsteroid} />
        <Stack.Screen name="AsteroidData" component={AsteroidData} />

      </Stack.Navigator>
    </NavigationContainer>
  );

}


