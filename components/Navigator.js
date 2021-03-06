import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ViroSample from './AR';
import { AR, ChooseAdv, ClueList, Home, LogIn, MapView, Profile, SignUp } from './index'



const RootStack = StackNavigator({
  Home: {
    screen: Home
  },
  AR: {
    screen: ViroSample
  },
  ChooseAdv: {
    screen: ChooseAdv
  },
  ClueList: {
    screen: ClueList
  },
  LogIn: {
    screen: LogIn
  },
  MapView: {
    screen: MapView
  },
  Profile: {
    screen: Profile
  },
  SignUp: {
    screen: SignUp
  },

},
  {
    initialRouteName: 'Home'
  }
);

export default RootStack;
