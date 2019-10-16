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

export function ListItemModal(props) {
  return (
    <TouchableWithoutFeedback {...props}>
      <View style={styles.listItemModal}>
        <Text style={[props.extraMargin, styles.listItemName]}>
          {props.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export function ListItemColor(props) {
  return (
    <TouchableWithoutFeedback {...props}>
      <View
        style={[
          props.backgroundColor,
          props.border,
          styles.listItemColor,
          props.position
        ]}
      >
        <Text style={[props.textColor, styles.listItemColorName]}>
          {props.name}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export function ListItemRightArrow(props) {
  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={styles.listItemRightArrow}>
        <Text style={{ fontSize: 16 }}>{props.name}</Text>
        <Image
          style={{ width: 8, height: 18, resizeMode: "contain" }}
          source={{
            uri:
              "https://s3-ap-southeast-1.amazonaws.com/cdn.automate-kh.com/assets/images/bg_right_arrow_list.png"
          }}
        ></Image>
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
  listItemName: {},
  numCars: {
    color: "#999999",
    marginLeft: "auto"
  },
  listItemSelectBrand: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 9,
    marginVertical: 20
  },
  listItemSelectBrandLogo: {
    width: 66,
    height: 38,
    marginBottom: 10
  },
  listItemSelectBrandName: {
    color: "#A7A8B6",
    fontSize: 13
  },
  listItemModal: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingLeft: 18,
    paddingRight: 27,
    height: 55,
    alignItems: "center",
    borderBottomColor: "#D8D8DA",
    borderBottomWidth: 1
  },
  listItemColor: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 7,
    marginBottom: 5
  },
  listItemColorName: {
    fontSize: 13
  },
  listItemRightArrow: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#D8D8DA",
    borderBottomWidth: 1
  }
});
