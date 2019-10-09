import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WishListScreen from '../screens/WishListScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const config: any = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

/**
 * Home
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config,
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'} />
  ),
};

HomeStack.path = '';

/**
 * WishList
 */
const WishListStack = createStackNavigator(
  {
    WishList: WishListScreen,
  },
  config
);

WishListStack.navigationOptions = {
  tabBarLabel: 'Wishlist',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={'md-heart'} />
  ),
};

WishListStack.path = '';

/**
 * Search
 */
const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={'md-search'} />
  ),
};

SearchStack.path = '';

/**
 * Message
 */
const MessageStack = createStackNavigator(
  {
    Message: MessageScreen,
  },
  config
);

MessageStack.navigationOptions = {
  tabBarLabel: 'Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused} 
      name={'md-notifications'} />
  ),
};

MessageStack.path = '';

/**
 * My Account
 */
const MyAccountStack = createStackNavigator(
  {
    MyAccount: MyAccountScreen,
  },
  config
);

MyAccountStack.navigationOptions = {
  tabBarLabel: 'My Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon 
      focused={focused}
      name={'md-person'} />
  ),
};

MyAccountStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  WishListStack,
  SearchStack,
  MessageStack,
  MyAccountStack,
});

export default tabNavigator;
