import React from 'react';
import {
  Text,
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function WishListScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Wishlist</Text>
    </ScrollView>
  );
}

WishListScreen.navigationOptions = {
  title: 'Wishlist',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
