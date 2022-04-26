import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PersonnagesScreenProps, RootStackParamList } from "./navigation/app-stacks";
import creacthulhdbapiService from "./services/creacthulhdbapi.service";
import { Personnage } from "./services/personnage.model";
import { PersonnageList } from "./components/PersonnageList";

import { TabNavigator } from "./navigation/top-tab-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface PersonnageScreenInterface{
  personnages:Personnage[]
}

export default class HomeScreen extends Component<PersonnagesScreenProps, {}> {
  state:PersonnageScreenInterface = {
    personnages: []
  }

  componentDidMount = () => {
    this.loadPersonnagesById();
  };

  loadPersonnagesById = (id="") => {
    creacthulhdbapiService.searchPersonnageById(id).then((content) => {
    this.setState({personnages:content});
    });
  };

  search = (text:string) => {
    this.loadPersonnagesById(text);
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <PersonnageList
        personnages={this.state.personnages}
        navigation={this.props.navigation}
        />
      </View>
    );
  }
}

/*function Demarrage({ navigation }) {
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
          title="Personnage1"
          onPress={() => navigation.navigate('Personnage1')}
        />
    </View>
  );
}

function Personnage1() {
  return <TabNavigator></TabNavigator>;
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

export default App;*/