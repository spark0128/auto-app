import React from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import HeaderIcon from "../components/HeaderIcon";
import { ContactSupport } from "../common/ContactSupport";

LoginModalScreen.navigationOptions = ({ navigation }) => {
  return {
    header: (
      <View
        style={{
          height: Platform.OS === "ios" ? 94 : 72,
          backgroundColor: "#fff",
          justifyContent: "flex-end",
          paddingBottom: 20
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 30,
            paddingRight: 25
          }}
        >
          <TouchableOpacity onPress={() => navigation.dismiss()}>
            <Image
              style={{ width: 17, height: 17, resizeMode: "contain" }}
              source={{
                uri:
                  "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/btn_exit_grey.png"
              }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                color: "#454545",
                textDecorationLine: "underline"
              }}
            >
              Sign up for Dealer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  };
};

export default function LoginModalScreen(props) {
  const { height } = Dimensions.get("window");
  const navigationBarHeight = Platform.OS === "ios" ? 64 : 54;

  // Handlers
  const onSignInClick = () => {
    props.navigation.push("Login");
  };

  const onSignUpClick = () => {
    props.navigation.push("Signup");
  };

  return (
    <>
      <ScrollView>
        <View
          style={{
            height:
              Platform.OS === "ios"
                ? height - 94 - navigationBarHeight
                : height - 72 - navigationBarHeight,
            paddingHorizontal: 30,
            justifyContent: "space-between",
            paddingVertical: 58
          }}
        >
          <Text style={styles.headingText}>
            <Text>Login to Automate{"\n"}</Text>
            <Text style={styles.headingTextBold}>
              to find more information on local cars!
            </Text>
          </Text>
          <View>
            <TouchableOpacity onPress={onSignInClick}>
              <View style={styles.loginButton}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: "contain",
                    position: "absolute",
                    top: 10,
                    left: 19
                  }}
                  source={{
                    uri:
                      "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_user_login.png"
                  }}
                ></Image>
                <Text style={styles.buttonTextWhite}>Login User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.socialButtonFB}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: "contain",
                    position: "absolute",
                    top: 10,
                    left: 19
                  }}
                  source={{
                    uri:
                      "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_facebook.png"
                  }}
                ></Image>
                <Text style={styles.buttonTextWhite}>Login with Facebook</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8}>
              <View style={styles.socialButtonWeChat}>
                <Image
                  style={{
                    width: 28,
                    height: 28,
                    resizeMode: "contain",
                    position: "absolute",
                    top: 10,
                    left: 19
                  }}
                  source={{
                    uri:
                      "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_wechat.png"
                  }}
                ></Image>
                <Text style={styles.buttonTextWhite}>Login with WeChat</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signupButton}
              onPress={onSignUpClick}
            >
              <Image source={{}}></Image>
              <Text style={styles.buttonText}>Sign up for account</Text>
            </TouchableOpacity>
            <ContactSupport />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    lineHeight: 30
  },
  headingTextBold: {
    fontWeight: "600"
  },
  loginButton: {
    width: "100%",
    height: 48,
    backgroundColor: "#2A73E8",
    borderRadius: 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8
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

  signupButton: {
    width: "100%",
    height: 48,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 100,
    borderColor: "#9A9A9A",
    borderWidth: 1
  },
  buttonTextWhite: {
    color: "#fff",
    fontSize: 15
  },
  buttonTextBlue: {
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
  }
});
