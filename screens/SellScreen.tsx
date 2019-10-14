import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { Button } from "../common/Button";

export default function SellScreen(props) {
  // Handlers
  const onGoButtonClick = () => {
    props.navigation.push("CarInfo");
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text>Infography</Text>
      </ScrollView>
      <Button
        backgroundColor={styles.goButtonContainer}
        onPress={onGoButtonClick}
        buttonName="Let's go"
      />
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
  goButtonContainer: {
    backgroundColor: "#2270E7"
  }
});
