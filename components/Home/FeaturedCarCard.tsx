import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export function FeaturedCarCard({ car }) {
  return (
    <View style={styles.container}>
      <Text>FeaturedCarCard Section</Text>
      <Text>{`id: ${car.id}, name: ${car.name}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    height: 340,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
