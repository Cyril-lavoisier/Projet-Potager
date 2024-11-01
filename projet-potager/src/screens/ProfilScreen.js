import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { getUtilisateurs } from '../services/api'; // Appel au service API
import axios from 'axios';

const ProfilScreen = () => {

  const [utilisateurs, setUtilisateurs] = useState({});
  const [isEditing, setIsEditing] = useState(false)
  const [nom, setNom] = useState(utilisateurs.nom || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [prenom, setPrenom] = useState(utilisateurs.prenom || '');
  const [age, setAge] = useState(utilisateurs.age || '');
  const [inscription, setInscription] = useState(utilisateurs.inscription || '');
  const [pays, setPays] = useState(utilisateurs.pays || '');
  const [ville, setVille] = useState(utilisateurs.ville || '');
  const [code_postal, setCodePostal] = useState(utilisateurs.code_postal || '');

useEffect(() => {
  getUtilisateurs()
    .then(response => {
      console.log('Utilisateur reçu:', response.data);
      setUtilisateurs(response.data); // Stocke l'objet utilisateur
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    });
}, []);

//Mise a jours Nom
const updateDataNom = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      nom,
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

//Mise a jours Prenom
const updateDataPrenom = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      prenom,
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

//Mise a jours Age
const updateDataAge = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      age,
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

//Mise a jours Inscription
const updateDataInscription = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      inscription,
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

//Mise a jours pays
const updateDataPays = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      pays,
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

//Mise a jours ville
const updateDataVille = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      ville,
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

//Mise a jours code postal
const updateDataCodePostal = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs', {
      id: 1,
      code_postal,
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
    <View>
      {/*Affichage du nom*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.nom} value={nom} onChangeText={setNom} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataNom}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage du prenom*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.prenom} value={prenom} onChangeText={setPrenom} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataPrenom}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage de l'age*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.age} value={age} onChangeText={setAge} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataAge}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage de la date inscription*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.inscription} value={inscription} onChangeText={setInscription} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataInscription}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage du pays*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.pays} value={pays} onChangeText={setPays} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataPays}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage de la ville*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.ville} value={ville} onChangeText={setVille} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataVille}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
      {/*Affichage du code postal*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={utilisateurs.code_postal} value={code_postal} onChangeText={setCodePostal} style={styles.textInput}  editable={isEditing}/>
        <Pressable onPress={() => setIsEditing(true)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditing && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={updateDataCodePostal}>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        )}
      </View>
    </View>
  );
};

{/** Insérer une boucle for qui va lister tout les élément de la base de donnée concerant l'utilisateur connecter */}
export default ProfilScreen;

const styles = StyleSheet.create({
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