import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import PlantationsScreen from './src/screens/PlantationsScreen';
import SemisScreen from './src/screens/SemisScreen';
import ConsommablesScreen from './src/screens/ConsommablesScreen';
import OutillagesScreen from './src/screens/OutillagesScreen';
//import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  }
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <Stack.Screen styles={styles.button} name="Home" component={HomeScreen} />
          ),
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Plantations" component={PlantationsScreen} />
        <Stack.Screen name="Semis" component={SemisScreen} />
        <Stack.Screen name="Consommables" component={ConsommablesScreen} />
        <Stack.Screen name="Outillages" component={OutillagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}