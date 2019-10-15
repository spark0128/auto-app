import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { getCar } from "../apis/CarAPI";

export default function CarDetailScreen(props) {
  const carId = props.navigation.getParam('carId');

  // States
  const [car, setCar] = useState(null);

  // Lifecycle methods
  useEffect(() => {
    (async () => {
      try {
        const res = await getCar(carId);
        setCar(res.data);
      } catch (error) {
        console.log('error', error);
      }
    })();
  }, []);

  return <>
    <ScrollView style={styles.container}>
      <Text>
        {car ? `${JSON.stringify(car)}` : 'Not found'}
      </Text>
    </ScrollView>
  </>;
}

CarDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    title: `Car Detail`
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
