import React, { Component } from "react";
import { Text, View, Button, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { PersonnagesScreenProps, RootStackParamList } from "../navigation/app-stacks";
import { Personnage } from "../services/personnage.model";
import { StackNavigationProp } from "@react-navigation/stack";
import { PersonnageItem } from "./FlatListItem";

interface AppProps{
    personnages : Personnage[];
    navigation : StackNavigationProp<RootStackParamList, any>;
  }
  
  export class PersonnageList extends Component<AppProps, {}> {
  
    render() {
      return (
          <FlatList
          style={styles.container}
          data={this.props.personnages}
          keyExtractor={item => item.id.toString()}
          renderItem = {({item}) => 
            <PersonnageItem
            navigation={this.props.navigation}
            personnage={item}
            />}
        />
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
      backgroundColor: 'pink',
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