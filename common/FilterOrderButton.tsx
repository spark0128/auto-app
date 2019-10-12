import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const FilterOrderButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.filterContainer}>
        <Image
          style={styles.filterImage}
          source={{ uri: "https://i.imgur.com/1Q68f2T.png" }}
        />
        <Text style={styles.filterText}>Filter</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.orderContainer}>
        <Image
          style={styles.orderImage}
          source={{ uri: "https://i.imgur.com/Yv2j8iT.png" }}
        />
        <Text style={styles.orderText}>Order</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    position: "absolute",
    width: 148,
    height: 30,
    bottom: 17,
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#D3D3D3",
    backgroundColor: "#fff"
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 18,
    paddingRight: 11
  },
  filterImage: {
    width: 12,
    height: 13,
    resizeMode: "contain",
    marginRight: 3
  },
  filterText: {
    fontSize: 12,
    color: "#555555"
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#D3D3D3"
  },
  orderContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 11,
    paddingRight: 18
  },
  orderImage: {
    width: 13,
    height: 13,
    resizeMode: "contain",
    marginRight: 3
  },
  orderText: {
    fontSize: 12,
    color: "#555555"
  }
});

export default FilterOrderButton;
