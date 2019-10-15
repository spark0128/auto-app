import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function MostViewed() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Most Viewed</Text>
        <Text style={styles.subTitle}>Updates every 12 hours</Text>
      </View>
      <View style={styles.tabContainer}>
        <Text>All</Text>
        <Text>Used</Text>
        <Text>New</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 512,
    backgroundColor: "green",
    paddingHorizontal: 14,
    paddingVertical: 20
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 10
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
    marginRight: 9
  },
  subTitle: {
    fontSize: 12,
    color: "#9B9B9B"
  },
  tabContainer: {
    flexDirection: "row"
  }
});
