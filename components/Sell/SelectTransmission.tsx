import React from "react";
import { View, Text } from "react-native";
import { ListItemModal } from "../../common/ListItem";

export function SelectTransmission(props) {
  return (
    <View>
      <ListItemModal
        name="Automatic"
        onPress={() => props.click("Automatic")}
      />
      <ListItemModal name="Manual" onPress={() => props.click("Manual")} />
    </View>
  );
}
