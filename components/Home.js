import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';
import { RootStack } from './Navigator'
import ViroSample from './AR'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button title='Victory' onPress={() => this.props.navigation.navigate('AR')} />
      </View>
    )
  }
}
