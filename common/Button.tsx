import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export function Button(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={[props.backgroundColor, styles.buttonContainer]}>
        <Text style={styles.buttonText}>{props.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function PrimaryButton(props) {
  return (
    <TouchableOpacity>
      <View style={[styles.primaryButtonContainer, props.backgroundColor]}>
        <Text style={styles.primaryButtonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

export function SecondaryButton(props) {
  return (
    <TouchableOpacity>
      <View style={[styles.secondaryButtonContainer, props.backgroundColor]}>
        <Text style={styles.secondaryButtonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 46
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  },
  primaryButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 3,
    paddingVertical: 15
  },
  primaryButtonText: {
    fontSize: 14,
    color: "#fff"
  },
  secondaryButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 3,
    paddingVertical: 24
  },
  secondaryButtonText: {
    fontSize: 14,
    color: "#fff"
  }
});
