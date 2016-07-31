
import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {

  render() {
    return (
      <View style={{padding:10}}>
      <Icon color={this.props.color} name="menu" size={25} />
      </View>
    );
  }
}
