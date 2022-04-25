import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { HistoireScreenProps, RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from '../services/personnage.model';

interface HistInterface{
  personnages:Personnage[]
}
  
  export default class HistScreen extends Component<HistoireScreenProps, {}> {
    state:HistInterface = {
      personnages: []
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>L'histoire...</Text>
        </View>
      );
    }
  }