import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function SellYourCar() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Sell Your Car</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    paddingVertical: 16,
    paddingHorizontal: 18
  },
  buttonContainer: {
    backgroundColor: "#808E9F",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 16,
    color: "#fff"
  }
});
