import React from 'react';
import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native';

const AjouterScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Text>Jardin X</Text>
      <View style={styles.listJardin}>
        <Text>Parcelles 1</Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.navigate('Ajouter')} style={styles.addButton}>
          <Text>Ajouter une parcelles</Text>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.confirmationAnnulation}>
        <Text>Superficie X</Text>
        <View style={styles.groupButton}>
          <Pressable>
            <Image
              source={require('../assets/Confirmer.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/Annuler.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
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