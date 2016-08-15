/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import SearchRow from './search_widgets/searchRow'
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

var recent = [{
  "id": 1,
  "city": "Pittsburgh",
  "state": "Pennsylvania",
  "country": "United States",
  "filters": 75
}, {
  "id": 2,
  "city": "Riverside",
  "state": "California",
  "country": "United States",
  "filters": 38
}, {
  "id": 3,
  "city": "Charleston",
  "state": "South Carolina",
  "country": "United States",
  "filters": 48
}, {
  "id": 4,
  "city": "Albany",
  "state": "New York",
  "country": "United States",
  "filters": 41
}, {
  "id": 5,
  "city": "Fort Smith",
  "state": "Arkansas",
  "country": "United States",
  "filters": 99
}, {
  "id": 6,
  "city": "Houston",
  "state": "Texas",
  "country": "United States",
  "filters": 7
}, {
  "id": 7,
  "city": "Saint Paul",
  "state": "Minnesota",
  "country": "United States",
  "filters": 4
}, {
  "id": 8,
  "city": "Norman",
  "state": "Oklahoma",
  "country": "United States",
  "filters": 79
}, {
  "id": 9,
  "city": "Metairie",
  "state": "Louisiana",
  "country": "United States",
  "filters": 68
}, {
  "id": 10,
  "city": "Kansas City",
  "state": "Missouri",
  "country": "United States",
  "filters": 43
}];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Inbox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')
    this.state = {
      datasource: ds.cloneWithRows(recent)
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
      multiline={false}
      style = {{fontSize:20, fontWeight:'900', height:25, margin:10, color:'#444'}}
      placeholderTextColor = "#333"
      val = "Where to"/>
      <View style = {{borderBottomWidth:1, borderTopWidth:1, borderColor:'#e3e3e3', padding:5}}>
      <Text style={{fontWeight:'800', margin:5, color:'#444', fontSize:18}}>Nearby</Text> 
      <Text style={{fontWeight:'400', margin:5, color:'#444', fontSize:14}}>Zapopan, Jalisco, MX</Text> 

      </View>
      <View>
      <ListView
      dataSource = {this.state.datasource}
      renderRow = {(rowData) => <SearchRow rowData = {rowData} />}
          />
      </View>
    
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

