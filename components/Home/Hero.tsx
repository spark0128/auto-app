import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export function Hero() {
  return (
    <View style={styles.container}>
      <Text>Hero Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 104,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
