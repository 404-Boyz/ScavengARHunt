import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { RootStack } from './components/Navigator'

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

