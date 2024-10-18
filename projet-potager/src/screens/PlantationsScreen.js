import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PlantationsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Plantations Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Plantations" onPress={() => navigation.navigate('Plantations')} />
      <Button title="Semis" onPress={() => navigation.navigate('Semis')} />
      <Button title="Consommables" onPress={() => navigation.navigate('Consommables')} />
      <Button title="Outillages" onPress={() => navigation.navigate('Outillages')} />
    </View>
  );
};

export default PlantationsScreen;