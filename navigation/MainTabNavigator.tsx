import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HeaderIcon from "../components/HeaderIcon";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SearchModelScreen from "../screens/SearchModelScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SellScreen from "../screens/SellScreen";
import SellSelectBrandScreen from "../screens/SellSelectBrandScreen";
import SellCarInfoScreen from "../screens/SellCarInfoScreen";
import CarDetailScreen from "../screens/CarDetailScreen";
import SelectPhotoScreen from "../screens/SelectPhotoScreen";
import MyCollectionScreen from "../screens/MyCollectionScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import MyAccountNotLoggedInScreen from "../screens/MyAccountNotLoggedInScreen";
import LoginModalScreen from "../screens/LoginModalScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import FindPasswordScreen from "../screens/FindPasswordScreen";
import SellSelectModelScreen from "../screens/SellSelectModelScreen";
import SellSellerInfoScreen from "../screens/SellSellerInfoScreen";

const config: any = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

/**
 * Home
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CarDetail: CarDetailScreen
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
    SearchModel: SearchModelScreen,
    SearchResult: SearchResultScreen,
    CarDetail: CarDetailScreen
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
    SellCarInfo: SellCarInfoScreen,
    SellSelectBrand: SellSelectBrandScreen,
    SellSelectModel: SellSelectModelScreen,
    SellSellerInfo: SellSellerInfoScreen
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
    MyAccount: MyAccountScreen
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

/**
 * Tab
 */
const TabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  SellStack,
  MyCollectionStack,
  MyAccountStack
});

/**
 * Login, Signup
 */
const LoginModalStack = createStackNavigator(
  {
    LoginModal: LoginModalScreen,
    Login: LoginScreen,
    Signup: SignupScreen
  },
  config
);

/**
 * Main
 */
const MainStack = createStackNavigator(
  {
    Tab: {
      screen: TabNavigator,
      navigationOptions: { header: null }
    },
    SelectPhoto: {
      screen: SelectPhotoScreen
    },
    LoginModal: {
      screen: LoginModalStack,
      navigationOptions: { header: null }
    }
  },
  {
    mode: "modal"
  }
);

export default MainStack;
