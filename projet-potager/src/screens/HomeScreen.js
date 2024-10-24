import React, { Fragment } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation si nécessaire
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook pour accéder à l'objet navigation
  
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
          <Text>Bienvenu Utilisateur</Text>
          <Pressable onPress={() => navigation.navigate('Profil')}>
            <Image
              source={require('../assets/Profil.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View style={styles.listJardin}>
          <Text>Jardin 1</Text>
          <Text>Superficie X</Text>
          <Text>Nombre de parcelles X</Text>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('AjoutParcelles')} style={styles.addButton}>
            <Text>Ajouter un jardin</Text>
            <Image
              source={require('../assets/Ajouter.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </ScrollView>
  );
};

{/** Quand on veut ajouter un jardin, il faut automatiquement créer une parcelles, même si le jardin ne contient qu'une seule parcelle */}
export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  listJardin: {
    width: 350,
    height: 110,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 18,
  },
  button: {     // Placer le texte et l'icône sur la même ligne
    width: 50,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',      // Centrer l'icône et le texte verticalement
  },
  addButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 110,
    borderWidth: 2,
    borderRadius: 18,
    backgroundColor: 'white',
  }
})