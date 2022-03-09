import * as React from 'react';
import { Text, View} from 'react-native';

function CaractScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Caractéristiques</Text>
      </View>
    );
  }

  export default function Caract() {
    return (
      CaractScreen()
    );
  }