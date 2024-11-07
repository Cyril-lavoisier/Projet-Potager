import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet, FlatList} from 'react-native';
import axios from 'axios';

const OutillagesScreen = () => {
  const [outillages, setOutillages] = useState([]);  // Liste principale des outillages
  const [nom, setNom] = useState(outillages.nom || '');
  const [longevite, setLongevite] = useState(outillages.longevite || '');
  const [Utilisateurs_id, setUtilisateurs_id] = useState(outillages.Utilisateurs_id || '');
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Récupérez les outils depuis l'API
    fetchOutillages();
  }, []);

  //Récupération des outils
  const fetchOutillages = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/outillages');
      setOutillages(
        response.data.map(item => ({
          ...item,
        }))
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des outils:", error);
    }
  };

  //CRUD des donnée
  const insertDataOutillages = async () => {
    try {
      // Assurez-vous que les valeurs sont définies et affichez-les pour vérification
      console.log("Valeurs insérées :", { nom, longevite, Utilisateurs_id });
      // Appelez votre API d'insertion
      const response = await axios.post('http://192.168.1.26:3000/api/outillages', {
        nom, 
        longevite: 5, 
        Utilisateurs_id: 1
      });
  
      if (response.status === 200) {
        console.log("Succès", "Plantation insérée avec succès");
        fetchOutillages();
      } else {
        console.log("Erreur", "Échec de l'insertion");
      }
    } catch (error) {
      console.log("Erreur", "Échec de l'insertion");
      console.error(error);
    }
  };

  /*
  const updateDataOutillages = async (plantation) => {
    try {
      await axios.put(`http://192.168.1.26:3000/api/outillages/`, { ...outillages});
      console.log("Mise à jour réussie pour l'ID:", outillages.id);
      fetchOutillages(); // Actualise la liste des outillages après mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'outil:", error);
    }
  };
  */

  const deleteDataOutillages = async (id) => {
    try {
      await axios.delete('http://192.168.1.26:3000/api/outillages/', {
        data: { id: id }, // Passez l'ID dans le corps de la requête
      });
      setOutillages(outillages.filter((item) => item.id !== id));
      fetchOutillages();
    } catch (error) {
      console.error("Erreur lors de la suppression de la outillages:", error);
    }
  };

  // Met à jour l'état principal avec formatage uniquement si la date est complète
  const handleUpdateOutillages = (id, field, value) => {
    setOutillages((prevOutillages) =>
      prevOutillages.map((outillages) =>
        outillages.id === id ? { ...outillages, [field]: value } : outillages
      )
    );
  };

  const renderOutillagesItem = ({ item }) => (
    <View style={styles.champSaisi}>
      <Text>ID: {item.id}</Text>
      <TextInput
        placeholder="Nom de l'outil"
        value={item.nom?.toString()}
        onChangeText={(value) => handleUpdateOutillages(item.id, 'nom', value)}
        style={styles.textInput}
      />

      <View style={styles.champSaisiGroupButton}>
        {/* Bouton de suppression */}
        <Pressable onPress={() => deleteDataOutillages(item.id)}>
          <Image source={require('../assets/Supprimer.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
        {/* Bouton de mise à jour
        <Pressable onPress={() => updateDataOutillages(item)}>
          <Image source={require('../assets/Modifier.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
        */}
      </View>
    </View>
  );

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
      <FlatList
        data={outillages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOutillagesItem}
        contentContainerStyle={styles.mainContainer}
      />
      {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
      <View style={styles.champSaisi}>
        <TextInput placeholder="Nom de l'outil" value={nom} onChangeText={setNom} style={styles.textInput}/>
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