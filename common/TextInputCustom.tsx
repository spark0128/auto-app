import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity
} from "react-native";

export function TextInputBasic(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <TextInput
        placeholder={props.name}
        placeholderTextColor="#9A9A9A"
        style={styles.name}
      />
    </View>
  );
}

export function TextInputWithButton(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <TextInput
        placeholder={props.name}
        placeholderTextColor="#9A9A9A"
        style={styles.name}
      />
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{props.buttonName}</Text>
        </View>
      </TouchableOpacity>
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
    paddingLeft: 14,
    paddingRight: 7,
    marginBottom: 7,
    flexDirection: "row",
    paddingVertical: 9
  },
  name: {
    fontSize: 15
  },
  buttonContainer: {
    width: 60,
    height: "100%",
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 12,
    color: "#9A9A9A"
  }
});
