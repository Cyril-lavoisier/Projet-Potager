import React from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, StyleSheet } from 'react-native';

const QuincailleriesScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 350}}>
        <Text>Quincaillerie</Text>
        <Pressable onPress={() => navigation.navigate('Profil')}>
          <Image
            source={require('../assets/Ajouter.png')}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
      </View>
      <View style={styles.champSaisi}>
        <TextInput placeholder="Nom" style={styles.textInput}/>
        <TextInput placeholder="Type" style={styles.textInput}/>
        <TextInput placeholder="Fournisseur" style={styles.textInput}/>
        <TextInput placeholder="Prix" style={styles.textInput}/>
        <TextInput placeholder="Quantité" style={styles.textInput}/>
        <View style={styles.champSaisiGroupButton}>
          <Pressable>
            <Image
              source={require('../assets/Supprimer.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../assets/Modifier.png')}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.confirmationAnnulation}>
        <TextInput placeholder="Nom" style={styles.textInput}/>
        <TextInput placeholder="Type" style={styles.textInput}/>
        <TextInput placeholder="Fournisseur" style={styles.textInput}/>
        <TextInput placeholder="Prix" style={styles.textInput}/>
        <TextInput placeholder="Quantité" style={styles.textInput}/>
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

export default QuincailleriesScreen;

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