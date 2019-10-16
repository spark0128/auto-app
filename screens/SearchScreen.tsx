import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Platform,
  TextInput,
  Text
} from "react-native";

import { Button } from "../common/Button";
import { ListHeader } from "../components/Search/ListHeader";
import { ListItemImageNumCars } from "../common/ListItem";
import { FullScreenSpinner } from "../common/FullScreenSpinner";
import { getBrands } from "../apis/BrandAPI";
import { searchCarsCount } from "../apis/CarAPI";

export default function SearchScreen(props) {
  // States
  const [isInitialized, setIsInitialized] = useState(false);
  const [popularBrands, setPopularBrands] = useState([]);
  const [otherBrands, setOtherBrands] = useState([]);
  const [searchCount, setSearchCount] = useState(null);

  // Lifecycle methods
  useEffect(() => {
    // Get brands
    (async () => {
      try {
        setIsInitialized(false);
        const res = await getBrands();
        setPopularBrands(res.data.popularBrands);
        setOtherBrands(res.data.otherBrands);
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      } finally {
        setIsInitialized(true);
      }
    })();

    // Get search count
    (async () => {
      try {
        const res = await searchCarsCount();
        setSearchCount(res.data.count);
      } catch (error) {
        // TODO: Enhnace error handling
        console.error(error);
      }
    })();
  }, []);

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
        {isInitialized ? (
          <>
            {popularBrands.length ? (
              <>
                <ListHeader title="Popular Brands" />
                {popularBrands.map((brand) => {
                  return (
                    <ListItemImageNumCars
                      key={brand.id}
                      name={brand.name}
                      imageUrl={brand.image}
                      imageSize={{
                        width: 56,
                        height: 35,
                        resizeMode: "contain"
                      }}
                      numCars={brand.numCars}
                      onPress={onBrandClick(brand)}
                    />
                  );
                })}
              </>
            ) : null}
            {otherBrands.length ? (
              <>
                <ListHeader title="Other Brands" />
                {otherBrands.map((brand) => {
                  return (
                    <ListItemImageNumCars
                      key={brand.id}
                      name={brand.name}
                      imageUrl={brand.image}
                      imageSize={{
                        width: 56,
                        height: 32,
                        resizeMode: "contain"
                        // borderColor: "#eee",
                        // borderWidth: 1
                      }}
                      numCars={brand.numCars}
                      onPress={onBrandClick(brand)}
                    />
                  );
                })}
              </>
            ) : null}
          </>
        ) : (
          <FullScreenSpinner />
        )}
      </ScrollView>
      <Button
        backgroundColor={styles.searchButtonContainer}
        buttonName={
          searchCount === null ? "Search" : `Search (${searchCount} Cars)`
        }
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
          width: "100%",
          height: 35,
          color: "#fff",
          backgroundColor: "#0733B5",
          paddingHorizontal: 22,
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
