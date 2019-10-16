import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { ListItemBasic } from "../common/ListItem";
import { TextInputWithButton } from "../common/TextInputCustom";
import { ContactSupport } from "../common/ContactSupport";
import { useDispatch } from "react-redux";
import { saveModel } from "../redux/actions/SellYourCarActions";

export default function SellSelectModelScreen(props) {
  const dispatch = useDispatch();

  const models = [
    { id: "1", name: "Prius" },
    { id: "2", name: "Prius C" },
    { id: "3", name: "Prius Prime" },
    { id: "4", name: "CR-V" },
    { id: "5", name: "Highlander" },
    { id: "6", name: "Camry" },
    { id: "7", name: "Camry Hybrid" },
    { id: "8", name: "Corolla" }
  ];
  // Handlers
  const onModelClick = (model) => {
    return () => {
      dispatch(saveModel(model.name));
      props.navigation.navigate("SellCarInfo");
    };
  };

  return (
    <>
      <ScrollView style={styles.container}>
        {models.map((model) => {
          return (
            <ListItemBasic
              key={model.id}
              name={model.name}
              onPress={onModelClick(model)}
            />
          );
        })}
        {/* <View style={{ backgroundColor: "#F2F2F2", height: 10 }} /> */}
        <View style={styles.cannotFindModelContainer}>
          <Text style={styles.cannotFindModelTitle}>
            Cannot find your model?
          </Text>
          <TextInputWithButton
            containerWidth={{ width: "100%" }}
            name="Type your model here"
            buttonName="Next"
          />
        </View>
        <ContactSupport />
      </ScrollView>
    </>
  );
}

// SellSelectModelScreen.navigationOptions = ({ navigation }) => {
//   return {
//     title: navigation.getParam("modelName", "Model Name")
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  cannotFindModelContainer: {
    marginTop: 24,
    paddingHorizontal: 16
  },
  cannotFindModelTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 20
  }
});
