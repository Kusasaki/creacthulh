import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AvatarScreenProps, RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from '../services/personnage.model';

interface AvatarInterface{
  personnages:Personnage[]
}
  
  export default class AvatarScreen extends Component<AvatarScreenProps, {}> {
    state:AvatarInterface = {
      personnages: []
    }
  
    render() {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>L'avatar...</Text>
        </View>
      );
    }
  }