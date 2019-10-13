import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function Select(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <Text style={styles.name}>{props.name}</Text>
      <Image style={styles.dropdownArrow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    paddingLeft: 14,
    marginBottom: 7
  },
  name: {
    color: "#9A9A9A",
    fontSize: 15
  }
});
