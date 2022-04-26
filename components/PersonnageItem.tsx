import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from "../services/personnage.model";
import { StackNavigationProp } from "@react-navigation/stack";

import { NavigationProps } from "../navigation/app-stacks";

interface PersonnageItemProps extends NavigationProps {
  personnage: Personnage;
}

export class PersonnageItem extends Component {
    constructor(public props: {personnage : Personnage, navigation : StackNavigationProp<RootStackParamList, any>}) {
      super(props);
    }
    render() {
      return (
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Details", { personnageId : this.props.personnage.id })}>
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{this.props.personnage.firstname}, {this.props.personnage.lastname}</Text>
          </View>
        </TouchableOpacity>  
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    text: {
      marginLeft: 10,
      fontSize: 18,
    },
    itemContainer: {flex:1,
      flexDirection:'row',
      backgroundColor: '#eeb',
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