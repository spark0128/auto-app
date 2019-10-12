import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export function Hero() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.heroImage}
        source={{ uri: "https://i.imgur.com/kUQBAzZ.png" }}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    aspectRatio: 25 / 7,
    justifyContent: "center",
    alignContent: "center"
  },
  heroImage: {
    width: "100%",
    height: "100%"
  }
});
