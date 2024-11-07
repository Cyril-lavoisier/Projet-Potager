import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './src/navigators/HomeStackNavigator';
import HomeScreen from './src/screens/HomeScreen';
import PlantationsScreen from './src/screens/PlantationsScreen';
import SemisScreen from './src/screens/SemisScreen';
import ConsommablesScreen from './src/screens/ConsommablesScreen';
import OutillagesScreen from './src/screens/OutillagesScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window'); // Obtenir la largeur de l'écran

export default function App() {
  return (
    <React.Fragment>
    <View style={{ flex: 1 }}>
    <View style={styles.bandeau}/>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            let Icon;
            
            if (route.name === 'HomeStackNavigator') {
              Icon = require('./src/assets/Home.png');
            }

            if (route.name === 'Plantations') {
              Icon = require('./src/assets/Plantations.png');
            }

            if (route.name === 'Semis') {
              Icon = require('./src/assets/Semis.png');
            }

            if (route.name === 'Consommables') {
              Icon = require('./src/assets/Consommables.png');
            }

            if (route.name === 'Outillages') {
              Icon = require('./src/assets/Outillages.png');
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
        </Tab.Navigator>
    </NavigationContainer>
    <View style={styles.bandeau}/>
    </View>
    </React.Fragment>
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
