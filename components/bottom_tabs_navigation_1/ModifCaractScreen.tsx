import * as React from 'react';
import { Text, View} from 'react-native';

function ModifCaractScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Modifier les caractéristiques</Text>
      </View>
    );
  }

  export default function Caract() {
    return (
      ModifCaractScreen()
    );
  }