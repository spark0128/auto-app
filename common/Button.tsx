import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

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
    // TODO: 0 when not active , blue and 0.8 when active
    // style - backgroundColor, paddingVertical
    // Make Primary and Secondary (paddingVertical 24)
    <TouchableOpacity>
      <View style={[styles.buttonContainer, props.style]}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 3
  },
  buttonText: {
    fontSize: 14,
    color: "#fff"
  }
});
