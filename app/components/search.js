/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EachMessage from './inbox_widgets/eachMessage'
import TitleBar from './inbox_widgets/titleBar'
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TextInput,
  Text,
  ScrollView,
  View
} from 'react-native';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Inbox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')
    this.state = {
      datasource: ds.cloneWithRows(inboxData)
    }
  }

  componentDidMount(){
    this.props.close();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <TextInput 
      placeholder = "Where to?"
      style = {{fontSize:20, fontWeight:'900', height:25, color:'#444'}}
      placeholderTextColor = "#333"
      val = "Where to"
      />
    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#fff',
  },

});

