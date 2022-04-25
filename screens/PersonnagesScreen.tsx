import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PersonnagesScreenProps, RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from '../services/personnage.model';

interface PersonnagesInterface{
  personnages:Personnage[]
}

export default class PersonnagesScreen extends Component<PersonnagesScreenProps, {}> {
  state:PersonnagesInterface = {
    personnages: []
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Les personnages...</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {flex:1,
    flexDirection:'row',
    backgroundColor: '#ff0',
    marginTop:10,
    alignContent:'center',
    width:360,
    justifyContent:'space-between',
    alignItems:'center',
    elevation: 10,

  },
  title: {
    fontSize:18,
    marginHorizontal:'2%',
    width:'65%'
  },
  switch:{
    marginHorizontal:'2%'
  },
  button:{
    marginHorizontal:'2%'
  }
});