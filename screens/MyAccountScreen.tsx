import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SellYourCar } from "../components/MyAccount/SellYourCar";
import { ListItems } from "../components/MyAccount/ListItems";

export default function MyAccountScreen(props) {
  // Redux
  const isLoggedIn = useSelector((state) => !!state.UserReducer.user);
  const user = useSelector((state) => state.UserReducer.user);

  // Handers
  const onClickLoginOrSetting = () => {
    if (isLoggedIn) {
      // TODO: navigate setting
    } else {
      props.navigation.navigate('LoginModal');
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.accountContainer}>
            <View style={styles.mainTextContainer}>
              <Text style={styles.mainText}>
                {isLoggedIn ? `${user.firstName} ${user.lastName}` :  "Login or Sign up"}</Text>
            </View>
            <TouchableOpacity style={styles.subTextContainer} onPress={onClickLoginOrSetting}>
              <Text style={styles.subText}>
                {isLoggedIn ? 'My Page and Settings' : 'Login for full access'}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <Text>Icon1</Text>
            <Text>Icon2</Text>
            <Text>Icon3</Text>
          </View>
        </View>
        <SellYourCar />
        <View style={{ backgroundColor: "#F2F2F2", height: 10 }} />
        <ListItems />
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
    paddingHorizontal: 20
  },
  mainTextContainer: {
    marginBottom: 6
  },
  mainText: {
    fontSize: 21, // TODO: 리스폰시브 폰트 사이즈
    fontWeight: "700",
    color: "#fff"
  },
  subText: {
    fontSize: 13,
    color: "#8EABFE"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: "auto"
  }
});
