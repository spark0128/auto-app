import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInputBase } from "../common/TextInputBase";
import { PaddedButton } from "../common/Button";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <TextInputBase name="First Name" containerWidth={{ width: "100%" }} />
      <TextInputBase name="Last Name" containerWidth={{ width: "100%" }} />
      <TextInputBase
        name="Phone Number(without “-“)"
        containerWidth={{ width: "100%" }}
      />
      <TextInputBase
        name="VerificationNumber"
        containerWidth={{ width: "100%" }}
      />
      <View style={styles.signupAgreementsContainer}>
        <View style={styles.checkBoxContainer}>
          <Image></Image>
          <Text style={styles.checkBoxText}>
            I agree to Automate Service Agreement (Required)
          </Text>
        </View>
        <Text style={styles.lostPasswordText}>Lost Password?</Text>
      </View>
      <PaddedButton buttonColor={{ backgroundColor: "#D9D9D9" }}>
        Login
      </PaddedButton>
      <View style={styles.infoContainer}>
        <Image
          style={styles.infoIcon}
          source={{ uri: "https://i.imgur.com/LVVh7tQ.png" }}
        ></Image>
        <Text style={styles.infoText}>
          Please contact 010-395-677 or support@automate-kh.com{"\n"}for any
          login issues.
        </Text>
      </View>
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
  },
  infoContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 15
  },
  infoIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    marginRight: 6
  },
  infoText: {
    fontSize: 11,
    color: "#838CA2"
  }
});
