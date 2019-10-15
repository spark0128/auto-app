import React from "react";
import { View, Text } from "react-native";
import { ListItemModal } from "../../common/ListItem";

export function SelectExtCondition(props) {
  return (
    <View>
      <ListItemModal name="None" onPress={() => props.click("None")} />
      <ListItemModal name="Small" onPress={() => props.click("Small")} />
      <ListItemModal name="Medium" onPress={() => props.click("Medium")} />
      <ListItemModal name="High" onPress={() => props.click("High")} />
      <ListItemModal name="Serious" onPress={() => props.click("Serious")} />
    </View>
  );
}
