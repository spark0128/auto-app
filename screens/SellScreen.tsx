import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "../common/Button";
import CarInfo from "../components/Sell/CarInfo";

export default function SellScreen(props) {
  // Handlers
  const onSellButtonClick = () => {
    return () => {
      props.navigation.push("CarInfo");
    };
  };

  return (
    <>
      {/* <ScrollView style={styles.container}>
        <Text>Infography</Text>
      </ScrollView>
      <Button
        containerStyle={styles.searchButtonContainer}
        style={styles.searchButton}
        onPress={onSellButtonClick}
      >
        Let's Go
      </Button> */}
      <CarInfo />
    </>
  );
}

SellScreen.navigationOptions = {
  title: "Sell Your Car"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  searchButtonContainer: {
    backgroundColor: "#2270E7",
    justifyContent: "center",
    alignItems: "center"
  },
  searchButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});
