import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MyTabs from './components/tabs_navigation/MyTabs'

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.blanc}></View>
      <NavigationContainer>
        <MyTabs></MyTabs>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blanc: {
    height: 50,
  }
});