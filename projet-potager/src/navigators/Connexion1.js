import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../context/UserContext';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from '../../controllers/AuthController';
import axios from 'axios';

const LoginForm = () => {
  const { setUser } = useUser();  // Accéder à la fonction setUser du Context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Utiliser la navigation

  const handleLogin = () => {
    // Vérifiez que les champs ne sont pas vides
    if (!email || !password) {
      console.log('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // Appel API vers loginUtilisateur avec Axios
    axios.post('http://192.168.1.26:3000/api/connexion', {
      email: email,
      password: password,
    })
    .then(async (response) => {
      console.log('Connexion réussie', response.data);
      const { utilisateur } = response.data;

      // Stocker l'ID utilisateur dans AsyncStorage
      await AsyncStorage.setItem('userId', utilisateur.id.toString());

      // Mettre à jour le contexte utilisateur
      setUser({ id: utilisateur.id, email: utilisateur.email });
      // Rediriger vers la page ProfilScreen
      navigation.navigate('HomeScreen');
    })
    .catch(error => {
      if (error.response) {
        console.error('Erreur de connexion :', error.response.data.error);
      } else if (error.request) {
        console.error('Erreur de réseau ou serveur injoignable');
      } else {
        console.error('Erreur :', error.message);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Connexion</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
        testID="email-input" 
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        testID="password-input"
      />

      <Pressable style={styles.button} onPress={handleLogin} testID="connexion-button">
        <Text style={styles.buttonText}>Se connecter</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#438c6b',
    backgroundColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#438c6b', // Couleur de fond
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff', // Couleur du texte
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});