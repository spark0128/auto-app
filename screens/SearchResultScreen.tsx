import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { FeaturedCarCard } from "../components/Home/FeaturedCarCard";
import FilterOrderButton from "../common/FilterOrderButton";
import { searchCars, searchCarsCount } from "../apis/CarAPI";
import handleResponseError from "../libs/handleResponseError";
import { OrderOverlay } from "../components/Search/OrderOverlay";

export default function SearchResultScreen(props) {
  const brandId = props.navigation.getParam('brandId');
  const modelId = props.navigation.getParam('modelId');

  // States
  const [cars, setCars] = useState([]);
  const [searchCount, setSearchCount] = useState(null);
  const [orderOption, setOrderOption] = useState(null);
  const [isOrderVisible, setIsOrderVisible] = useState(false);

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
  const onPressFloatingButton = (index) => {
    if (index === 0) {
      console.log("filter button clicked");
    } else if (index === 1) {
      setIsOrderVisible(true);
    }
  };

  const onPressCar = (car) => {
    return () => {
      props.navigation.push('CarDetail', {
        carId: car._id,
      });
    }
  }

  const onChangeOrderOption = (option) => {
    setOrderOption(option);
    setIsOrderVisible(false);
    // TODO: Reorder search results
  }

  return (
    <>
      <ScrollView style={styles.container}>
        {cars.map((car) => {
          return <FeaturedCarCard key={car._id} car={car} onPress={onPressCar(car)} />;
        })}
      </ScrollView>
      <FilterOrderButton onPress={onPressFloatingButton}/>
      <OrderOverlay
        isVisible={isOrderVisible}
        onBackdropPress={() => setIsOrderVisible(false)}
        onPressItem={onChangeOrderOption} />
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
  },
});
