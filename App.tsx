import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyTabs from './components/tabs_navigation/MyTabs'

function FirstScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Bienvenue dans CréaCthulh</Text>
      <Button
        title="Accueil"
        onPress={() => navigation.navigate('Accueil')}
      />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function Accueil({ navigation }) {
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
        <Stack.Screen name="Démarrage" component={FirstScreen} />
        <Stack.Screen name="Accueil" component={Accueil} />
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