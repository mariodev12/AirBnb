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
      
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      
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

