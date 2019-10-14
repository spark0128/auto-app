import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export function ListItemBasic(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={styles.listItem}>
        <Text style={[props.extraMargin, styles.listItemName]}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function ListItemImageNumCars(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={styles.listItem}>
        <Image
          style={[styles.listItemImage, props.imageSize]}
          source={{ uri: props.imageUrl }}
        />
        <Text style={[props.extraMargin, styles.listItemName]}>
          {props.name}
        </Text>
        <Text style={styles.numCars}>{props.numCars}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingLeft: 18,
    paddingRight: 27,
    height: 55,
    alignItems: "center",
    borderBottomColor: "#F4F4F4",
    borderBottomWidth: 1
  },
  listItemImage: {
    marginRight: 6
  },
  listItemName: {
    fontWeight: "500"
  },
  numCars: {
    color: "#999999",
    marginLeft: "auto"
  }
});
