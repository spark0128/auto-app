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
import { Overlay } from "react-native-elements";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { Select } from "../common/Select";
import {
  TextInputWithUnit,
  TextInputPrice,
  TextInputCarDesc
} from "../common/TextInputCustom";
import Carousel from "../components/Sell/Carousel";
import { SelectYear } from "../components/Sell/SelectYear";
import { SelectCondition } from "../components/Sell/SelectCondition";
import { SelectTransmission } from "../components/Sell/SelectTransmission";
import { SelectFuel } from "../components/Sell/SelectFuel";
import { SelectColor } from "../components/Sell/SelectColor";
import { SelectExtCondition } from "../components/Sell/SelectExtCondition";
import { Options } from "../components/Sell/Options";

export default function SellCarInfo(props) {
  // TODO: Text Validation
  // TODO: Screen move up when keyboard popup

  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height);
  const paddingHorizontal = 15;

  // Redux
  const photos = useSelector((state) => state.SellYourCarReducer.photos);
  const brandName = useSelector((state) => state.SellYourCarReducer.brandName);
  const modelName = useSelector((state) => state.SellYourCarReducer.modelName);

  // States
  const [checked, setChecked] = useState([]);
  const [isYearVisible, setIsYearVisible] = useState(false);
  const [year, setYear] = useState("");
  const [isConditionVisible, setIsConditionVisible] = useState(false);
  const [condition, setCondition] = useState("");
  const [isTransmissionVisible, setIsTransmissionVisible] = useState(false);
  const [transmission, setTransmission] = useState("");
  const [isFuelVisible, setIsFuelVisible] = useState(false);
  const [fuel, setFuel] = useState("");
  const [isColorVisible, setIsColorVisible] = useState(false);
  const [color, setColor] = useState("");
  const [isExtConditionVisible, setIsExtConditionVisible] = useState(false);
  const [extCondition, setExtCondition] = useState("");

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

  const onYearClick = (value) => {
    setYear(value);
    setIsYearVisible(false);
  };

  const onConditionClick = (value) => {
    setCondition(value);
    setIsConditionVisible(false);
  };

  const onTransmissionClick = (value) => {
    setTransmission(value);
    setIsTransmissionVisible(false);
  };

  const onFuelClick = (value) => {
    setFuel(value);
    setIsFuelVisible(false);
  };

  const onColorClick = (value) => {
    setColor(value);
    setIsColorVisible(false);
  };

  const onExtConditionClick = (value) => {
    setExtCondition(value);
    setIsExtConditionVisible(false);
  };

  return (
    <>
      <Overlay
        isVisible={isYearVisible}
        onBackdropPress={() => setIsYearVisible(false)}
        height={screenHeight - 200}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={220}
      >
        <SelectYear click={onYearClick} />
      </Overlay>
      <Overlay
        isVisible={isConditionVisible}
        onBackdropPress={() => setIsConditionVisible(false)}
        height={110}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={220}
      >
        <SelectCondition click={onConditionClick} />
      </Overlay>
      <Overlay
        isVisible={isTransmissionVisible}
        onBackdropPress={() => setIsTransmissionVisible(false)}
        height={110}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={220}
      >
        <SelectTransmission click={onTransmissionClick} />
      </Overlay>
      <Overlay
        isVisible={isFuelVisible}
        onBackdropPress={() => setIsFuelVisible(false)}
        height={330}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={220}
      >
        <SelectFuel click={onFuelClick} />
      </Overlay>
      <Overlay
        isVisible={isColorVisible}
        onBackdropPress={() => setIsColorVisible(false)}
        height={253}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={330}
      >
        <SelectColor click={onColorClick} />
      </Overlay>
      <Overlay
        isVisible={isExtConditionVisible}
        onBackdropPress={() => setIsExtConditionVisible(false)}
        height={275}
        borderRadius={0}
        overlayStyle={{ padding: 0 }}
        width={220}
      >
        <SelectExtCondition click={onExtConditionClick} />
      </Overlay>
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
            <Select
              name="Brand / Model"
              value={`${brandName} ${modelName}`}
              onPress={onBrandModelButtonClick}
            />
            <View style={styles.doubleInputContainer}>
              <Select
                name="Year"
                value={year}
                containerWidth={{
                  width: screenWidth / 2 - paddingHorizontal - 3.5
                }}
                onPress={() => setIsYearVisible(!isYearVisible)}
              />
              <Select
                name="Condition"
                value={condition}
                containerWidth={{
                  width: screenWidth / 2 - paddingHorizontal - 3.5
                }}
                onPress={() => setIsConditionVisible(!isConditionVisible)}
              />
            </View>
            <View style={styles.doubleInputContainer}>
              <Select
                name="Transmission"
                value={transmission}
                containerWidth={{
                  width: screenWidth / 2 - paddingHorizontal - 3.5
                }}
                onPress={() => setIsTransmissionVisible(!isTransmissionVisible)}
              />
              <Select
                name="Fuel"
                value={fuel}
                containerWidth={{
                  width: screenWidth / 2 - paddingHorizontal - 3.5
                }}
                onPress={() => setIsFuelVisible(!isFuelVisible)}
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
              value={color}
              containerWidth={{
                width: screenWidth / 2 - paddingHorizontal - 3.5
              }}
              onPress={() => setIsColorVisible(!isColorVisible)}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Exterior Condition</Text>
            <Select
              name={`Scratches & Dents`}
              value={extCondition}
              onPress={() => setIsExtConditionVisible(!isExtConditionVisible)}
            />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Main Options</Text>
            <Options />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Selling Price</Text>
            <TextInputPrice name="Price you wish to sell" />
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Tell us about your car</Text>
            <TextInputCarDesc />
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
    </>
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
