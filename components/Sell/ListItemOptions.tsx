import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function ListItemOptions(props) {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: props.url
          }}
        ></Image>
        <Text style={styles.iconTitle}>{props.title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export function ListItemOptionsViewAll(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={{
            uri: props.url
          }}
        ></Image>
        <Text style={styles.iconTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  icon: {
    width: 84,
    height: 78,
    resizeMode: "contain"
  },
  iconTitle: {
    fontSize: 13
  }
});
