import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  CheckBox,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Select } from "../common/Select";
import { TextInputWithUnit } from "../common/TextInputCustom";
import Carousel from "../components/Sell/Carousel";

export default function CarInfo(props) {
  // TODO: Text Validation
  // TODO: Screen move up when keyboard popup

  const screenWidth = Math.round(Dimensions.get("window").width);
  const paddingHorizontal = 15;

  // Redux
  const photos = useSelector((state) => state.SellYourCarReducer.photos);

  // States
  const [checked, setChecked] = useState([]);

  // Handlers
  const onPhotoClick = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
        return;
      }
    }
    props.navigation.navigate("SelectPhoto");
  };

  const onBrandModelButtonClick = () => {
    props.navigation.push("SellSelectBrand");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Car Information</Text>
        {photos.length ? (
          <Carousel photos={photos} />
        ) : (
          <TouchableOpacity
            style={styles.photoUploadContainer}
            onPress={onPhotoClick}
          >
            <Text style={styles.photoTitle}>Car Photos Upload</Text>
            <Text style={styles.photoSubTitle}>
              Please upload in order (Min. 5 photos).
            </Text>
          </TouchableOpacity>
        )}
        <Text style={styles.photoGuideText}>See Our Photo Guide</Text>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          <Select name="Brand / Model" onPress={onBrandModelButtonClick} />
          <View style={styles.doubleInputContainer}>
            <Select
              name="Year"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
            <Select
              name="Condition"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
          </View>
          <View style={styles.doubleInputContainer}>
            <Select
              name="Transmission"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
            <Select
              name="Fuel"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
          </View>
          <View style={styles.doubleInputContainer}>
            <TextInputWithUnit
              name="Mileage"
              unit="km"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
            <TextInputWithUnit
              name="Displacement"
              unit="cc"
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
            />
          </View>
          <Select
            name="Color"
            containerWidth={{
              width: screenWidth / 2 - paddingHorizontal - 3.5
            }}
          />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Exterior Condition</Text>
          <Select name={`Scratches & Dents`} />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Main Options</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Selling Price</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Tell us about your car</Text>
        </View>
        <View style={styles.checkBoxContainer}>
          <Text>
            I agree to the information I have provided are accurate. I agree
            that I will be held responsible for any dispute occured by
            information I have provided.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 44,
    paddingBottom: 28,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 27,
    marginBottom: 27
  },
  photoUploadContainer: {
    backgroundColor: "#F7F7F7",
    borderColor: "#C0BFC0",
    borderWidth: 1,
    width: "100%",
    height: 260,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24
  },
  photoTitle: {
    fontSize: 16,
    marginBottom: 18
  },
  photoSubTitle: {
    fontSize: 14,
    color: "#9A9A9A"
  },
  photoGuideText: {
    fontSize: 14,
    color: "#5B5B5B",
    textDecorationLine: "underline",
    marginBottom: 48
  },
  sectionContainer: {
    width: "100%",
    marginBottom: 35
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15
  },
  doubleInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  checkBoxContainer: {
    flexDirection: "row",
    marginBottom: 28
  },
  checkBox: {
    width: 25,
    height: 25,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#E6BABA",
    marginRight: 7
  },
  buttonContainer: {
    backgroundColor: "#1450F8",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingVertical: 24,
    borderRadius: 3
  },
  buttonText: {
    fontSize: 14,
    color: "#fff"
  }
});
