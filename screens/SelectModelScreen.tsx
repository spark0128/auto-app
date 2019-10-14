import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";
import { Button } from "../common/Button";

export default function SelectModelScreen(props) {
  // TODO: Get popular models in brand from server
  const popularModels = [
    {
      id: "1",
      name: "Vogue",
      imageUrl: "https://i.imgur.com/GbFjASW.png",
      numCars: 72
    },
    {
      id: "2",
      name: "Evoque",
      imageUrl: "https://i.imgur.com/GbFjASW.png",
      numCars: 72
    }
  ];

  // TODO: Get other models in brand from server
  const otherModels = [
    {
      id: "1",
      name: "LR2",
      imageUrl: "https://i.imgur.com/GbFjASW.png",
      numCars: 72
    },
    {
      id: "2",
      name: "LR4",
      imageUrl: "https://i.imgur.com/GbFjASW.png",
      numCars: 72
    }
  ];

  // Handlers
  const onModelClick = (model) => {
    return () => {
      props.navigation.push("SelectModelDetail", {
        modelId: model.id,
        modelName: model.name
      });
    };
  };

  const onSearchButtonClick = () => {
    // TODO: Pass search query option
    props.navigation.push("SearchResult");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <ListHeader title="Popular Models" />
        {popularModels.map((model) => {
          return (
            <ListItemImageNumCars
              key={model.id}
              name={model.name}
              imageUrl={model.imageUrl}
              imageSize={{ width: 56, height: 38.5 }}
              extraMargin={{ marginLeft: 7 }}
              numCars={model.numCars}
              onPress={onModelClick(model)}
            />
          );
        })}
        <ListHeader title="Other Models" />
        {otherModels.map((model) => {
          return (
            <ListItemImageNumCars
              key={model.id}
              name={model.name}
              imageUrl={model.imageUrl}
              imageSize={{ width: 56, height: 38.5 }}
              extraMargin={{ marginLeft: 7 }}
              numCars={model.numCars}
              onPress={onModelClick(model)}
            />
          );
        })}
      </ScrollView>
      <Button
        backgroundColor={styles.searchButtonContainer}
        buttonName="Search (72 Cars)"
        onPress={onSearchButtonClick}
      ></Button>
    </>
  );
}

SelectModelScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("brandName", "Brand Name")
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  listHeader: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  searchButtonContainer: {
    backgroundColor: "#191919"
  }
});
