import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Pressable, Image } from 'react-native';
import { getParcelles } from '../../services/api'; // Appel au service API
import { useUser } from '../../context/UserContext';
import axios from 'axios';

const AjouterScreen = () => {

  const [parcelles, setParcelles] = useState({});
  const [isEditing, setIsEditing] = useState(false)
  const [superficie, setSuperficie] = useState('');
  const { user } = useUser();  // Accéder à l'état utilisateur depuis le contexte
  console.log(user.id);

  useEffect(() => {
    getParcelles(user.id)
      .then(response => {
        console.log('Parcelles reçu:', response.data);
        //setParcelles(response.data); // Stocke l'objet utilisateur
        const data = response.data;
          setParcelles(data);
          setNumero(data.numero || '');
          setSuperficie(data.superficie || '');
          setJardins_id(data.Jardins_id || '');
          setJardins_Utilisateurs_id(data.Jardins_Utilisateurs_id || '');
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des parcelles:", error);
      });
  }, [user.id]);

  const insertDataParcelles = async () => {
    try {
      // Appelez ici votre API ou votre fonction de mise à jour avec axios
      const response = await axios.post('http://192.168.1.26:3000/api/parcelles', {
        numero: 2,
        superficie: superficie,
        Jardin_id: 1,
        Jardins_Utilisateurs_id: 1,
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
      <Text>Jardin {parcelles.Jardin_id}</Text>
      <View style={styles.listJardin}>
        <Text>Parcelles {parcelles.numero}</Text>
      </View>
      <View>
        <Pressable onPress={() => setIsEditing(true)} style={styles.addButton}>
          <Text>Ajouter une parcelles</Text>
          <Image
            source={require('../../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <View style={styles.confirmationAnnulation} onPress={() => setIsEditing(true)}>
          <TextInput placeholder='Superficie' value={superficie} onChangeText={setSuperficie} style={styles.textInput}/>
          <View style={styles.groupButton}>
            <Pressable onPress={insertDataParcelles}>
              <Image
                source={require('../../assets/Confirmer.png')}
                style={styles.button}
                resizeMode="contain"
              />
            </Pressable>
            <Pressable onPress={() => setIsEditing(false)}>
              <Image
                source={require('../../assets/Annuler.png')}
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

{/** Le bouton ajouter ouvre le cadre pour indiquer la superficie de la parcelle, le bouton confirmer envoi les donnée dans la bdd et le bouton annuler ferme la fenetre et
  annule la modification */}
export default AjouterScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flexWrap: 'wrap',
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
  button: {
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
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