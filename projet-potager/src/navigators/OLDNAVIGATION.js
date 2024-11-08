//import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import HomeScreen from '../screens/HomeScreen';
//import ProfilScreen from '../screens/ProfilScreen';
//import JardinsScreen from '../screens/JardinsScreen';
//import { TextInput, Text, ScrollView, StyleSheet, Pressable } from 'react-native-web';
import axios from 'axios';
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const Stack = createNativeStackNavigator();

//Initialisation des données
  const [utilisateurs, setUtilisateurs] = useState({});
  const [login, setLogin] = useState(utilisateurs.login || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [password, setPassword] = useState(utilisateurs.password || '');

useEffect(() => {
  // Récupérez les consommables depuis l'API
  fetchUtilisateurs();
}, []);

//Récupération des Utilisateurs
const fetchUtilisateurs = async () => {
  try {
    const response = await axios.get('http://192.168.1.26:3000/api/utilisateurs');
    setUtilisateurs(
      response.data.map(item => ({
        ...item,
      }))
    );
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
  }
};

const HomeStackNavigator = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
        <Text>Nom d'utilisateur</Text>
        <TextInput placeholder="Nom d'utilisateur" value="Login" onChangeText="Login" style={styles.textInput}/>
        <Text>Mot de passe</Text>
        <TextInput placeholder="Mot de passe" value="Password" onChangeText="Password" style={styles.textInput}/>
        <Pressable onPress={() => {updateDataCodePostal(); setIsEditingCodePostal(!isEditingCodePostal)}} style={styles.button}>
          <Text>Connexion</Text>
        </Pressable>
      {/*
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, title: ''}} />
        <Stack.Screen name="Profil" component={ProfilScreen} options={{headerShown: false, title: ''}} />
        <Stack.Screen name="Jardins" component={JardinsScreen} options={{headerShown: false, title: ''}} />
      </Stack.Navigator>
      */}
    </ScrollView>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInput: {
    width: 310,
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    width: 100,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: 'white',
    alignItems: 'center',      // Centrer l'icône et le texte verticalement
  },
})