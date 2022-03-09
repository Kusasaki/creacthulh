import * as React from 'react';
import { Text, View } from 'react-native';

function ModifAvatarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Modifier l'avatar</Text>
      </View>
    );
  }

  export default function Avatar() {
    return (
      ModifAvatarScreen()
    );
  }