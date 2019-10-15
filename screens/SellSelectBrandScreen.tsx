import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItemSelectBrand } from "../common/ListItem";

export default function SellSelectBrandScreen() {
  const brands = [
    {
      id: "1",
      name: "Toyota",
      imageUrl: "https://i.imgur.com/3PpGDOh.png",
      imageUnhighlighted: "",
      imageHighlighted: "",
      numCars: 53
    },
    {
      id: "2",
      name: "Lexus",
      imageUrl: "https://i.imgur.com/jTxYza7.png",
      numCars: 101
    },
    {
      id: "3",
      name: "Land Rover",
      imageUrl: "https://i.imgur.com/kpqKr19.png",
      numCars: 88
    },
    {
      id: "4",
      name: "Ford",
      imageUrl: "https://i.imgur.com/gpXFnj2.png",
      numCars: 23
    },
    {
      id: "5",
      name: "Toyota",
      imageUrl: "https://i.imgur.com/3PpGDOh.png",
      imageUnhighlighted: "",
      imageHighlighted: "",
      numCars: 53
    },
    {
      id: "6",
      name: "Lexus",
      imageUrl: "https://i.imgur.com/jTxYza7.png",
      numCars: 101
    },
    {
      id: "7",
      name: "Land Rover",
      imageUrl: "https://i.imgur.com/kpqKr19.png",
      numCars: 88
    },
    {
      id: "8",
      name: "Ford",
      imageUrl: "https://i.imgur.com/gpXFnj2.png",
      numCars: 23
    }
  ];

  const onBrandClick = (brand) => {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.listContainer}>
        {brands.map((brand) => {
          return (
            <ListItemSelectBrand
              key={brand.id}
              name={brand.name}
              image={brand.imageUrl}
              onPress={onBrandClick(brand)}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 29
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
