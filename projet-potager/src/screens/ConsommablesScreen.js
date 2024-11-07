import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet } from 'react-native';
import { getConsommables } from '../services/api'; // Appel au service API
import axios from 'axios';

const ConsommablesScreen = () => {

  const [consommables, setConsommables] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [nom, setNom] = useState(consommables.nom || '');
  const [type, setType] = useState(consommables.type || '');
  const [fournisseur, setFournisseur] = useState(consommables.fournisseur || '');
  const [prix, setPrix] = useState(consommables.prix || '');
  const [quantite, setQuantite] = useState(consommables.quantite || '');
  const [updateNom, setUpdateNom] = useState('');
  const [updateType, setUpdateType] = useState('');
  const [updateFournisseur, setUpdateFournisseur] = useState('');
  const [updatePrix, setUpdatePrix] = useState('');
  const [updateQuantite, setUpdateQuantite] = useState('');

  //Récupération des consommables
  useEffect(() => {
    getConsommables()
      .then(response => {
        console.log('Consommables reçu:', response.data);
        setConsommables(response.data); // Stocke l'objet utilisateur
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des consommables:", error);
      });
  }, []);

  const insertDataConsommables = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.post('http://192.168.1.26:3000/api/consommables', {
        id: 4,
        updateNom,
        updateType,
        updateFournisseur,
        updatePrix,
        updateQuantite,
        utilisateurs_id : 2,
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

  const updateDataConsommables = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.put('http://192.168.1.26:3000/api/consommables', {
        id: 4,
        nom,
        type,
        fournisseur,
        prix,
        quantite,
        utilisateur_id : 2,
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

  const deleteDataConsommables = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.delete('http://192.168.1.26:3000/api/consommables', {
        data: {id: 3}
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
        <Text>Consommables</Text>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.champSaisi}>
        <TextInput placeholder={String(consommables.nom || "Nom")} value={nom} onChangeText={setNom} style={styles.textInput}/>
        <TextInput placeholder={String(consommables.type || "Type")} value={type} onChangeText={setType} style={styles.textInput}/>
        <TextInput placeholder={String(consommables.fournisseur || "Fournisseur")} value={fournisseur} onChangeText={setFournisseur} style={styles.textInput}/>
        <TextInput placeholder={String(consommables.prix || "Prix")} value={prix} onChangeText={setPrix} style={styles.textInput}/>
        <TextInput placeholder={String(consommables.quantite || "Quantité")} value={quantite} onChangeText={setQuantite} style={styles.textInput}/>
        <View style={styles.champSaisiGroupButton}>
          <Pressable onPress={deleteDataConsommables}>
            <Image
              source={require('../assets/Supprimer.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable onPress={updateDataConsommables}>
            <Image
              source={require('../assets/Modifier.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      {isEditing && (
      <View style={styles.confirmationAnnulation}>
        <TextInput placeholder="Nom" value={updateNom} onChangeText={setUpdateNom} style={styles.textInput}/>
        <TextInput placeholder="Type" value={updateType} onChangeText={setUpdateType} style={styles.textInput}/>
        <TextInput placeholder="Fournisseur" value={updateFournisseur} onChangeText={setUpdateFournisseur} style={styles.textInput}/>
        <TextInput placeholder="Prix" value={updatePrix} onChangeText={setUpdatePrix} style={styles.textInput}/>
        <TextInput placeholder="Quantité" value={updateQuantite} onChangeText={setUpdateQuantite} style={styles.textInput}/>
        <View style={styles.groupButton}>
          <Pressable onPress={insertDataConsommables}>
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

export default ConsommablesScreen;

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