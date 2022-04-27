import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";

import { Personnage } from '../services/personnage.model';
import PersonnagesScreen from "../screens/PersonnagesScreen";
import DetailsScreen from "../screens/DetailsScreen";

import HistScreen from "../screens/HistScreen";
import CaractScreen from "../screens/CaractScreen";
import AvatarScreen from "../screens/AvatarScreen";

import { RouteProp } from "@react-navigation/native";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Personnages: undefined;
  Details: {
    personnageId: string,
  }
  Histoire: undefined;
  Caracteristiques: undefined;
  Avatar: undefined;

};

// Define view stack inside home tab
const HomeStack = createStackNavigator<RootStackParamList>();
export const PersonnagesStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Personnages" component={PersonnagesScreen} />
      <HomeStack.Screen name="Histoire" component={HistScreen} />
      <HomeStack.Screen name="Caracteristiques" component={CaractScreen} />
      <HomeStack.Screen name="Avatar" component={AvatarScreen} />
    </HomeStack.Navigator>
  );
};

const HistStack = createStackNavigator<RootStackParamList>();
export const HistoireStackScreen = () => {
  return (
    <HistStack.Navigator>
      <HistStack.Screen name="Histoire" component={HistScreen} />
      <HistStack.Screen name="Caracteristiques" component={CaractScreen} />
      <HistStack.Screen name="Avatar" component={AvatarScreen} />
      <HistStack.Screen name="Personnages" component={PersonnagesScreen} />
    </HistStack.Navigator>
  );
};

const CaractStack = createStackNavigator<RootStackParamList>();
export const CaracteristiquesStackScreen = () => {
  return (
    <CaractStack.Navigator>
      <CaractStack.Screen name="Caracteristiques" component={CaractScreen} />
      <CaractStack.Screen name="Histoire" component={HistScreen} />
      <CaractStack.Screen name="Avatar" component={AvatarScreen} />
      <CaractStack.Screen name="Personnages" component={PersonnagesScreen} />
    </CaractStack.Navigator>
  );
};

const AvStack = createStackNavigator<RootStackParamList>();
export const AvatarStackScreen = () => {
  return (
    <AvStack.Navigator>
      <AvStack.Screen name="Avatar" component={AvatarScreen} />
      <AvStack.Screen name="Caracteristiques" component={CaractScreen} />
      <AvStack.Screen name="Histoire" component={HistScreen} />
      <AvStack.Screen name="Personnages" component={PersonnagesScreen} />
    </AvStack.Navigator>
  );
};

export interface NavigationProps {
  navigation: StackNavigationProp<RootStackParamList, any>;
}

export interface PersonnagesScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Personnages">;
  route: RouteProp<RootStackParamList, "Personnages">
}

/*export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
  route: RouteProp<RootStackParamList, "Details">
}*/

export interface HistoireScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Histoire">;
  route: RouteProp<RootStackParamList, "Histoire">
}

export interface CaractScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Caracteristiques">;
  route: RouteProp<RootStackParamList, "Caracteristiques">
}

export interface AvatarScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Avatar">;
  route: RouteProp<RootStackParamList, "Avatar">
}