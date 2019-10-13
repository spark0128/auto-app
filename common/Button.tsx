import React from "react";
import { Text, View, StyleSheet } from "react-native";

export function Button(props) {
  return (
    <View style={[props.containerStyle, { width: "100%", height: 46 }]}>
      <Text {...props} style={props.style}>
        {props.children}
      </Text>
    </View>
  );
}

export function PaddedButton(props) {
  return (
    <View style={[styles.buttonContainer, props.buttonColor]}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 24,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 14,
    color: "#fff"
  }
});
