import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ViroSample from './AR';
import Home from './Home'


const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  AR: {
    screen: ViroSample
  }
},
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
