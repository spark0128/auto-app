import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback
} from "react-native";

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

export function ListItemSelectBrand(props) {
  return (
    <TouchableWithoutFeedback {...props}>
      <View style={styles.listItemSelectBrand}>
        <Image
          style={styles.listItemSelectBrandLogo}
          source={{ uri: props.image }}
        />
        <Text style={styles.listItemSelectBrandName}>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
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
  },
  listItemSelectBrand: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
    marginBottom: 40
  },
  listItemSelectBrandLogo: {
    width: 66,
    height: 38,
    marginBottom: 10
  },
  listItemSelectBrandName: {
    color: "#A7A8B6",
    fontSize: 13
  }
});
