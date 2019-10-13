import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { TextInputBasic, TextInputWithButton } from "../common/TextInputCustom";
import { PaddedButton } from "../common/Button";
import { PasswordInputWithConfirm } from "../common/PasswordInput";

export default function SignupScreen() {
  return (
    <ScrollView style={styles.container}>
      <TextInputBasic name="First Name" containerWidth={{ width: "100%" }} />
      <TextInputBasic name="Last Name" containerWidth={{ width: "100%" }} />
      <TextInputWithButton
        name="Phone Number"
        containerWidth={{ width: "100%" }}
        buttonName="Verify"
      />
      <TextInputWithButton
        name="Verification Number"
        containerWidth={{ width: "100%" }}
        buttonName="Confirm"
      />
      <PasswordInputWithConfirm />
      <View style={styles.signupAgreementContainer}>
        <View style={styles.checkBoxContainer}>
          <Image></Image>
          <Text style={styles.checkBoxText}>
            I agree to Automate Service Agreement (Required)
          </Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Image></Image>
          <Text style={styles.checkBoxText}>
            I agree to Personal Privacy and Data Collection (Required)
          </Text>
        </View>
      </View>
      <PaddedButton
        style={styles.signupButton}
        buttonColor={{ backgroundColor: "#D9D9D9" }}
      >
        Sign up
      </PaddedButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 21,
    paddingHorizontal: 15
  },
  signupAgreementContainer: {
    marginTop: 20
  },
  checkBoxContainer: {
    marginBottom: 10
  },
  checkBoxText: {
    fontSize: 13,
    color: "#8A8A8A"
  },
  signupButton: {
    backgroundColor: "#8A8A8A",
    paddingVertical: 19,
    marginTop: 17
  }
});
