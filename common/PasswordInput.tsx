import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

export function PasswordInputWithConfirm(props) {
  return (
    <>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#9A9A9A"
          style={styles.passwordInput}
        />
      </View>
      <View style={styles.passwordConfirmContainer}>
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#9A9A9A"
          style={styles.passwordInput}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  passwordContainer: {
    height: 64,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    flexDirection: "row"
  },
  passwordInput: {
    fontSize: 15
  },
  passwordConfirmContainer: {
    height: 64,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 7,
    flexDirection: "row"
  }
});
