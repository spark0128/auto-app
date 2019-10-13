import React from "react";
import { View, Text } from "react-native";
import { TextInputBasic } from "../common/TextInputCustom";

const FindPasswordScreen = () => {
  return (
    <View>
      <Text>
        Please input your phone number you registered with. You will receive
        password on SMS.
      </Text>
    </View>
  );
};

export default FindPasswordScreen;
