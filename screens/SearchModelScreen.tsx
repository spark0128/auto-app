import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, ProgressBarAndroid } from "react-native";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";
import { Button } from "../common/Button";
import { getModels } from "../apis/BrandAPI";
import { searchCarsCount } from "../apis/CarAPI";

export default function SearchModelScreen(props) {
  const brandId = props.navigation.getParam('brandId');

  // States
  const [popularModels, setPopularModels] = useState([]);
  const [otherModels, setOtherModels] = useState([]);
  const [searchCount, setSearchCount] = useState(null);

  // Lifecycle methods
  useEffect(() => {
    // Get models
    (async () => {
      try {
        const res = await getModels(brandId);
        setPopularModels(res.data.popularModels);
        setOtherModels(res.data.otherModels);
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      }
    })();

    // Get search count
    (async () => {
      try {
        const res = await searchCarsCount(brandId);
        setSearchCount(res.data.count);
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      }
    })();
  }, []);

  // Handlers
  const onModelClick = (model) => {
    return () => {
      props.navigation.push("SearchResult", {
        brandId,
        modelId: model.id,
      });
    };
  };

  const onSearchButtonClick = () => {
    props.navigation.push("SearchResult", {
      brandId: brandId,
    });
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {popularModels.length ? <>
          <ListHeader title="Popular Models" />
          {popularModels.map((model) => {
            return (
              <ListItemImageNumCars
                key={model.id}
                name={model.name}
                imageUrl={'https://i.imgur.com/GbFjASW.png'}
                imageSize={{ width: 56, height: 38.5 }}
                extraMargin={{ marginLeft: 7 }}
                numCars={model.numCars}
                onPress={onModelClick(model)}
              />
            );
          })}
        </> : null}
        {otherModels.length ? <>
          <ListHeader title="Other Models" />
          {otherModels.map((model) => {
            return (
              <ListItemImageNumCars
                key={model.id}
                name={model.name}
                imageUrl={'https://i.imgur.com/GbFjASW.png'}
                imageSize={{ width: 56, height: 38.5 }}
                extraMargin={{ marginLeft: 7 }}
                numCars={model.numCars}
                onPress={onModelClick(model)}
              />
            );
          })}
        </> : null}
      </ScrollView>
      <Button
        backgroundColor={styles.searchButtonContainer}
        buttonName={searchCount === null ? "Search" : `Search (${searchCount} Cars)`}
        onPress={onSearchButtonClick}
      ></Button>
    </>
  );
}

SearchModelScreen.navigationOptions = ({ navigation }) => {
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
