import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ModifCaractScreen from "./ModifCaractScreen";
import ModifHistScreen from "./ModifHistScreen";
import ModifAvatarScreen from "./ModifAvatarScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="ModifCaract"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="ModifCaract"
          component={ModifCaractScreen}
          options={{ tabBarLabel: 'Caractéristiques' }}
        />
        <Tab.Screen
          name="ModifHist"
          component={ModifHistScreen}
          options={{ tabBarLabel: 'Histoire' }}
        />
        <Tab.Screen
          name="ModifAvatar"
          component={ModifAvatarScreen}
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