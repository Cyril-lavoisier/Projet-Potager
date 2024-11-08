import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../screens/UserContext';
import { useNavigation } from '@react-navigation/native';
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
      />

      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Se connecter" onPress={handleLogin} />
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
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});