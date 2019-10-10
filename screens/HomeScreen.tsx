import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import colors from '../constants/Colors';
import { Hero } from '../components/Home/Hero';
import { MostRecommended } from '../components/Home/MostRecommended';
import { MostViewed } from '../components/Home/MostViewed';
import { FeaturedCarCard } from '../components/Home/FeaturedCarCard';

export default function HomeScreen() {
  // TODO: Get most recommended cars from server
  // TODO: Get most viewed cars from server
  // TODO: Get featured cars from server
  const featuredCars = [
    { id: '1', name: 'LEXUS LX300' },
    { id: '2', name: 'TOYOTA Camry' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Hero />
        <MostRecommended />
        <View style={{ height: 10 }} />
        <MostViewed />
        {featuredCars.map((car) => <FeaturedCarCard key={car.id} car={car} />)}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: 'Automate',
  headerStyle: {
    backgroundColor: colors.primaryColor,
  },
  headerTintColor: 'white',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
});
