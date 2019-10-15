import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";
import { Button } from "../common/Button";
import { getModels } from "../apis/BrandAPI";
import { FullScreenSpinner } from "../common/FullScreenSpinner";

export default function SearchModelScreen(props) {
  // States
  const [isInitialized, setIsInitialized] = useState(false);
  const [popularModels, setPopularModels] = useState([]);
  const [otherModels, setOtherModels] = useState([]);

  // Lifecycle methods
  useEffect(() => {
    (async () => {
      try {
        setIsInitialized(false);
        const brandId = props.navigation.getParam('brandId');
        const res = await getModels(brandId);
        setPopularModels(res.data.popularModels);
        setOtherModels(res.data.otherModels);
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      } finally {
        setIsInitialized(true);
      }
    })();
  }, []);

  // Handlers
  const onModelClick = (model) => {
    return () => {
      props.navigation.push("SearchModelDetail", {
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
      {isInitialized ? <>
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
          buttonName="Search (72 Cars)"
          onPress={onSearchButtonClick}
        ></Button>
      </> : <FullScreenSpinner />}
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
