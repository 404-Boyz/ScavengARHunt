import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';

export default class Home extends Component {

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button onPress={() => this.props.navigation.navigate('AR')} />
      </View>
    )
  }
}
