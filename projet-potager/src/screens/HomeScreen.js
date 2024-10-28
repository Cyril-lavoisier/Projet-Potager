import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation si nécessaire
import { getUtilisateurs } from '../services/api'; // Appel au service API
import { getJardins } from '../services/api'; // Appel au service API

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook pour accéder à l'objet navigation
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [Jardins, setJardins] = useState([]);
  

useEffect(() => {
  getUtilisateurs()
    .then(response => {
      console.log('Utilisateur reçu:', response.data);
      setUtilisateurs(response.data);
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    });
}, []);

useEffect(() => {
  getJardins()
    .then(response => {
      console.log('Jardins reçu:', response.data);
      setJardins(response.data);
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des jardins:", error);
    });
}, []);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Bienvenu {/*{message ? message : 'Chargement...'}*/} {utilisateurs.length > 0 ? utilisateurs[0].nom : 'Chargement...'}</Text>
        <Pressable onPress={() => navigation.navigate('Profil')}>
          <Image
            source={require('../assets/Profil.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.listJardin}>
        <Text>Jardin {Jardins.length > 0 ? Jardins[0].numero : 'Chargement...'}</Text>
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

//const [message, setMessage] = useState('');
//const [utilisateurs, setUtilisateur] = useState([]); // Ajoute un état pour les utilisateurs
  
/*
  useEffect(() => {
    // Appel à l'API du backend
    axios.get('http://192.168.1.26:3000/api/hello') // Appelle le backend Express
      .then(response => {
        console.log('Réponse reçue:', response.data); // Log la réponse pour vérification
        setMessage(response.data.message);
    })
    .catch(error => {
      console.error('Erreur lors de l\'appel API:', error);
    });
  }, []);

  useEffect(() => {
    // Appel à l'API pour récupérer les utilisateurs
    axios.get('http://192.168.1.26:3000/api/utilisateurs')
    .then(response => {
      console.log('Utilisateur reçu:', response.data);
      setUtilisateur(response.data); // Si c'est un objet unique
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    });
  }, []);
*/