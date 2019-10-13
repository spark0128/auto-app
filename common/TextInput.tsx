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
      {props.children}
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
    fontSize: 15
  }
});
