import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import { FeaturedCarCard } from '../components/Home/FeaturedCarCard';

export default function SearchResultScreen() {

  // TODO: Search cars from selected query
  const cars = [
    { id: '1', name: 'LEXUS LX300' },
  ];

  // Handlers
  const onFloatingButtonClick = (index) => {
    if (index === 0) {
      console.log("filter button clicked");
    } else if (index === 1) {
      console.log("order button clicked");
    }
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {cars.map((car) => {
          return <FeaturedCarCard key={car.id} car={car} />
        })}
      </ScrollView>
      <ButtonGroup
        containerStyle={styles.floatingButton}
        onPress={onFloatingButtonClick}
        buttons={['Filter', 'Order']} />
    </>
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
  floatingButton: {
    position: 'absolute',
    width: 148,
    height: 30,
    bottom: 10,
    alignSelf: 'center'
  },
});
