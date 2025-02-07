import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation si nécessaire
import { getUtilisateurs } from '../../services/api'; // Appel au service API
import { getJardins } from '../../services/api'; // Appel au service API
import { useUser } from '../../context/UserContext';

const HomeScreen = () => {
  const navigation = useNavigation(); // Hook pour accéder à l'objet navigation
  const [utilisateurs, setUtilisateurs] = useState({});
  const [Jardins, setJardins] = useState({});
  const { user } = useUser();  // Accéder à l'état utilisateur depuis le contexte
  console.log(user.id);
  

useEffect(() => {
  getUtilisateurs(user.id)
    .then(response => {
      console.log('Utilisateur reçu:', response.data);
      //setUtilisateurs(response.data); // Stocke l'objet utilisateur
      const utilisateurs = response.data;
        setUtilisateurs(utilisateurs);
        //setNom(utilisateurs.nom || '');
        //setPrenom(utilisateurs.prenom || '');
        //setAge(utilisateurs.age || '');
        //setPays(utilisateurs.pays || '');
        //setVille(utilisateurs.ville || '');
        //setCodePostal(utilisateurs.code_postal || '');
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    });
}, [user.id]);

useEffect(() => {
  getJardins(user.id)
    .then(response => {
      console.log('Jardins reçu:', response.data);
      //setJardins(response.data);
      const Jardins = response.data;
        setJardins(Jardins);
        //setNumero(Jardins.numero || '');
        //setSuperficie(Jardins.superficie || '');
        //setNombre_Parcelles(Jardins.nombre_parcelles || '');
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des jardins:", error);
    });
}, [user.id]);

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Bienvenu {/*{message ? message : 'Chargement...'}*/} {utilisateurs.prenom}</Text>
        <Pressable onPress={() => navigation.navigate('ProfilScreen')}>
          <Image
            source={require('../../assets/Profil.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.listJardin}>
        <Text>Jardin {Jardins.numero}</Text>
        <Text>Superficie {Jardins.superficie}</Text>
        <Text>Nombre de parcelles {Jardins.nombre_parcelles}</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('JardinsScreen')} style={styles.addButton}>
          <Text>Ajouter un jardin</Text>
          <Image
            source={require('../../assets/Ajouter.png')}
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