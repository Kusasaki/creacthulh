import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyTabs from './components/tabs_navigation/MyTabs'

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
      <Button
        title="Modifier"
        onPress={() => navigation.navigate('Personnage1')}
      />
    </View>
  );
}

function Personnage1({ navigation }) {
  return (
    <View style={styles.blanc}>
      <MyTabs></MyTabs>
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