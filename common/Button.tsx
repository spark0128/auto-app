import React from "react";
import { Text, View } from "react-native";

const Button = (props) => {
  return (
    <View style={[props.viewStyle, { width: "100%", height: 46 }]}>
      <Text {...props} style={props.style}>
        {props.children}
      </Text>
    </View>
  );
};

export default Button;
