import React from 'react';
import {
  Text,
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function SearchScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Search</Text>
    </ScrollView>
  );
}

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
