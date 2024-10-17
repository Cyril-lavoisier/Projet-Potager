import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 100 }}>
      <Text>Home Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Plantations" onPress={() => navigation.navigate('Plantations')} />
      <Button title="Semis" onPress={() => navigation.navigate('Semis')} />
      <Button title="Consommables" onPress={() => navigation.navigate('Consommables')} />
      <Button title="Outillages" onPress={() => navigation.navigate('Outillages')} />
    </View>
  );
};

export default HomeScreen;