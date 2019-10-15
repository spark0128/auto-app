import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItemSelectBrand } from "../common/ListItem";
import { TextInputWithButton } from "../common/TextInputCustom";
import { ContactSupport } from "../common/ContactSupport";
import { useDispatch } from "react-redux";
import { saveBrand } from "../redux/actions/SellYourCarActions";

export default function SellSelectBrandScreen(props) {
  const dispatch = useDispatch();

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

  const onBrandClick = (brand) => {
    return () => {
      dispatch(saveBrand(brand.name));
      props.navigation.push("SellSelectModel");
    };
  };

  // TODO: componentDidMount 밑에 브랜드나 모델 없을 시 연락하라는 텍스트 팝업하고 꺼짐
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
      {/* <View style={{ backgroundColor: "#F2F2F2", height: 10 }} /> */}
      <View style={styles.cannotFindBrandContainer}>
        <Text style={styles.cannotFindBrandTitle}>Cannot find your brand?</Text>
        <TextInputWithButton
          containerWidth={{ width: "100%" }}
          name="Type your brand here"
          buttonName="Next"
        />
      </View>
      <ContactSupport />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  listContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 16,
    paddingVertical: 9
  },
  cannotFindBrandContainer: {
    marginTop: 24,
    paddingHorizontal: 16
  },
  cannotFindBrandTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 20
  }
});
