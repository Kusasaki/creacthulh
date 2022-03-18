import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyTopTabs from './components/top_tabs_navigation/MyTabs'
import MyBottomTabs from './components/bottom_tabs_navigation_1/MyTabs'

const Tab = createMaterialTopTabNavigator();

function Demarrage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue dans CréaCthulh</Text>
      <Button
        title="Continuer"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

function Accueil({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mes personnages : </Text>
      <Text>Personnage1</Text>
      <Button
        title="Détails"
        onPress={() => navigation.navigate('Personnage1')}
      />
      <Button
        title="Supprimer"
        onPress={() => navigation.navigate('Personnage1')}
      />
    </View>
  );
}

function Personnage1() {
  return (
    <View style={styles.blanc}>
      <MyTopTabs></MyTopTabs>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Démarrage">
        <Stack.Screen name="Démarrage" component={Demarrage} />
        <Stack.Screen name="Accueil" component={Accueil} />
        <Stack.Screen name="Personnage1" component={Personnage1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blanc: {
    height: 50,
  }
});

export default App;