import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const ConsommablesScreen = () => {
  const [consommables, setConsommables] = useState([]);  // Liste principale des consommables
  const [nom, setNom] = useState(consommables.nom || '');
  const [type, setType] = useState(consommables.type || '');
  const [fournisseur, setFournisseur] = useState(consommables.fournisseur || '');
  const [prix, setPrix] = useState(consommables.prix || '');
  const [quantite, setQuantite] = useState(consommables.quantite || '');
  const [utilisateurs_id, setUtilisateurs_id] = useState(consommables.utilisateurs_id || '');
  //Initialisation de l'edition des champs sur false
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Récupérez les consommables depuis l'API
    fetchConsommables();
  }, []);

  //Récupération des consommables
  const fetchConsommables = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/consommables');
      setConsommables(
        response.data.map(item => ({
          ...item,
        }))
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des consommables:", error);
    }
  };

  //CRUD des donnée
  const insertDataConsommables = async () => {
    try {
      // Assurez-vous que les valeurs sont définies et affichez-les pour vérification
      console.log("Valeurs insérées :", { nom, type, fournisseur, prix, quantite, utilisateurs_id });
      const response = await axios.post('http://192.168.1.26:3000/api/consommables', {
        nom,
        type,
        fournisseur,
        prix,
        quantite,
        utilisateurs_id: 1
      });
  
      if (response.status === 200) {
        console.log("Succès", "Consommables insérée avec succès");
        fetchConsommables();
      } else {
        console.log("Erreur", "Échec de l'insertion");
      }
    } catch (error) {
      console.log("Erreur", "Échec de l'insertion");
      console.error(error);
    }
  };

  const updateDataConsommables = async (consommables) => {
    try {
      await axios.put(`http://192.168.1.26:3000/api/consommables`, { ...consommables});
      console.log("Mise à jour réussie pour l'ID:", consommables.id);
      fetchConsommables(); // Actualise la liste des consommables après mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la consommables:", error);
    }
  };

  const deleteDataConsommables = async (id) => {
    try {
      await axios.delete('http://192.168.1.26:3000/api/consommables', {
        data: { id: id }, // Passez l'ID dans le corps de la requête
      });
      setConsommables(consommables.filter((item) => item.id !== id));
      fetchConsommables();
    } catch (error) {
      console.error("Erreur lors de la suppression de la consommable:", error);
    }
  };

  // Met à jour l'état principal avec formatage uniquement si la date est complète
  const handleUpdateConsommable = (id, field, value) => {
    setConsommables((prevConsommables) =>
      prevConsommables.map((consommables) =>
        consommables.id === id ? { ...consommables, [field]: value } : consommables
      )
    );
  };

  const renderConsommablesItem = ({ item }) => (
    <View style={styles.champSaisi}>
      <Text>ID: {item.id}</Text>
      <TextInput
        placeholder="Nom"
        value={item.nom?.toString()}
        onChangeText={(value) => handleUpdateConsommable(item.id, 'nom', value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Type"
        value={item.type?.toString()}
        onChangeText={(value) => handleUpdateConsommable(item.id, 'type', value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Fournisseur"
        value={item.fournisseur?.toString()}
        onChangeText={(value) => handleUpdateConsommable(item.id, 'fournisseur', value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Prix"
        value={item.prix?.toString()}
        onChangeText={(value) => handleUpdateConsommable(item.id, 'prix', value)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Quantite"
        value={item.quantite?.toString()}
        onChangeText={(value) => handleUpdateConsommable(item.id, 'quantite', value)}
        style={styles.textInput}
      />
      <View style={styles.champSaisiGroupButton}>
        {/* Bouton de suppression */}
        <Pressable onPress={() => deleteDataConsommables(item.id)}>
          <Image source={require('../assets/Supprimer.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
        {/* Bouton de mise à jour */}
        <Pressable onPress={() => updateDataConsommables(item)}>
          <Image source={require('../assets/Modifier.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
      </View>
    </View>
  );

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
      <FlatList
        data={consommables}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderConsommablesItem}
        contentContainerStyle={styles.mainContainer}
      />
      {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
      <View style={styles.champSaisi}>
        <TextInput placeholder="Nom" value={nom} onChangeText={setNom} style={styles.textInput}/>
        <TextInput placeholder="Type" value={type} onChangeText={setType} style={styles.textInput}/>
        <TextInput placeholder="Fournisseur" value={fournisseur} onChangeText={setFournisseur} style={styles.textInput}/>
        <TextInput placeholder="Prix" value={prix} onChangeText={setPrix} style={styles.textInput}/>
        <TextInput placeholder="Quantité" value={quantite} onChangeText={setQuantite} style={styles.textInput}/>
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