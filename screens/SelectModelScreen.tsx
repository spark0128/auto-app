import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Button, ListItem } from 'react-native-elements';
import { ListHeader } from '../components/Search/ListHeader';


export default function SelectModelScreen(props) {

  // TODO: Get popular models in brand from server
  const popularModels = [
    { id: '1', name: 'Vogue' },
    { id: '2', name: 'Evoque' },
  ];

  // TODO: Get other models in brand from server
  const otherModels = [
    { id: '1', name: 'LR2' },
    { id: '2', name: 'LR4' },
  ];

  // Handlers
  const onModelClick = (model) => {
    return () => {
      props.navigation.push('SelectModelDetail', {
        modelId: model.id,
        modelName: model.name,
      });
    }
  }

  const onSearchButtonClick = () => {
    // TODO: Pass search query option
    props.navigation.push('SearchResult');
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <ListHeader title='Popular models' />
        {popularModels.map((model) => {
          return <ListItem
            key={model.id}
            title={model.name}
            bottomDivider
            onPress={onModelClick(model)} />;
        })}
        <ListHeader title='Other models' />
        {otherModels.map((model) => {
          return <ListItem
            key={model.id}
            title={model.name}
            bottomDivider
            onPress={onModelClick(model)} />;
        })}
      </ScrollView>
      <Button
        style={styles.searchButton}
        title="Search (42 Cars)"
        onPress={onSearchButtonClick} />
    </>
  );
}

SelectModelScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam('brandName', 'Brand Name'),
  }
}

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
