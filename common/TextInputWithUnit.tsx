import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function TextInputWithUnit(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.unit}>{props.unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderColor: "#D3D3D3",
    borderWidth: 1.5,
    borderRadius: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 7,
    flexDirection: "row"
  },
  name: {
    color: "#9A9A9A",
    fontSize: 15
  },
  unit: {
    color: "#000",
    fontSize: 15
  }
});
