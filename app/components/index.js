import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  View
} from 'react-native';
import Nav from "./global_widgets/nav"

export default class Index extends Component {

  navigationView(){
    return(
      <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
    </View>
    )
  }

  componentDidMount(){

  }

  render() {
    return (
      
      <View style={{flex:1}}>
      <View style={styles.container}>
      <Nav color ="#fff" />
        <Text style={styles.welcome}>
          Welcome to Medellin, Colombia!
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff585b',
    height:400
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color:'#fff',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color:'#fff',
    marginBottom: 5,
  },
});

