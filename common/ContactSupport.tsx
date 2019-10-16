import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function ContactSupport(props) {
  return (
    <View style={styles.infoContainer}>
      <Image
        style={styles.infoIcon}
        source={{ uri: "https://i.imgur.com/LVVh7tQ.png" }}
      ></Image>
      <Text style={styles.infoText}>
        Please contact 010-395-677 or support@automate-kh.com for any issues.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    alignContent: "center",
    marginTop: 15,
    justifyContent: "center",
    paddingHorizontal: 2
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
