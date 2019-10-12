import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export function MostRecommended() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.carImage}
          source={{
            uri: "https://i.imgur.com/1gsClCq.jpg"
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Most Recommended</Text>
        </View>
        <View>
          <Text style={styles.title}>{"2019 Lexus LX570".toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: "#D3D3D3",
    borderBottomWidth: 1
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 4 / 3
  },
  carImage: {
    width: "100%",
    height: "100%"
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 11
  },
  subTitleContainer: {
    marginBottom: 3
  },
  subTitle: {
    fontSize: 12,
    color: "#3862D7"
  },
  title: {
    fontSize: 17,
    fontWeight: "700"
  }
});
