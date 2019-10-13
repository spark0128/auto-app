import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

export function Hero(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image
        style={styles.heroImage}
        source={{ uri: "https://i.imgur.com/kUQBAzZ.png" }}
      ></Image>
    </TouchableOpacity>
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
