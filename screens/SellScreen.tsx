import React from 'react';
import {
  Text,
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function SellScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Sell</Text>
    </ScrollView>
  );
}

SellScreen.navigationOptions = {
  title: 'Sell',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
