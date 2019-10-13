import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from "react-native";

import colors from "../constants/Colors";
import { Hero } from "../components/Home/Hero";
import { MostRecommended } from "../components/Home/MostRecommended";
import { MostViewed } from "../components/Home/MostViewed";
import { FeaturedCarCard } from "../components/Home/FeaturedCarCard";
import { addTodo } from "../redux/actions/TodoActions";

export default function HomeScreen() {
  // For Redux testing
  const todos = useSelector(state => state.TodoReducer.todos);
  const dispatch = useDispatch();
  const onPressHero = () => {
    dispatch(addTodo("Test Redux"));
  };
  console.log("todos: ", todos);

  // TODO: Get most recommended cars from server
  // TODO: Get most viewed cars from server
  // TODO: Get featured cars from server
  const featuredCars = [
    {
      id: "1",
      name: "LEXUS LX300",
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
      price: 33500,
      mileage: 80000,
      year: "2012",
      city: "Phnom Penh",
      postedAt: "6 days ago",
      numViews: 48
    }
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <Hero onPress={onPressHero} />
        <MostRecommended />
        <View style={{ backgroundColor: "#F2F2F2", height: 10 }} />
        <MostViewed />
        {featuredCars.map((car) => (
          <FeaturedCarCard key={car.id} car={car} />
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
