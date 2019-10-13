import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SelectModelScreen from "../screens/SelectModelScreen";
import SelectModelDetailScreen from "../screens/SelectModelDetailScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SellScreen from "../screens/SellScreen";
import CarInfoScreen from "../screens/CarInfoScreen";
import MyCollectionScreen from "../screens/MyCollectionScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyAccountNotLoggedInScreen from "../screens/MyAccountNotLoggedInScreen";
import LoginScreen from "../screens/LoginScreen";
import LoginFormScreen from "../screens/LoginFormScreen";

const config: any = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

/**
 * Home
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-home"} />
};

HomeStack.path = "";

/**
 * Search
 */
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    SelectModel: SelectModelScreen,
    SelectModelDetail: SelectModelDetailScreen,
    SearchResult: SearchResultScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-search"} />
  )
};

SearchStack.path = "";

/**
 * Sell
 */
const SellStack = createStackNavigator(
  {
    Sell: SellScreen,
    CarInfo: CarInfoScreen
  },
  config
);

SellStack.navigationOptions = {
  tabBarLabel: "Sell",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-add-circle-outline"} />
  )
};

SellStack.path = "";

/**
 * Collection
 */
const MyCollectionStack = createStackNavigator(
  {
    MyCollection: MyCollectionScreen
  },
  config
);

MyCollectionStack.navigationOptions = {
  tabBarLabel: "Collection",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-heart"} />
  )
};

MyCollectionStack.path = "";

/**
 * My Account
 */
const MyAccountStack = createStackNavigator(
  {
    MyAccount: LoginFormScreen
  },
  config
);

MyAccountStack.navigationOptions = {
  tabBarLabel: "My Account",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-person"} />
  )
};

MyAccountStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  SellStack,
  MyCollectionStack,
  MyAccountStack
});

export default tabNavigator;
