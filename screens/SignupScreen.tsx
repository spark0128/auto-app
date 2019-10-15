import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { CheckBox } from 'react-native-elements'
import { TextInputBasic, TextInputWithButton } from "../common/TextInputCustom";
import { PrimaryButton } from "../common/Button";
import { PasswordInputWithConfirm } from "../common/PasswordInput";

export default function SignupScreen() {
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationNumber, setVerificationNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPhoneConfirmed, setIsPhoneConfirmed] = useState(false);
  const [isServiceAgreementChecked, setIsServiceAgreementChecked] = useState(false);
  const [isPrivacyAgreementChecked, setIsPrivacyAgreementChecked] = useState(false);

  // Handlers
  const onPressVerify = () => {
    // TODO: Request phone verification to server
  }

  const onPressConfirm = () => {
    // TODO: Confirm phone verification to server
    setIsPhoneConfirmed(true);
  }

  const onPressSignup = () => {
    if (!firstName || !lastName || !phoneNumber || !username || !password) {
      return alert('Fill in all information');
    }
    if (!isPhoneConfirmed) {
      return alert('Confirm your phone number');
    }
    if (password !== passwordConfirmation) {
      return alert('Check your password');
    }
    if (!isServiceAgreementChecked) {
      return alert('Check service agreement');
    }
    if (!isPrivacyAgreementChecked) {
      return alert('Check privacy agreement');
    }
    // TODO: Request signup to server
  }

  return (
    <ScrollView style={styles.container}>
      <TextInputBasic
        name="First Name"
        containerWidth={{ width: "100%" }}
        onChangeText={setFirstName}
        value={firstName} />
      <TextInputBasic
        name="Last Name"
        containerWidth={{ width: "100%" }}
        onChangeText={setLastName}
        value={lastName} />
      <TextInputWithButton
        name="Phone Number"
        containerWidth={{ width: "100%" }}
        buttonName="Verify"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        onPress={onPressVerify}
      />
      <TextInputWithButton
        name="Verification Number"
        containerWidth={{ width: "100%" }}
        buttonName="Confirm"
        onChangeText={setVerificationNumber}
        value={verificationNumber}
        onPress={onPressConfirm}
      />
      <TextInputBasic
        name="Username"
        containerWidth={{ width: "100%" }}
        onChangeText={setUsername}
        value={username} />
      <PasswordInputWithConfirm
        onChangePassword={setPassword}
        onChangePasswordConfirmation={setPasswordConfirmation}
        password={password}
        passwordConfirmation={passwordConfirmation}
      />
      <View style={styles.signupAgreementContainer}>
        <CheckBox
          title="I agree to Automate Service Agreement (Required)"
          checked={isServiceAgreementChecked}
          textStyle={styles.checkBoxText}
          containerStyle={styles.checkBoxContainer}
          onPress={() => setIsServiceAgreementChecked(!isServiceAgreementChecked) } />
        <CheckBox
          title="I agree to Personal Privacy and Data Collection (Required)"
          checked={isPrivacyAgreementChecked}
          textStyle={styles.checkBoxText}
          containerStyle={styles.checkBoxContainer}
          onPress={() => setIsPrivacyAgreementChecked(!isPrivacyAgreementChecked) } />
      </View>
      <PrimaryButton
        style={styles.signupButton}
        backgroundColor={{ backgroundColor: "#D9D9D9" }}
        onPress={onPressSignup}
      >
        Sign up
      </PrimaryButton>
    </ScrollView>
  );
}

SignupScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Sign up for account",
  };
};

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
    marginBottom: 10,
    width: "100%",
    borderWidth: 0,
    backgroundColor: "transparent",
    paddingLeft: 0,
    paddingTop: 0,
  },
  checkBoxText: {
    fontSize: 13,
    color: "#8A8A8A"
  },
  signupButton: {
    marginTop: 17
  }
});
