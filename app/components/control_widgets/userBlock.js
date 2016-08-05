import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';



export default class UserBlock extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(<View style={{flexDirection:'row', padding:10}}>
    	<Image source ={{uri : this.props.state.userDeets.image}} resizeMode="contain" style={{width:50, height:50, borderRadius:25}} />
    	<View>
    	<Text>{this.props.state.userDeets.first_name}</Text>
    	<Text>{this.props.state.userDeets.email}</Text>
    	</View>
    	</View>)
  }


}

