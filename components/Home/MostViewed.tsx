import React from "react";
import { View, StyleSheet, Text } from "react-native";

export function MostViewed() {
  return (
    <View style={styles.container}>
      <Text>Most Viewed Section</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 512,
    backgroundColor: "green",
    justifyContent: "center",
    alignContent: "center"
  }
});
