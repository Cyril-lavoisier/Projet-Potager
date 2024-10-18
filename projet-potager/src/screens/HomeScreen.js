import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button style={styles.button} title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Plantations" onPress={() => navigation.navigate('Plantations')} />
      <Button title="Semis" onPress={() => navigation.navigate('Semis')} />
      <Button title="Consommables" onPress={() => navigation.navigate('Consommables')} />
      <Button title="Outillages" onPress={() => navigation.navigate('Outillages')} />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',      // Placer le texte et l'icône sur la même ligne
    backgroundColor: '#FF5722',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',      // Centrer l'icône et le texte verticalement
  }
})

export default HomeScreen;