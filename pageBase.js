/*import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

// Simples composants pour chaque écran
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Home Screen</Text>
    </View>
  );
}

function PlantationScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Plantation Screen</Text>
    </View>
  );
}

function SemisScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Semis Screen</Text>
    </View>
  );
}

function ConsommablesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Consommables Screen</Text>
    </View>
  );
}

function OutillagesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text>Outillages Screen</Text>
    </View>
  );
}

// Styles pour les composants
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#438c6b', 
    height: 30, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: '100%', 
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  containerMenu: {
    backgroundColor: '#EBE7CE',
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  menuButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: 50, 
    height: 70,
  },
});

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  // Fonction pour rendre l'écran actuel
  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Plantation':
        return <PlantationScreen />;
      case 'Semis':
        return <SemisScreen />;
      case 'Consommables':
        return <ConsommablesScreen />;
      case 'Outillages':
        return <OutillagesScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Affichage de l'écran courant }
      {renderScreen()}

      <View style={styles.banner}></View>
      <View style={styles.body}>
        <Text>Test Body</Text>
      </View>
      <View style={styles.containerMenu}>
        <Pressable style={styles.menuButton} onPress={() => setCurrentScreen('Home')}>
          <Image source={require('../assets/Home.png')} style={styles.menuButton}/>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => setCurrentScreen('Plantation')}>
          <Image source={require('../assets/Plantation.png')} style={styles.menuButton}/>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => setCurrentScreen('Semis')}>
          <Image source={require('../assets/Semis.png')} style={styles.menuButton}/>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => setCurrentScreen('Consommables')}>
          <Image source={require('../assets/Consommables.png')} style={styles.menuButton}/>
        </Pressable>
        <Pressable style={styles.menuButton} onPress={() => setCurrentScreen('Outillages')}>
          <Image source={require('../assets/Outillages.png')} style={styles.menuButton}/>
        </Pressable>
      </View>
      <View style={styles.banner}></View>
    </View>
  );
}

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ goToPage }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>
      <Button title="Go to Details" onPress={() => goToPage('Details')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
*/