import * as React from 'react';
import { Text, View} from 'react-native';

function HistScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Histoire</Text>
      </View>
    );
  }

  export default function Hist() {
    return (
      HistScreen()
    );
  }