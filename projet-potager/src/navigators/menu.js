import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator';
import PlantationsScreen from '../screens/PlantationsScreen';
import SemisScreen from '../screens/SemisScreen';
import ConsommablesScreen from '../screens/ConsommablesScreen';
import OutillagesScreen from '../screens/OutillagesScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import JardinsScreen from '../screens/JardinsScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window'); // Obtenir la largeur de l'écran

export default function Menu() {
    return (
    <View style={{ flex: 1 }}>
    <View style={styles.bandeau}/>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let Icon;
            
            if (route.name === 'HomeStackNavigator') {
              Icon = require('../assets/Home.png');
            }

            if (route.name === 'Plantations') {
              Icon = require('../assets/Plantations.png');
            }

            if (route.name === 'Semis') {
              Icon = require('../assets/Semis.png');
            }

            if (route.name === 'Consommables') {
              Icon = require('../assets/Consommables.png');
            }

            if (route.name === 'Outillages') {
              Icon = require('../assets/Outillages.png');
            }

            // You can return any component that you like here!
            return (
              <View style={{ flexDirection: 'row' }}>
                <Image
                  source={Icon}
                  style={{ width: 40, height: 40 }} // Modifier la taille selon vos besoins
                  //resizeMode="contain" // Ajuster l'image selon les besoins
                />
              </View>
            );
          },
          headerShown: false,
        })}
      >
          <Tab.Screen styles={styles.button} name="HomeStackNavigator" component={HomeStackNavigator} options={{title: ''}}/>
          <Tab.Screen styles={styles.button} name="Plantations" component={PlantationsScreen} options={{title: ''}}/>
          <Tab.Screen styles={styles.button} name="Semis" component={SemisScreen} options={{title: ''}}/>
          <Tab.Screen styles={styles.button} name="Consommables" component={ConsommablesScreen} options={{title: ''}}/>
          <Tab.Screen styles={styles.button} name="Outillages" component={OutillagesScreen} options={{title: ''}}/>
          <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarButton: () => null }}/>
          <Tab.Screen name="ProfilScreen" component={ProfilScreen} options={{ tabBarButton: () => null }}/>
          <Tab.Screen name="JardinsScreen" component={JardinsScreen} options={{ tabBarButton: () => null }}/>
        </Tab.Navigator>
    </NavigationContainer>
    <View style={styles.bandeau}/>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    bandeau: {
      width: width, // Prendre toute la largeur de l'écran
      height: 40,   // Hauteur du bandeau
      backgroundColor: '#438c6b', // Couleur verte
    }
  })