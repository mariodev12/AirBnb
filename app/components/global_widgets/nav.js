
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
constructor(props){
	super(props)
	console.log(this.props)
}
  render() {
    return (
    	<TouchableOpacity onPress ={this.props.onPress}>
      <View style= {{padding:20, backgroundColor:this.props.state.navStyle.backgroundColor}}>
      <Icon color={this.props.state.navStyle.color} name="menu" size={25} />
      </View>
      </TouchableOpacity>
    );
  }
}
