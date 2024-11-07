import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import { getOutillages } from '../services/api'; // Appel au service API
import axios from 'axios';

const OutillagesScreen = () => {

  const [outillages, setOutillages] = useState({});
  const [nom, setNom] = useState(outillages.nom || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [updateNom, setUpdateNom] = useState('');
  //const [longevite, setLongevite] = useState(outillages.longevite || '');
  const [isEditing, setIsEditing] = useState(false)

//Récupération des parcelles
  useEffect(() => {
    getOutillages()
      .then(response => {
        console.log('Outillages reçu:', response.data);
        setOutillages(response.data); // Stocke l'objet utilisateur
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des outillages:", error);
      });
  }, []);

  const insertDataOutillages = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.post('http://192.168.1.26:3000/api/outillages', {
        id: 3,
        updateNom,
        longevite: 5,
        utilisateurs_id: 1
      });
  
      if (response.status === 200) {
        console.log("Succès", "Nom mis à jour avec succès");
      } else {
        console.log("Erreur", "Échec de la mise à jour");
      }
    } catch (error) {
        console.log("Erreur", "Échec de la mise à jour");
      console.error(error);
    }
  };

  const deleteDataOutillages = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.delete('http://192.168.1.26:3000/api/outillages', {
        data: {id: 1}
      });
  
      if (response.status === 200) {
        console.log("Succès", "Nom mis à jour avec succès");
      } else {
        console.log("Erreur", "Échec de la mise à jour");
      }
    } catch (error) {
        console.log("Erreur", "Échec de la mise à jour");
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Outillages</Text>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.champSaisi}>
        <TextInput placeholder={String(outillages.nom || "Nom")} value={nom} onChangeText={setNom} style={styles.textInput}/>
        <Pressable onPress={deleteDataOutillages}>
          <Image
            source={require('../assets/Supprimer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      {isEditing && (
      <View style={styles.confirmationAnnulation}>
        <TextInput placeholder={String(outillages.nom || "Nom")} value={updateNom} onChangeText={setUpdateNom} style={styles.textInput}/>
        <View style={styles.groupButton}>
          <Pressable onPress={insertDataOutillages}>
            <Image
              source={require('../assets/Confirmer.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable onPress={() => setIsEditing(false)}>
            <Image
              source={require('../assets/Annuler.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      )}
    </ScrollView>
  );
};

export default OutillagesScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  champSaisi: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 50,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',      // Centrer l'icône et le texte verticalement
  },
  confirmationAnnulation: {
    flexWrap: 'wrap',
    width: 350,
    height: 110,
    borderWidth: 2,
    borderRadius: 18,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupButton: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: 350,
  },
})