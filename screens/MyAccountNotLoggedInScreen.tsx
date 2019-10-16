import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SellYourCar } from "../components/MyAccount/SellYourCarButton";
import { ListItems } from "../components/MyAccount/ListItems";

export default function MyAccountNotLoggedInScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.accountContainer}>
            <View style={styles.mainTextContainer}>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.mainText}>Login or Sign up</Text>
              </TouchableOpacity>
              <Image></Image>
            </View>
            <View style={styles.subTextContainer}>
              <Text style={styles.subText}>Login for full access</Text>
              <Image></Image>
            </View>
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

MyAccountNotLoggedInScreen.navigationOptions = {
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
