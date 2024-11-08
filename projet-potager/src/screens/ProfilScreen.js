import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, Pressable, Image } from 'react-native';
import { getUtilisateurs } from '../services/api'; // Appel au service API
import { useUser } from './UserContext';
import axios from 'axios';

const ProfilScreen = () => {

//Initialisation des données
  const [utilisateurs, setUtilisateurs] = useState({});
  const [nom, setNom] = useState(utilisateurs.nom || ''); //Initialisation de Nom avec utilisateurs.nom ou une chaine vide
  const [prenom, setPrenom] = useState(utilisateurs.prenom || '');
  const [age, setAge] = useState(utilisateurs.age || '');
  const [inscription, setInscription] = useState(utilisateurs.inscription || '');
  const [pays, setPays] = useState(utilisateurs.pays || '');
  const [ville, setVille] = useState(utilisateurs.ville || '');
  const [code_postal, setCodePostal] = useState(utilisateurs.code_postal || '');

//Initialisation de l'edition des champs sur false
  const [isEditingNom, setIsEditingNom] = useState(false);
  const [isEditingPrenom, setIsEditingPrenom] = useState(false);
  const [isEditingAge, setIsEditingAge] = useState(false);
  const [isEditingPays, setIsEditingPays] = useState(false);
  const [isEditingVille, setIsEditingVille] = useState(false);
  const [isEditingCodePostal, setIsEditingCodePostal] = useState(false)
// Récupération id utilisateurs
const { user } = useUser();  // Accéder à l'état utilisateur depuis le contexte
console.log(user.id);


useEffect(() => {
  getUtilisateurs(user.id)
    .then(response => {
      console.log('Utilisateur reçu:', response.data);
      //setUtilisateurs(response.data); // Stocke l'objet utilisateur
      const data = response.data;
        setUtilisateurs(data);
        setNom(data.nom || '');
        setPrenom(data.prenom || '');
        setAge(data.age || '');
        setPays(data.pays || '');
        setVille(data.ville || '');
        setCodePostal(data.code_postal || '');
    })
    .catch(error => {
      console.error("Erreur lors de la récupération de l'utilisateur:", error);
    });
}, [user.id]);

//Mise a jours Nom
const updateDataNom = async () => {
  try {
    // Appelez ici votre API ou votre fonction de mise à jour avec axios
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/nom', {
      nom,
      id: user.id,
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
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/prenom', {
      prenom,
      id: user.id,
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
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/age', {
      age,
      id: user.id,
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
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/pays', {
      pays,
      id: user.id,
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
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/ville', {
      ville,
      id: user.id,
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
    const response = await axios.put('http://192.168.1.26:3000/api/utilisateurs/code_postal', {
      code_postal,
      id: user.id,
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
        <TextInput placeholder={String(utilisateurs.nom || "Nom d'utilisateur")} value={nom} onChangeText={setNom} style={styles.textInput} editable={isEditingNom}/>
        <Pressable onPress={() => setIsEditingNom(!isEditingNom)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingNom && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataNom(); setIsEditingNom(!isEditingNom)}}>
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
        <TextInput placeholder={String(utilisateurs.prenom || "Prenom")} value={prenom} onChangeText={setPrenom} style={styles.textInput} editable={isEditingPrenom}/>
        <Pressable onPress={() => setIsEditingPrenom(!isEditingPrenom)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingPrenom && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataPrenom(); setIsEditingPrenom(!isEditingPrenom)}}>
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
        <TextInput placeholder={String(utilisateurs.age || "Age")} value={age} onChangeText={setAge} style={styles.textInput} editable={isEditingAge}/>
        <Pressable onPress={() => setIsEditingAge(!isEditingAge)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingAge && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataAge(); setIsEditingAge(!isEditingAge)}}>
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
        <TextInput placeholder={String(utilisateurs.inscription || "Date d'inscription")} value={inscription} onChangeText={setInscription} style={styles.textInput} editable={false}/>
      </View>
      {/*Affichage du pays*/}
      <View style={styles.champSaisi}>
        <TextInput placeholder={String(utilisateurs.pays || "Pays")} value={pays} onChangeText={setPays} style={styles.textInput} editable={isEditingPays}/>
        <Pressable onPress={() => setIsEditingPays(!isEditingPays)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingPays && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataPays(); setIsEditingPays(!isEditingPays)}}>
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
        <TextInput placeholder={String(utilisateurs.ville || "Ville")} value={ville} onChangeText={setVille} style={styles.textInput} editable={isEditingVille}/>
        <Pressable onPress={() => setIsEditingVille(!isEditingVille)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingVille && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataVille(); setIsEditingVille(!isEditingVille)}}>
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
        <TextInput placeholder={String(utilisateurs.code_postal || "Code postal")} value={code_postal} onChangeText={setCodePostal} style={styles.textInput} editable={isEditingCodePostal}/>
        <Pressable onPress={() => setIsEditingCodePostal(!isEditingCodePostal)}>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {isEditingCodePostal && ( // Affiche le bouton Enregistrer seulement si isEditing est true
        <Pressable onPress={() => {updateDataCodePostal(); setIsEditingCodePostal(!isEditingCodePostal)}}>
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