import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function ListHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 38,
    paddingLeft: 17,
    justifyContent: "center",
    alignContent: "center"
  },
  text: {
    color: "#9B9B9B",
    fontSize: 12.5
  }
});
