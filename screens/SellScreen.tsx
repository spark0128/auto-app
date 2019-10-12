import React from "react";
import { Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import Button from "../common/Button";

export default function SellScreen() {
  // Handlers
  const onSellButtonClick = () => {
    return () => {
      props.navigation.push("SelectModelDetail", {
        modelId: model.id,
        modelName: model.name
      });
    };
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text>Infography</Text>
      </ScrollView>
      <Button
        viewStyle={styles.bgSearchButton}
        style={styles.textSearchButton}
        onPress={() => {}}
      >
        Let's Go
      </Button>
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
  bgSearchButton: {
    backgroundColor: "#2270E7",
    justifyContent: "center",
    alignItems: "center"
  },
  textSearchButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});
