
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {

  render() {
    return (
    	<TouchableOpacity onPress ={this.props.onPress}>
      <View style={{padding:15}}>
      <Icon color={this.props.color} name="menu" size={25} />
      </View>
      </TouchableOpacity>
    );
  }
}
