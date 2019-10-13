import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export function TextInputWithUnit(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <TextInput
        placeholder={props.name}
        placeholderTextColor="#9A9A9A"
        style={styles.name}
      />
      <Text style={styles.unit}>{props.unit}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 7,
    flexDirection: "row"
  },
  name: {
    fontSize: 15
  },
  unit: {
    color: "#000",
    fontSize: 15
  }
});
