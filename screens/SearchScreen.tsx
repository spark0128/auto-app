import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  Text,
  Image
} from "react-native";

import { Button } from "../common/Button";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";

export default function SearchScreen(props) {
  // TODO: Get popular brands from server
  const popularBrands = [
    {
      id: "1",
      name: "Toyota",
      imageUrl: "https://i.imgur.com/3PpGDOh.png",
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
    }
  ];

  // TODO: Get other brands from server
  const otherBrands = [
    {
      id: "1",
      name: "Hyundai",
      imageUrl: "https://i.imgur.com/XOx596s.png",
      numCars: 43
    },
    {
      id: "2",
      name: "Kia",
      imageUrl: "https://i.imgur.com/P9449P7.png",
      numCars: 20
    },
    {
      id: "3",
      name: "SsangYong",
      imageUrl: "https://i.imgur.com/K4LJdqf.png",
      numCars: 72
    }
  ];

  // States
  const [search, setSearch] = useState("");

  // Handlers
  const onBrandClick = (brand) => {
    return () => {
      props.navigation.push("SearchModel", {
        brandId: brand.id,
        brandName: brand.name
      });
    };
  };

  const onSearchButtonClick = () => {
    // TODO: Pass search query option
    props.navigation.push("SearchResult");
  };

  return (
    <>
      <View style={styles.tabContainer}>
        <View style={styles.activeTabContainer}>
          <Text style={styles.activeTabItem}>Brand</Text>
        </View>
        <View style={styles.tabItemContainer}>
          <Text style={styles.tabItem}>By Size</Text>
        </View>
      </View>
      <ScrollView style={styles.listContainer}>
        <ListHeader title="Popular Brands" />
        {popularBrands.map((brand) => {
          return (
            <ListItemImageNumCars
              key={brand.id}
              name={brand.name}
              imageUrl={brand.imageUrl}
              imageSize={{ width: 56, height: 32 }}
              numCars={brand.numCars}
              onPress={onBrandClick(brand)}
            />
          );
        })}
        <ListHeader title="Other Brands" />
        {otherBrands.map((brand) => {
          return (
            <ListItemImageNumCars
              key={brand.id}
              name={brand.name}
              imageUrl={brand.imageUrl}
              imageSize={{ width: 56, height: 32 }}
              numCars={brand.numCars}
              onPress={onBrandClick(brand)}
            />
          );
        })}
      </ScrollView>
      <Button
        backgroundColor={styles.searchButtonContainer}
        buttonName="Search (95,108 Cars)"
        onPress={onSearchButtonClick}
      ></Button>
    </>
  );
}

SearchScreen.navigationOptions = {
  header: (
    <View
      style={{
        height: Platform.OS === "ios" ? 94 : 72,
        backgroundColor: "#1450F8",
        justifyContent: "flex-end",
        paddingHorizontal: 12
      }}
    >
      <TextInput
        style={{
          height: 35,
          backgroundColor: "#0733B5",
          paddingLeft: 22,
          marginBottom: Platform.OS === "ios" ? 9 : 6,
          borderRadius: 2
        }}
        placeholder="Search a car here."
        placeholderTextColor="#6183E5"
      ></TextInput>
    </View>
  )
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 44,
    paddingLeft: 31
  },
  activeTabContainer: {
    height: 44,
    borderBottomColor: "#1350F9",
    borderBottomWidth: 1,
    justifyContent: "center",
    marginRight: 35
  },
  activeTabItem: {
    color: "#1350F9",
    fontSize: 13,
    paddingHorizontal: 3
  },
  tabItemContainer: {
    height: 44,
    justifyContent: "center"
  },
  tabItem: {
    color: "#666666",
    fontSize: 13,
    paddingHorizontal: 3
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  listHeader: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  searchButtonContainer: {
    backgroundColor: "#191919"
  }
});
