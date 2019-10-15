import React from "react";
import { View, Text } from "react-native";
import { ListItemModal } from "../../common/ListItem";

export function SelectCondition(props) {
  return (
    <View>
      <ListItemModal name="Used" onPress={() => props.click("Used")} />
      <ListItemModal name="New" onPress={() => props.click("New")} />
    </View>
  );
}
