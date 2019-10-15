import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Overlay, ListItem } from "react-native-elements";

const ORDER_OPTIONS = [
  'Most Popular',
  'Recent Post',
  'Recent Post',
  'Price - Highest',
  'Newest Year',
  'Lowest Mileage',
];

export function OrderOverlay(props) {
  return (
    <Overlay
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
      overlayStyle={styles.overlay}>
      <ScrollView>
        {ORDER_OPTIONS.map((value, i) => <ListItem key={i} title={value} bottomDivider onPress={() => props.onPressItem(value)} />)}
      </ScrollView>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 0,
    width: '100%',
    height: 320,
  },
});
