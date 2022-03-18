import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function AvatarScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Avatar</Text>
      </View>
    );
  }

  export default function Avatar() {
    return (
      AvatarScreen()
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    blanc: {
      height: 500,
    }
  });