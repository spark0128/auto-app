import React from "react";
import { View, Text } from "react-native";
import { ListItemModal } from "../../common/ListItem";

export function SelectFuel(props) {
  return (
    <View>
      <ListItemModal name="Gasoline" onPress={() => props.click("Gasoline")} />
      <ListItemModal name="Diesel" onPress={() => props.click("Diesel")} />
      <ListItemModal name="Hybrid" onPress={() => props.click("Hybrid")} />
      <ListItemModal name="Electric" onPress={() => props.click("Electric")} />
      <ListItemModal name="LPG" onPress={() => props.click("LPG")} />
      <ListItemModal name="Etc" onPress={() => props.click("Etc")} />
    </View>
  );
}
