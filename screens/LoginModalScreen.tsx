import React from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import HeaderIcon from "../components/HeaderIcon";

export default function LoginModalScreen(props) {

  // Handlers
  const onSignInClick = () => {
    props.navigation.push('Login');
  };

  const onSignUpClick = () => {
    props.navigation.push('Signup');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headingText}>
        <Text>Login to Automate{"\n"}</Text>
        <Text style={styles.headingTextBold}>
          to find more information on local cars!
        </Text>
      </Text>
      <View style={styles.socialButtonFB}>
        <Image source={{}}></Image>
        <Text style={styles.socialButtonText}>Login with Facebook</Text>
      </View>
      <View style={styles.socialButtonWeChat}>
        <Image source={{}}></Image>
        <Text style={styles.socialButtonText}>Login with WeChat</Text>
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={onSignInClick}>
        <Image source={{}}></Image>
        <Text style={styles.socialButtonText}>Login with Username</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={onSignUpClick}>
        <Image source={{}}></Image>
        <Text style={styles.buttonText}>Sign up for account</Text>
      </TouchableOpacity>
      <View style={styles.loginDealerButton}>
        <Image source={{}}></Image>
        <Text style={styles.loginDealerButtonText}>Login as Dealer</Text>
      </View>
      <Text style={styles.signupDealer}>Sign up for Dealer</Text>
      <View style={styles.infoContainer}>
        <Image
          style={styles.infoIcon}
          source={{ uri: "https://i.imgur.com/LVVh7tQ.png" }}
        ></Image>
        <Text style={styles.infoText}>
          Please contact 010-395-677 or support@automate-kh.com for any login
          issues.
        </Text>
      </View>
    </ScrollView>
  );
}

LoginModalScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Sign In",
    headerLeft: <>
      <TouchableOpacity onPress={() => { navigation.dismiss() }}>
        <HeaderIcon name="md-close" />
      </TouchableOpacity>
    </>,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30
  },
  exitButton: {
    width: 17,
    height: 17,
    resizeMode: "contain",
    marginBottom: 48,
    alignSelf: "flex-start"
  },
  headingText: {
    fontSize: 24,
    lineHeight: 29,
    marginBottom: 56,
    marginTop: 44,
  },
  headingTextBold: {
    fontWeight: "600"
  },
  socialButtonFB: {
    width: "100%",
    height: 48,
    backgroundColor: "#3A5998",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  socialButtonWeChat: {
    width: "100%",
    height: 48,
    backgroundColor: "#20C300",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#2A73E8",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
  },
  signupButton: {
    width: "100%",
    height: 48,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 65,
    borderColor: "#9A9A9A",
    borderWidth: 1
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 15
  },
  buttonText: {
    color: "#2A73E8",
    fontSize: 15
  },
  loginDealerButton: {
    width: "100%",
    height: 44,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderColor: "#9A9A9A",
    borderWidth: 1
  },
  loginDealerButtonText: {
    color: "#6E6E6E",
    fontSize: 14
  },
  signupDealer: {
    textDecorationLine: "underline",
    fontSize: 14,
    color: "#8E8E8E",
    marginBottom: 36,
    alignSelf: "center"
  },
  infoContainer: {
    flexDirection: "row",
    alignSelf: "center"
  },
  infoIcon: {
    width: 12,
    height: 12,
    resizeMode: "contain",
    marginRight: 6
  },
  infoText: {
    fontSize: 11,
    color: "#838CA2",
    fontWeight: "500"
  }
});
