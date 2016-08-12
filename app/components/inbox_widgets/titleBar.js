
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class EachMessage extends Component {
constructor(props){
	super(props)
	console.log(this.props)
}
  render() {
    return (

      <View >
     <Text style={{fontSize:35, color:'#444', margin:5, fontWeight:'700'}}>{this.props.name}</Text>
     <Text style={{fontSize:17, color:'#444', margin:5, fontWeight:'400' }}>{this.props.sub}</Text>
      <View style={{width:50, borderBottomWidth:1, borderColor:'#e3e3e3', margin:5, marginTop:50, marginBottom:30 }} /> 
      </View>

    );
  }
}
