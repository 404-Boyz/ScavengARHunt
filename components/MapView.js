import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, navigationOptions } from 'react-navigation';

export default class Map extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>Map!</Text>
        <Button title='Hit me' onPress={() => this.props.navigation.navigate('Home')} />
      </View>
    )
  }
}
