/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EachMessage from './inbox_widgets/eachMessage'
import TitleBar from './inbox_widgets/titleBar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  AppRegistry,
  StyleSheet,
  ListView,
  Image,
  Text,
  View
} from 'react-native';

var count = 0
var convo = ["Are you a robot though dude?", "Working on it man", "Yeah Whatever fam. Call me when you start taking life seriously"]
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Inbox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')
    this.state = {
      datasource: ds.cloneWithRows(convo)
    }
  }

  componentDidMount(){
    this.props.close();
  }

  eachMessage(x){
    count ++;
    return(
      <View style={{flexDirection:'row', alignItems:'flex-end', margin:5}}>
      <Image source ={{uri: "https://robohash.org/recusandaeperspiciatisunde.png?size=50x50&set=set1"}} resizeMode ="contain" style={{height:30, width:30, margin:5, borderRadius:25, backgroundColor:'#f8f8f8'}} />
      <View style={{width:200, backgroundColor:'#f4f4f4', padding:10}}>
      <Text style={{fontSize:15, color:'#444'}}>{x}</Text>
      </View>
      </View>
      )
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={{borderBottomWidth:1,borderColor:"#e1e1e1", padding:15, flexDirection:'row', justifyContent:'space-between'}} >

       <Text style={{fontSize:15, color:'#333', fontWeight:'400'}}>Accepted</Text>
       <Text style={{fontSize:14, color:'#333', fontWeight:'400'}}>Details</Text>
      </View>

       <ListView 
          noScroll={true}
          style = {{flex:1, backgroundColor:'#333'}}
          contentContainerStyle = {{justifyContent:'flex-end'}}
          dataSource = {this.state.datasource}
          renderRow = {(rowData) => this.eachMessage(rowData)}
          />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-between',
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

