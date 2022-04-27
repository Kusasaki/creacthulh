import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RootStackParamList, PersonnagesStackScreen, HistoireStackScreen, CaracteristiquesStackScreen, AvatarStackScreen } from "./app-stacks";

// Define main tab navigator
const Tab = createMaterialTopTabNavigator<RootStackParamList>()
export const TabNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName: any; // TODO: find better type

            if (route.name === "Personnages") {
              iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            } else if (route.name === "Histoire") {
              iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            } else if (route.name === "Caracteristiques") {
                iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            } else if (route.name === "Avatar") {
                iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Personnages" component={PersonnagesStackScreen} />
        <Tab.Screen name="Histoire" component={HistoireStackScreen} />
        <Tab.Screen name="Caracteristiques" component={CaracteristiquesStackScreen} />
        <Tab.Screen name="Avatar" component={AvatarStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
