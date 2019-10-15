import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native-gesture-handler";

export function FeaturedCarCard({ car, onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: "https://i.imgur.com/h86ZbQG.png"
          }}
        />
        <View style={styles.priceContainer}>
          <Text style={styles.textPrice}>{`$${car.price}`}</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.cardFirstLine}>
          <Text style={styles.cardName}>{car.name}</Text>
          <TouchableWithoutFeedback>
            <Image
              style={styles.liked}
              source={{ uri: "https://i.imgur.com/iqcK0sq.png" }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.cardSecondLine}>
          <Text
            style={styles.cardInfo}
          >{`${car.mileage}km \u00B7 ${car.year} \u00B7 ${car.city}`}</Text>
          <View style={styles.subInfo}>
            <View style={styles.postedAt}>
              <Image
                style={styles.bgPostedAt}
                source={{ uri: "https://i.imgur.com/agzM3uc.png" }}
              />
              <Text style={styles.textPostedAt}>{car.postedAt}</Text>
            </View>
            <View style={styles.views}>
              <Image
                style={styles.bgViews}
                source={{ uri: "https://i.imgur.com/FQvdzZj.png" }}
              />
              <Text style={styles.textViews}>{car.numViews}</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          height: 10,
          backgroundColor: "#F2F2F2",
          borderTopColor: "#D3D3D3",
          borderTopWidth: 1
        }}
      />
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center"
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 4 / 3,
    position: "relative"
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  priceContainer: {
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 12,
    paddingVertical: 5.5,
    backgroundColor: "#000"
  },
  textPrice: {
    color: "#fff",
    fontSize: 20
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 14
  },
  cardFirstLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  cardName: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 9
  },
  liked: {
    width: 20,
    height: 17.5
  },
  cardSecondLine: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline"
  },
  cardInfo: {
    fontSize: 11,
    color: "#606060"
  },
  subInfo: {
    flexDirection: "row"
  },
  postedAt: {
    flexDirection: "row"
  },
  bgPostedAt: {
    width: 11,
    height: 11,
    marginTop: 1,
    marginRight: 4
  },
  textPostedAt: {
    fontSize: 11,
    color: "#606060"
  },
  views: {
    flexDirection: "row",
    marginLeft: 7
  },
  bgViews: {
    width: 15,
    height: 9.5,
    marginTop: 2.3,
    marginRight: 4
  },
  textViews: {
    fontSize: 11,
    color: "#606060"
  }
});
