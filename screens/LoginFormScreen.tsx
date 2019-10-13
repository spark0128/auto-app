import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInputBase } from "../common/TextInputBase";
import { PaddedButton } from "../common/Button";

export default function LoginFormScreen() {
  return (
    <View style={styles.container}>
      <TextInputBase name="Username" containerWidth={{ width: "100%" }} />
      <TextInputBase name="Password" containerWidth={{ width: "100%" }} />
      <View style={styles.loginSettingsContainer}>
        <View style={styles.checkBoxContainer}>
          <Image></Image>
          <Text style={styles.checkBoxText}>Stay logged in</Text>
        </View>
        <Text style={styles.lostPasswordText}>Lost Password?</Text>
      </View>
      <PaddedButton buttonColor={{ backgroundColor: "#D9D9D9" }}>
        Login
      </PaddedButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 21,
    paddingHorizontal: 15
  },
  loginSettingsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 15
  },
  checkBoxContainer: {},
  checkBoxText: {
    color: "#9A9A9A"
  },
  lostPasswordText: {
    color: "#8B91A0",
    textDecorationLine: "underline"
  }
});
