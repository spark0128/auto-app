import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

export function TextInputBasic(props) {
  return (
    <View style={[styles.container, props.containerWidth]}>
      <TextInput
        placeholder={props.name}
        placeholderTextColor="#9A9A9A"
        style={styles.name}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
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
        onChangeText={props.onChangeText}
        value={props.value}
      />
      <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
        <View style={styles.buttonContainer}>
          {props.loading ? <ActivityIndicator size="small" /> : <Text style={styles.buttonText}>{props.buttonName}</Text>}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export function TextInputWithUnit(props) {
  return (
    <View style={[styles.textInputWithUnitContainer, props.containerWidth]}>
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
  },
  textInputWithUnitContainer: {
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
  unit: {
    color: "#000",
    fontSize: 15
  }
});
