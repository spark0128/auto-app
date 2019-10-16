import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ListItemRightArrow } from "../common/ListItem";

import { SellYourCarButton } from "../components/MyAccount/SellYourCarButton";

export default function MyAccountScreen(props) {
  // Redux
  const isLoggedIn = useSelector((state) => !!state.UserReducer.user);
  const user = useSelector((state) => state.UserReducer.user);

  // Handers
  const onClickLoginOrSetting = () => {
    if (isLoggedIn) {
      // TODO: navigate setting
    } else {
      props.navigation.navigate("LoginModal");
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <View style={styles.mainTextContainer}>
              <Text style={styles.mainText}>
                {isLoggedIn
                  ? `${user.firstName} ${user.lastName}`
                  : "Login or Sign up"}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.subTextContainer}
              onPress={onClickLoginOrSetting}
            >
              <Text style={styles.subText}>
                {isLoggedIn ? "My Page and Settings" : "Login for full access"}
              </Text>
              <Image
                style={{ width: 6, height: 13.5, resizeMode: "contain" }}
                source={{
                  uri:
                    "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_right_arrow_login.png"
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Text>Icon1</Text>
            <Text>Icon2</Text>
            <Text>Icon3</Text>
          </View>
        </View>
        <SellYourCarButton />
        <View
          style={{
            backgroundColor: "#F2F2F2",
            height: 10,
            borderTopColor: "#D8D8DA",
            borderTopWidth: 1
          }}
        />
        <ListItemRightArrow name="Selling" />
        <ListItemRightArrow name="Purchase History" />
        <View style={{ backgroundColor: "#F2F2F2", height: 10 }} />
      </View>
    </>
  );
}

MyAccountScreen.navigationOptions = {
  title: "My Account"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: "#1450F8",
    height: 162,
    paddingTop: 23,
    paddingBottom: 17,
    paddingHorizontal: 18
  },
  mainTextContainer: {
    marginBottom: 6
  },
  mainText: {
    fontSize: 21,
    fontWeight: "700",
    color: "#fff"
  },
  subTextContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  subText: {
    fontSize: 13,
    color: "#8EABFE",
    marginRight: 3
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "auto"
  }
});
