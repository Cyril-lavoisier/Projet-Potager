import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import { getSemis } from '../services/api'; // Appel au service API
import axios from 'axios';

const SemisScreen = () => {

  const [semis, setSemis] = useState({});
  const [Variete_Produits_id, setVariete_Produits_id] = useState(semis.Variete_Produits_id || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [Variete_id, setVariete_id] = useState(semis.Variete_id || '');
  const [quantite, setQuantite] = useState(semis.quantite || '');
  const [updateVariete_Produits_id, setUpdateVariete_Produits_id] = useState(''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [updateVariete_id, setUpdateVariete_id] = useState('');
  const [updateQuantite, setUpdateQuantite] = useState('');
  const [isEditing, setIsEditing] = useState(false)

//Récupération des plantations
useEffect(() => {
  getSemis()
    .then(response => {
      console.log('Semis reçu:', response.data);
      setSemis(response.data); // Stocke l'objet utilisateur
    })
    .catch(error => {
      console.error("Erreur lors de la récupération des semis:", error);
    });
}, []);

  const insertDataSemis = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.post('http://192.168.1.26:3000/api/semis', {
        id: 2,
        updateQuantite,
        updateVariete_id,
        updateVariete_Produits_id,
      });
  
      if (response.status === 200) {
        console.log("Succès", "Semis mis à jour avec succès");
      } else {
        console.log("Erreur", "Échec de la mise à jour");
      }
    } catch (error) {
        console.log("Erreur", "Échec de la mise à jour");
      console.error(error);
    }
  };

  const updateDataSemis = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.put('http://192.168.1.26:3000/api/semis', {
        id: 2,
        quantite,
        Variete_id,
        Variete_Produits_id,
      });
  
      if (response.status === 200) {
        console.log("Succès", "Semis mis à jour avec succès");
      } else {
        console.log("Erreur", "Échec de la mise à jour");
      }
    } catch (error) {
        console.log("Erreur", "Échec de la mise à jour");
      console.error(error);
    }
  };

  const deleteDataSemis = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.delete('http://192.168.1.26:3000/api/semis', {
        data: {id: 1}
      });
  
      if (response.status === 200) {
        console.log("Succès", "Semis mis à jour avec succès");
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
        <Text>Semis</Text>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.champSaisi}>
        <TextInput placeholder={semis.Produit_nom} value={Variete_Produits_id} onChangeText={setVariete_Produits_id} style={styles.textInput}/>
        <TextInput placeholder={semis.Variete_nom} value={Variete_id} onChangeText={setVariete_id} style={styles.textInput}/>
        <TextInput placeholder={semis.quantite} value={quantite} onChangeText={setQuantite} style={styles.textInput}/>
        <View style={styles.champSaisiGroupButton}>
          <Pressable onPress={deleteDataSemis}>
            <Image
              source={require('../assets/Supprimer.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable onPress={updateDataSemis}>
            <Image
              source={require('../assets/Modifier.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
      <View style={styles.confirmationAnnulation}>
        <TextInput placeholder="Produit" value={updateVariete_Produits_id} onChangeText={setUpdateVariete_Produits_id} style={styles.textInput}/>
        <TextInput placeholder="Variété" value={updateVariete_id} onChangeText={setUpdateVariete_id} style={styles.textInput}/>
        <TextInput placeholder="Quantité" value={updateQuantite} onChangeText={setUpdateQuantite} style={styles.textInput}/>
        <View style={styles.groupButton}>
          <Pressable onPress={insertDataSemis}>
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

export default SemisScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  champSaisi: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 350,
    borderWidth: 2,
    borderRadius: 18,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  textInput: {
    width: 310,
    height: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
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
    height: 350,
    borderWidth: 2,
    borderRadius: 18,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  groupButton: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: 350,
  },
  champSaisiGroupButton: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    width: 200,
  },
})