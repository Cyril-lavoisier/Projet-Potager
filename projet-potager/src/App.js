import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlantationsScreen from './screens/PlantationsScreen';
import SemisScreen from './screens/SemisScreen';
import ConsommablesScreen from './screens/ConsommablesScreen';
import OutillagesScreen from './screens/OutillagesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plantations" component={PlantationsScreen} />
        <Stack.Screen name="Semis" component={SemisScreen} />
        <Stack.Screen name="Consommables" component={ConsommablesScreen} />
        <Stack.Screen name="Outillages" component={OutillagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}