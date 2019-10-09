import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <MonoText>Home</MonoText>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },  
});
