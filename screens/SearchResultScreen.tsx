import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FeaturedCarCard } from "../components/Home/FeaturedCarCard";
import FilterOrderButton from "../common/FilterOrderButton";
import { searchCars, searchCarsCount } from "../apis/CarAPI";
import handleResponseError from "../libs/handleResponseError";

export default function SearchResultScreen(props) {
  const brandId = props.navigation.getParam('brandId');
  const modelId = props.navigation.getParam('modelId');

  // States
  const [cars, setCars] = useState([]);
  const [searchCount, setSearchCount] = useState(null);

  // Lifecycle methods
  useEffect(() => {
    (async () => {
      try {
        const res = await searchCars(brandId, modelId);
        setCars(res.data.cars);
      } catch (error) {
        return handleResponseError(error);
      }
    })();

    // Get search count
    (async () => {
      try {
        const res = await searchCarsCount(brandId, modelId);
        setSearchCount(res.data.count);
        props.navigation.setParams({ searchCount: res.data.count });
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      }
    })();
  }, []);

  // Handlers
  const onFloatingButtonClick = (index) => {
    if (index === 0) {
      console.log("filter button clicked");
    } else if (index === 1) {
      console.log("order button clicked");
    }
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {cars.map((car) => {
          return <FeaturedCarCard key={car._id} car={car} />;
        })}
      </ScrollView>
      <FilterOrderButton />
    </>
  );
}

SearchResultScreen.navigationOptions = ({ navigation }) => {
  return {
    title: `Searched Result (${navigation.getParam('searchCount', 0)})`
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
