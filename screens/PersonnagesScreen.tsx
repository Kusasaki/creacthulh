import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PersonnagesScreenProps, RootStackParamList } from "../navigation/app-stacks";
import creacthulhdbapiService from "../services/creacthulhdbapi.service";
import { Personnage } from "../services/personnage.model";
import { PersonnageList } from "../components/PersonnageList";

import { TabNavigator } from "../navigation/top-tab-navigation";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationProps } from "../navigation/app-stacks";

interface PersonnageScreenInterface{
  personnages:Array<Personnage>
}

export default class PersonnagesScreen extends Component<
  NavigationProps,
  PersonnageScreenInterface
  > {
  state: PersonnageScreenInterface = {
    personnages: [],
  };

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
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",marginTop:50 }}>
        <Text>Tous les personnages :</Text>
        <PersonnageList
          personnages={this.state.personnages}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}