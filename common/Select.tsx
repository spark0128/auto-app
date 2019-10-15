import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Select(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={[styles.container, props.containerWidth]}>
        {props.value ? (
          <Text style={styles.value}>{props.value}</Text>
        ) : (
          <Text style={styles.name}>{props.name}</Text>
        )}
        <Image
          style={styles.dropdownArrow}
          source={{ uri: "https://i.imgur.com/cqyJN0M.png" }}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderColor: "#CFCFCF",
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 14,
    marginBottom: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  name: {
    color: "#9A9A9A",
    fontSize: 15
  },
  value: {
    color: "#000",
    fontSize: 15
  },
  dropdownArrow: {
    width: 7,
    height: 5,
    resizeMode: "contain"
  }
});
