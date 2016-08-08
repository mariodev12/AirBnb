/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Inbox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')
  }

  render() {
    return (
      <View style={styles.container}>
       <View>
       <Text style={{fontSize:38, color:'#333', margin:20, marginLeft:0, fontWeight:'700'}}>Inbox</Text>
       <View style={{borderBottomWidth:1, margin:20, marginLeft:0, borderColor:"#e1e1e1", width:30}} />
       <View>
       <Text style={{margin:5, marginLeft:0, color:'#888', fontSize:18}}>Messages</Text>
       </View>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

