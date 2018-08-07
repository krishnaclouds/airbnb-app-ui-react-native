import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import Explore from './screens/Explore';
import Trips from './screens/Trips';
import Saved from './screens/Saved';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';

export default createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-search-outline" color={tintColor} size={24}></Icon>
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-heart-outline" color={tintColor} size={24}></Icon>
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-beer-outline" color={tintColor} size={24}></Icon>
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-chatboxes-outline" color={tintColor} size={24}></Icon>
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-person-outline" color={tintColor} size={24}></Icon>
      )
    }
  }
}, {
  tabBarOptions : {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: {
        width: 5,
        height: 3
      },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
