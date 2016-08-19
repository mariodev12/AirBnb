
import React, { Component } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Nav extends Component {
constructor(props){
	super(props)
	console.log(this.props)
}

menu(){
  if(this.props.state.navProps.type == "menu"){
    this.props.onPress();

  } else if(this.props.state.navProps.type == "pop"){
    this.props.state.navigator.replace({id:'inbox'});
  }
}
  render() {
    return (
    	<TouchableOpacity onPress ={() => this.menu()}>
      <View style= {{padding:20, backgroundColor:this.props.state.navStyle.backgroundColor, flexDirection:'row'}}>
      <Icon color={this.props.state.navStyle.color} name={this.props.state.navProps.icon} size={24} />
      <Text style={{alignSelf:'center', marginLeft:10, fontWeight:'600', color:'#444', fontSize:16}}>{this.props.state.navProps.name}</Text>
      </View>
      </TouchableOpacity>
    );
  }
}
