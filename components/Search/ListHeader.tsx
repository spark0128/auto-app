import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export function ListHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    paddingLeft: 16,
    justifyContent: 'center',
    alignContent: 'center',
  },
});
