import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class Control extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(<View style={{backgroundColor:'#fff', flex:1, justifyContent:'center', alignItems:'center'}}>
    	<Text>Hello World</Text>
    	</View>)
  }


}

