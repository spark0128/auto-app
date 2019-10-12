import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { FeaturedCarCard } from "../components/Home/FeaturedCarCard";
import FilterOrderButton from "../common/FilterOrderButton";

export default function SearchResultScreen() {
  // TODO: Search cars from selected query
  const cars = [{ id: "1", name: "LEXUS LX300" }];

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
          return <FeaturedCarCard key={car.id} car={car} />;
        })}
      </ScrollView>
      <FilterOrderButton />
    </>
  );
}

SearchResultScreen.navigationOptions = () => {
  return {
    title: "Searched Result"
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
