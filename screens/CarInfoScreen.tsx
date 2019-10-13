import React from "react";
import CarInfo from "../components/Sell/CarInfo";

export default function CarInfoScreen(props) {
  return <CarInfo navigation={props.navigation} />;
}

CarInfoScreen.navigationOptions = () => {
  return {
    title: "Car Information"
  };
};
