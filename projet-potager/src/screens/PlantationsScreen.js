import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment-timezone';
import axios from 'axios';

const PlantationsScreen = () => {
  const [plantations, setPlantations] = useState([]);  // Liste principale des plantations
  const [parcelles, setParcelles] = useState([]);
  const [produits, setProduits] = useState([]);
  const [varietes, setVarietes] = useState([]);
  const [Variete_Produits_id, setVariete_Produits_id] = useState(plantations.Variete_Produits_id || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [Variete_id, setVariete_id] = useState(plantations.Variete_id || '');
  //const [date, setDate] = useState(plantations.date || '');
  const [quantite, setQuantite] = useState(plantations.quantite || '');
  //Initialisation de l'edition des champs sur false
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    // Récupérez les plantations depuis l'API
    fetchPlantations();
    fetchParcelles();
    fetchProduits();
    fetchVarietes();
  }, []);

  //Récupération des plantations, des parcelles, des produits et des variete
  const fetchPlantations = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/plantation');
      setPlantations(
        response.data.map(item => ({
          ...item,
          tempDate: item.date ? moment(item.date).format('YYYY-MM-DD') : '', // Initialise un champ tempDate pour chaque plantation
        }))
      );
    } catch (error) {
      console.error("Erreur lors de la récupération des plantations:", error);
    }
  };

  const fetchParcelles = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/parcelles');
      setParcelles(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des parcelles:", error);
    }
  };

  const fetchProduits = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/produits');      
      setProduits(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits:", error);
    }
  };

  const fetchVarietes = async () => {
    try {
      const response = await axios.get('http://192.168.1.26:3000/api/variete');
      setVarietes(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des variétés:", error);
    }
  };

  //CRUD des donnée
  const insertDataPlantation = async () => {
    try {
      // Assurez-vous que les valeurs sont définies et affichez-les pour vérification
      console.log("Valeurs insérées :", { quantite, Variete_id, Variete_Produits_id, date });
      // Appelez votre API d'insertion
      const formattedDate = moment.tz(date, 'Europe/Paris').format('YYYY-MM-DD')
      const response = await axios.post('http://192.168.1.26:3000/api/plantation', {
        quantite,
        Variete_id,
        Variete_Produits_id,
        date: formattedDate,
      });
  
      if (response.status === 200) {
        console.log("Succès", "Plantation insérée avec succès");
        fetchPlantations();
      } else {
        console.log("Erreur", "Échec de l'insertion");
      }
    } catch (error) {
      console.log("Erreur", "Échec de l'insertion");
      console.error(error);
    }
  };

  const updateDataPlantation = async (plantation) => {
    try {
      formattedDate = plantation.date ? moment.tz(plantation.date, 'Europe/Paris').format('YYYY-MM-DD') : ''
      await axios.put(`http://192.168.1.26:3000/api/plantation/`, { ...plantation, date: formattedDate });
      console.log("Mise à jour réussie pour l'ID:", plantation.id);
      fetchPlantations(); // Actualise la liste des plantations après mise à jour
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la plantation:", error);
    }
  };

  const deleteDataPlantation = async (id) => {
    try {
      await axios.delete('http://192.168.1.26:3000/api/plantation/', {
        data: { id: id }, // Passez l'ID dans le corps de la requête
      });
      setPlantations(plantations.filter((item) => item.id !== id));
      fetchPlantations();
    } catch (error) {
      console.error("Erreur lors de la suppression de la plantation:", error);
    }
  };

  //Fonction de formatage lié à la date avec moment.tz
  // Fonction pour mettre à jour `tempDate` pour chaque plantation
  const handleTempDateChange = (id, value) => {
    setPlantations((prevPlantations) =>
      prevPlantations.map((item) =>
        item.id === id ? { ...item, tempDate: value } : item
      )
    );
  };

  // Sauvegarde la date lorsqu’on quitte le champ
  const handleDateSave = (id) => {
    setPlantations((prevPlantations) =>
      prevPlantations.map((item) => {
        if (item.id === id) {
          const isDateComplete = /^\d{4}-\d{2}-\d{2}$/.test(item.tempDate);
          const formattedDate = isDateComplete
            ? moment(item.tempDate).tz('Europe/Paris').format('YYYY-MM-DD')
            : '';
          return { ...item, date: formattedDate, tempDate: formattedDate };
        }
        return item;
      })
    );
  };

  // Met à jour l'état principal avec formatage uniquement si la date est complète
  const handleUpdatePlantation = (id, field, value) => {
    setPlantations((prevPlantations) =>
      prevPlantations.map((plantation) =>
        plantation.id === id ? { ...plantation, [field]: value } : plantation
      )
    );
  };

  const renderPlantationItem = ({ item }) => (
    <View style={styles.champSaisi}>
      <Text>ID: {item.id}</Text>

      {/* Liste déroulante pour les produits */}
      <Picker
        selectedValue={item.Variete_Produits_id}
        onValueChange={(value) => handleUpdatePlantation(item.id, 'Variete_Produits_id', value)}
        style={styles.textInput}
      >
        <Picker.Item label={item.Produit_nom} value="" />
        {produits.map((produit) => (
          <Picker.Item key={produit.id} label={produit.nom} value={produit.id} />
        ))}
      </Picker>

      {/* Liste déroulante pour les variétés */}
      <Picker
        selectedValue={item.Variete_id}
        onValueChange={(value) => handleUpdatePlantation(item.id, 'Variete_id', value)}
        style={styles.textInput}
      >
        <Picker.Item label={item.Variete_nom} value="" />
        {varietes.map((variete) => (
          <Picker.Item key={variete.id} label={variete.nom} value={variete.id} />
        ))}
      </Picker>

      <TextInput
        placeholder="Date de plantation"
        value={item.tempDate} // Utilise la date temporaire pour cet item
        onChangeText={(value) => handleTempDateChange(item.id, value)} // Met à jour uniquement pour cet item
        onBlur={() => handleDateSave(item.id)} // Formate et sauvegarde uniquement à la perte de focus pour cet item
        style={styles.textInput}
      />
      <TextInput
        placeholder="Quantité"
        value={item.quantite?.toString()}
        onChangeText={(value) => handleUpdatePlantation(item.id, 'quantite', value)}
        style={styles.textInput}
      />

      <View style={styles.champSaisiGroupButton}>
        {/* Bouton de suppression */}
        <Pressable onPress={() => deleteDataPlantation(item.id)}>
          <Image source={require('../assets/Supprimer.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
        {/* Bouton de mise à jour */}
        <Pressable onPress={() => updateDataPlantation(item)}>
          <Image source={require('../assets/Modifier.png')} style={styles.button} resizeMode="contain" />
        </Pressable>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Plantation</Text>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <Text>Jardin {parcelles.Jardins_id}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Superficie {parcelles.superficie}</Text>
        <Text>Parcelles numero {parcelles.numero}</Text>
      </View>
      <FlatList
        data={plantations}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPlantationItem}
        contentContainerStyle={styles.mainContainer}
      />
      {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
      <View style={styles.champSaisi}>
        {/* Liste déroulante pour les produits */}
        <Picker
          selectedValue={Variete_Produits_id}
          onValueChange={(value) => setVariete_Produits_id(value)}
          style={styles.textInput}
        >
          <Picker.Item label="Sélectionnez un produit" value="" />
          {produits.map((produit) => (
            <Picker.Item key={produit.id} label={produit.nom} value={produit.id} />
          ))}
        </Picker>

        {/* Liste déroulante pour les variétés */}
        <Picker
          selectedValue={Variete_id}
          onValueChange={(value) => setVariete_id(value)}
          style={styles.textInput}
        >
          <Picker.Item label="Sélectionnez une variété" value="" />
          {varietes.map((variete) => (
            <Picker.Item key={variete.id} label={variete.nom} value={variete.id} />
          ))}
        </Picker>
        <TextInput placeholder="Date de plantation" value={date} onChangeText={setDate} style={styles.textInput}/>
        <TextInput placeholder="Quantité" value={quantite} onChangeText={setQuantite} style={styles.textInput}/>
        <View style={styles.groupButton}>
          <Pressable onPress={insertDataPlantation}>
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

export default PlantationsScreen;

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