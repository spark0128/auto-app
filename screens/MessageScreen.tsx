import React from 'react';
import {
  Text,
} from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';

export default function MessageScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Message</Text>
    </ScrollView>
  );
}

MessageScreen.navigationOptions = {
  title: 'Message',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
