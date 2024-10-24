import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image } from 'react-native';

const ProfilScreen = () => {
  return (
    <View>
      <Text>Profil Screen</Text>
      <View style={styles.champSaisi}>
        <TextInput placeholder="Login" style={styles.textInput}/>
        <Pressable>
          <Image
            source={require('../assets/Modifier.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.champSaisi}>
        <TextInput placeholder="Login" style={styles.textInput}/>
        <Pressable>
          <Image
            source={require('../assets/Enregistrer.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
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