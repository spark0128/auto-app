import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInputBasic } from "../common/TextInputCustom";
import { SecondaryButton } from "../common/Button";
import handleResponseError from '../libs/handleResponseError';
import AuthTokenService from '../services/AuthTokenService';
import { signin } from "../apis/AuthAPI";

export default function LoginScreen(props) {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSigninSubmitting, setIsSigninSubmitting] = useState(false);

  // Handlers
  const onPressSignin = async () => {
    if (!username || !password) {
      return alert('Fill in all information');
    }

    try {
      setIsSigninSubmitting(true);
      const res = await signin(username, password);
      const { data } = res;
      await AuthTokenService.saveToken(data.token);
      props.navigation.dismiss();
    } catch (error) {
      return handleResponseError(error);
    } finally {
      setIsSigninSubmitting(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInputBasic
        name="Username"
        containerWidth={{ width: "100%" }}
        onChangeText={setUsername}
        value={username} />
      <TextInputBasic
        name="Password"
        containerWidth={{ width: "100%" }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true} />
      <View style={styles.loginSettingsContainer}>
        <View style={styles.checkBoxContainer}>
          <Image></Image>
          <Text style={styles.checkBoxText}>Stay logged in</Text>
        </View>
        <Text style={styles.lostPasswordText}>Lost Password?</Text>
      </View>
      <SecondaryButton
        backgroundColor={{ backgroundColor: "#D9D9D9" }}
        onPress={onPressSignin}
        loading={isSigninSubmitting}>
        Login
      </SecondaryButton>
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

LoginScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Sign In",
  };
};

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
