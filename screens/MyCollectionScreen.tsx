import React from 'react';
import {
  Text,
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function MyCollectionScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>My Collection</Text>
    </ScrollView>
  );
}

MyCollectionScreen.navigationOptions = {
  title: 'My Collection',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
