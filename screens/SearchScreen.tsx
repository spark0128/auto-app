import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Button, ListItem } from 'react-native-elements';
import { ListHeader } from '../components/Search/ListHeader';


export default function SearchScreen() {

  // TODO: Get popular brands from server
  const popularBrands = [
    { id: '1', name: 'Toyota' },
    { id: '2', name: 'Lexus' },
  ];

  // TODO: Get other brands from server
  const otherBrands = [
    { id: '1', name: 'Toyota' },
    { id: '2', name: 'Lexus' },
  ];

  const [search, setSearch] = useState('');

  return (
    <>
      <SearchBar
        placeholder="Search a car here."
        onChangeText={(search) => setSearch(search)}
        value={search} />
      <ScrollView style={styles.container}>
        <ListHeader title='Popular brands' />
        {popularBrands.map((brand) => {
          return <ListItem
            key={brand.id}
            title={brand.name}
            bottomDivider />;
        })}
        <ListHeader title='Other brands' />
        {otherBrands.map((brand) => {
          return <ListItem
            key={brand.id}
            title={brand.name}
            bottomDivider />;
        })}
      </ScrollView>
      <Button
        style={styles.searchButton}
        title="Search (95,108 Cars)" />
    </>
  );
}

SearchScreen.navigationOptions = {
  title: 'Search',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listHeader: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchButton: {
    height: 46,
  },
});
