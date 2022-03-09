import * as React from 'react';
import { Text, View} from 'react-native';

function ModifHistScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Modifier l'histoire</Text>
      </View>
    );
  }

  export default function Hist() {
    return (
      ModifHistScreen()
    );
  }