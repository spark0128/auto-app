import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { FeaturedCarCard } from '../components/Home/FeaturedCarCard';

export default function SearchResultScreen() {

  // TODO: Search cars from selected query
  const cars = [
    { id: '1', name: 'LEXUS LX300' },
  ];

  return (
    <ScrollView style={styles.container}>
      {cars.map((car) => {
        return <FeaturedCarCard key={car.id} car={car} />
      })}
    </ScrollView>
  );
}

SearchResultScreen.navigationOptions = () => {
  return {
    title: 'Searched Result',
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
