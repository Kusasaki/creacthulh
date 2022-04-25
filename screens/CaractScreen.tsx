import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { CaractScreenProps, RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from '../services/personnage.model';

/*function CaractScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    );
  }

  export default function Caract() {
    return (
      CaractScreen()
    );
  }*/

interface CaractInterface{
  personnages:Personnage[]
}
  
  export default class CaractScreen extends Component<CaractScreenProps, {}> {
    state:CaractInterface = {
      personnages: []
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Les caractéristiques...</Text>
        </View>
      );
    }
  }