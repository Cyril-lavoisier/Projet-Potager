import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import AjoutParcellesScreen from '../screens/AjoutParcellesScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, title: ''}} />
      <Stack.Screen name="Profil" component={ProfilScreen} options={{headerShown: false, title: ''}} />
      <Stack.Screen name="AjoutParcelles" component={AjoutParcellesScreen} options={{headerShown: false, title: ''}} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;