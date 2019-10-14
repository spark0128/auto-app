import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TextInputBasic } from "../common/TextInputCustom";
import { SecondaryButton } from "../common/Button";

export function FindPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>
        Please input your phone number you registered with. You will receive
        password on SMS.
      </Text>
      <TextInputBasic name="Phone Number" containerWidth={{ width: "100%" }} />
      <SecondaryButton
        style={styles.button}
        backgroundColor={{ backgroundColor: "#D9D9D9" }}
      >
        Request Password
      </SecondaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 25
  },
  infoText: {
    marginBottom: 18
  },
  button: {
    backgroundColor: "#D9D9D9",
    marginTop: 8
  }
});
