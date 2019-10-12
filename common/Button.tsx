import React from "react";
import { Text, View } from "react-native";

export function Button(props) {
  return (
    <View style={[props.containerStyle, { width: "100%", height: 46 }]}>
      <Text {...props} style={props.style}>
        {props.children}
      </Text>
    </View>
  );
}
