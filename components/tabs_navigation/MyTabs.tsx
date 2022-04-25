import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CaractScreen from "../../screens/CaractScreen";
import HistScreen from "../../screens/HistScreen";
import AvatarScreen from "../../screens/AvatarScreen";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Caract"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Caract"
          component={CaractScreen}
          options={{ tabBarLabel: 'Caractéristiques' }}
        />
        <Tab.Screen
          name="Hist"
          component={HistScreen}
          options={{ tabBarLabel: 'Histoire' }}
        />
        <Tab.Screen
          name="Avatar"
          component={AvatarScreen}
          options={{ tabBarLabel: 'Avatar' }}
        />
      </Tab.Navigator>
    );
  }

  export default function Tabs() {
    return (
      MyTabs()
    );
  }