import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ListItemColor } from "../../common/ListItem";

export function SelectColor(props) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text>Select Color</Text>
      </View>
      <View style={styles.listContainer}>
        <ListItemColor
          name="White"
          backgroundColor={{ backgroundColor: "#fff" }}
          border={{ borderColor: "#E7E7E7", borderWidth: 1 }}
          textColor={{ color: "#000" }}
          onPress={() => props.click("White")}
        />
        <ListItemColor
          name="Black"
          backgroundColor={{ backgroundColor: "#000" }}
          border={{ borderColor: "#000", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Black")}
        />
        <ListItemColor
          name="Silver"
          backgroundColor={{ backgroundColor: "#C0C0C0" }}
          border={{ borderColor: "#C0C0C0", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Silver")}
        />
        <ListItemColor
          name="Grey"
          backgroundColor={{ backgroundColor: "#696969" }}
          border={{ borderColor: "#696969", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Grey")}
        />
        <ListItemColor
          name="Blue"
          backgroundColor={{ backgroundColor: "#3862D7" }}
          border={{ borderColor: "#3862D7", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Blue")}
        />
        <ListItemColor
          name="Red"
          backgroundColor={{ backgroundColor: "#F13239" }}
          border={{ borderColor: "#F13239", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Red")}
        />
        <ListItemColor
          name="Orange"
          backgroundColor={{ backgroundColor: "#F37D40" }}
          border={{ borderColor: "#F37D40", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Orange")}
        />
        <ListItemColor
          name="Beige"
          backgroundColor={{ backgroundColor: "#EAE3C7" }}
          border={{ borderColor: "#EAE3C7", borderWidth: 1 }}
          textColor={{ color: "#000" }}
          onPress={() => props.click("Beige")}
        />
        <ListItemColor
          name="Green"
          backgroundColor={{ backgroundColor: "#417505" }}
          border={{ borderColor: "#417505", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Green")}
        />
        <ListItemColor
          name="Purple"
          backgroundColor={{ backgroundColor: "#A94295" }}
          border={{ borderColor: "#A94295", borderWidth: 1 }}
          textColor={{ color: "#fff" }}
          onPress={() => props.click("Purple")}
        />
        <View style={{ marginRight: "auto", flexDirection: "row" }}>
          <ListItemColor
            name="Brown"
            backgroundColor={{ backgroundColor: "#A07035" }}
            border={{ borderColor: "#A07035", borderWidth: 1 }}
            textColor={{ color: "#fff" }}
            onPress={() => props.click("Brown")}
          />
          <ListItemColor
            name="Etc"
            backgroundColor={{ backgroundColor: "#fff" }}
            border={{ borderColor: "#E7E7E7", borderWidth: 1 }}
            textColor={{ color: "#000" }}
            onPress={() => props.click("Etc")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 52,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E1E1E1"
  },
  listContainer: {
    paddingHorizontal: 2,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap"
  }
});
