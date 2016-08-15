
import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class SearchRow extends Component {
constructor(props){
	super(props)
	console.log(this.props)
}
  render() {
    return (
    	<TouchableOpacity>
      <Text style={{fontWeight:'800', margin:10, marginBottom:0, color:'#444', fontSize:18}}>{this.props.rowData.city}, {this.props.rowData.state}, {this.props.rowData.country}</Text> 
      <View style={{margin:10, flexDirection:'row', justifyContent:'space-between'}}>     
      <Text style={{color:'#444'}}>Sep 1 - Oct 1</Text>   
      <View style={{backgroundColor:'#e3e3e3'}}><Text style={{color:'#444', fontSize:10, margin:5}}>+2 filters</Text></View>
      </View>
      <View style={{width:50, borderBottomWidth:1, borderColor:'#e3e3e3'}} />  
      </TouchableOpacity>
    );
  }
}
