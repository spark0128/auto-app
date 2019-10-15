import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Button, ListItem } from "react-native-elements";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";

export default function SellSelectModelScreen(props) {
  // TODO: Get modelDetails in model from server
  const modelDetails = [{ id: "1", name: "1.8" }, { id: "2", name: "1.8 L" }];

  // Handlers
  const onModelDetailClick = (modelDetail) => {
    return () => {
      // TODO: Pass search query option
      props.navigation.push("SearchResult");
    };
  };

  const onSearchButtonClick = () => {
    // TODO: Pass search query option
    props.navigation.push("SearchResult");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ListHeader title="Model Details" />
        {modelDetails.map((modelDetail) => {
          return (
            <ListItemImageNumCars
              key={modelDetail.id}
              name={modelDetail.name}
              onPress={onModelDetailClick(modelDetail)}
            />
          );
        })}
      </ScrollView>
      <Button
        style={styles.searchButton}
        title="Search (10 Cars)"
        onPress={onSearchButtonClick}
      />
    </>
  );
}

// SellSelectModelScreen.navigationOptions = ({ navigation }) => {
//   return {
//     title: navigation.getParam("modelName", "Model Name")
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  listHeader: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  searchButton: {
    height: 46
  }
});
