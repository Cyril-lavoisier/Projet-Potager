import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import loginUtilisateur from '../services/api';
import { useUser } from '../context/UserContext';

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useUser();

  const handleLogin = async () => {
    try {
      const utilisateur = await loginUtilisateur(email, password);
      if (utilisateur) {
        setUser(utilisateur);
        Alert.alert('Connexion réussie', `Bienvenue, ${utilisateur.email}`);
      }
    } catch (error) {
      Alert.alert('Erreur', 'Identifiants incorrects');
    }
  };

  return (
    <View>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} />
      <Text>Mot de passe</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

export default Connexion;
