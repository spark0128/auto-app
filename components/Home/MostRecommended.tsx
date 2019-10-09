import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export function MostRecommended() {
  return (
    <View style={styles.container}>
      <Text>MostRecommended Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 290,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
