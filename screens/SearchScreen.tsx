import React, { useState } from "react";
import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  Text
} from "react-native";

import Button from "../common/Button";
import { ListItem } from "react-native-elements";
import { ListHeader } from "../components/Search/ListHeader";

export default function SearchScreen(props) {
  // TODO: Get popular brands from server
  const popularBrands = [
    { id: "1", name: "Toyota" },
    { id: "2", name: "Lexus" }
  ];

  // TODO: Get other brands from server
  const otherBrands = [{ id: "1", name: "Toyota" }, { id: "2", name: "Lexus" }];

  // States
  const [search, setSearch] = useState("");

  // Handlers
  const onBrandClick = (brand) => {
    return () => {
      props.navigation.push("SelectModel", {
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
      <View style={styles.tabsContainer}>
        <View style={styles.activeTabContainer}>
          <Text style={styles.activeTabItem}>Brand</Text>
        </View>
        <View style={styles.tabContainer}>
          <Text style={styles.tabItem}>Size</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <ListHeader title="Popular brands" />
        {popularBrands.map((brand) => {
          return (
            <ListItem
              key={brand.id}
              title={brand.name}
              bottomDivider
              onPress={onBrandClick(brand)}
            />
          );
        })}
        <ListHeader title="Other brands" />
        {otherBrands.map((brand) => {
          return (
            <ListItem
              key={brand.id}
              title={brand.name}
              bottomDivider
              onPress={onBrandClick(brand)}
            />
          );
        })}
      </ScrollView>
      <Button
        viewStyle={styles.bgSearchButton}
        style={styles.textSearchButton}
        onPress={onSearchButtonClick}
      >
        Search (95,108 Cars)
      </Button>
    </>
  );
}

SearchScreen.navigationOptions = {
  // title: "Search"
  header: (
    <View
      style={{
        height: Platform.OS === "ios" ? 94 : 72,
        backgroundColor: "#1450F8",
        // position: "relative",
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
  tabsContainer: {
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
  tabContainer: {
    height: 44,
    justifyContent: "center"
  },
  tabItem: {
    color: "#666666",
    fontSize: 13,
    paddingHorizontal: 3
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  listHeader: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  bgSearchButton: {
    backgroundColor: "#191919",
    justifyContent: "center",
    alignItems: "center"
  },
  textSearchButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500"
  }
});
