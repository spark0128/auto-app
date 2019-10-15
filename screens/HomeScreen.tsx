import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from "react-native";

import colors from "../constants/Colors";
import { Hero } from "../components/Home/Hero";
import { MostRecommended } from "../components/Home/MostRecommended";
import { MostViewed } from "../components/Home/MostViewed";
import { FeaturedCarCard } from "../components/Home/FeaturedCarCard";
import { addTodo } from "../redux/actions/TodoActions";
import { getMe } from "../apis/UserAPI";
import { saveUser } from "../redux/actions/UserActions";

export default function HomeScreen(props) {
  // Redux
  const dispatch = useDispatch();

  // Lifecycle methods
  useEffect(() => {
    (async () => {
      try {
        // Check authentication
        const res = await getMe();
        dispatch(saveUser(res.data));
      } catch (error) {
        // Not Logged In
      }
    })();
  }, []);

  // TODO: Get most recommended cars from server
  const mostRecommendedCar = {
    _id: "1",
    name: "LEXUS LX300",
    image: "https://i.imgur.com/1gsClCq.jpg",
    price: 11500,
    mileage: 43000,
    year: "2015",
    city: "Phnom Penh",
    postedAt: "5 days ago",
    numViews: 25
  };

  // TODO: Get most viewed cars from server
  // TODO: Get featured cars from server
  const featuredCars = [
    {
      id: "1",
      name: "LEXUS LX300",
      image: "https://i.imgur.com/1gsClCq.jpg",
      price: 11500,
      mileage: 43000,
      year: "2015",
      city: "Phnom Penh",
      postedAt: "5 days ago",
      numViews: 25
    },
    {
      id: "2",
      name: "TOYOTA Camry",
      image: "https://i.imgur.com/1gsClCq.jpg",
      price: 33500,
      mileage: 80000,
      year: "2012",
      city: "Phnom Penh",
      postedAt: "6 days ago",
      numViews: 48
    }
  ];

  // Handers
  const onPressCar = (car) => {
    return () => {
      props.navigation.navigate('CarDetail', {
        carId: car.id,
      });
    };
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Hero onPress={() => {}} />
        <MostRecommended car={mostRecommendedCar} onPress={onPressCar(mostRecommendedCar)} />
        <View style={{ backgroundColor: "#F2F2F2", height: 10 }} />
        <MostViewed />
        {featuredCars.map((car) => (
          <FeaturedCarCard key={car.id} car={car} onPress={onPressCar(car)} />
        ))}
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  title: "Automate",
  headerStyle: {
    backgroundColor: colors.primaryColor
  },
  headerTintColor: "white"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  }
});
