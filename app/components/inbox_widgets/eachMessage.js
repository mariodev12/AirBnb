
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
    	<TouchableOpacity onPress ={() => this.props.state.navigator.push({id: 'convo'})}>
      <View style= {{padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#e3e3e3'}}>
      <Image source ={{uri: this.props.rowData.avatar}} resizeMode ="contain" style={{height:50, width:50, margin:10, borderRadius:25, backgroundColor:'#f8f8f8'}} />
      <View style={{alignSelf:'center', justifyContent:'center'}}>
      <View style = {{flexDirection:'row', justifyContent:'space-between', width:250}}>
      <Text style={{fontWeight:'600', color:'#333'}}>{this.props.rowData.first_name}</Text>
      <Text style={{fontWeight:'400', color:'#333', fontSize:10}}>{this.props.rowData.time}</Text>
      </View>
      <Text style ={{width:150, height:30, fontWeight:'300', color:'#333'}}>{this.props.rowData.message}</Text>
      </View>
      </View>
      </TouchableOpacity>
    );
  }
}
