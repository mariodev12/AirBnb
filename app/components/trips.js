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
  Image,
  ScrollView,
  View
} from 'react-native';

var past = [{
  "id": 1,
  "image": "https://pixabay.com/static/uploads/photo/2016/03/09/09/21/jetty-1245749_960_720.jpg",
  "city": "Florianópolis",
  "country": "Brazil",
  "date": {
    "from": "16.07.2016",
    "to": "30.09.2015"
  }
}, {
  "id": 2,
  "image": "https://pixabay.com/static/uploads/photo/2016/03/09/09/22/store-1245758_960_720.jpg",
  "city": "Karangkeng",
  "country": "Indonesia",
  "date": {
    "from": "28.07.2016",
    "to": "26.01.2016"
  }
}, {
  "id": 3,
  "image": "https://pixabay.com/static/uploads/photo/2015/12/08/00/31/pier-1081795_960_720.jpg",
  "city": "Lijia",
  "country": "China",
  "date": {
    "from": "29.07.2016",
    "to": "25.12.2015"
  }
}, {
  "id": 4,
  "image": "https://pixabay.com/static/uploads/photo/2016/03/09/09/21/jetty-1245749_960_720.jpg",
  "city": "Suvorovskaya",
  "country": "Russia",
  "date": {
    "from": "06.06.2016",
    "to": "20.06.2016"
  }
}, {
  "id": 5,
  "image": "https://pixabay.com/static/uploads/photo/2016/03/09/09/13/skateboard-1245680_960_720.jpg",
  "city": "Xinxing",
  "country": "China",
  "date": {
    "from": "08.06.2016",
    "to": "08.09.2015"
  }
}, {
  "id": 6,
  "image": "https://pixabay.com/static/uploads/photo/2016/03/09/09/30/urban-city-1245826_960_720.jpg",
  "city": "Haridimun",
  "country": "Indonesia",
  "date": {
    "from": "22.07.2016",
    "to": "13.02.2016"
  }
}, {
  "id": 7,
  "image": "https://pixabay.com/static/uploads/photo/2014/05/21/14/53/pier-349672_960_720.jpg",
  "city": "Catac",
  "country": "Peru",
  "date": {
    "from": "21.07.2016",
    "to": "09.05.2016"
  }
}]

var current = {
  "id": 7,
  "image": "https://pixabay.com/static/uploads/photo/2014/05/21/14/53/pier-349672_960_720.jpg",
  "city": "Catac",
  "country": "Peru",
  "date": {
    "from": "21.07.2016",
    "to": "09.05.2016"
  }}

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Inbox extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.props.actions.changeNav('light')

    this.state = {
      dataSource: ds.cloneWithRows(past)
    }
  }
    componentDidMount(){
    this.props.close();
  }

  renderThis(val){
    return(
      <Image
        source = {{uri : val.image}}
        style ={{width:350, height:250, margin:5, justifyContent:'center', alignItems:'center', alignSelf:'center'}}
        resizeMode = "stretch"
        >
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontWeight:'700', fontSize:24}}>{val.city}, {val.country}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontWeight:'400', fontSize:14}}>{val.date.from} - {val.date.to}</Text>
        </Image>
        )
  }

  render() {
    return (
      <ScrollView style={styles.container}>
      <TitleBar name = "Trips" sub = "Almost time to pack your bags" />
      <View style={{borderBottomWidth:1, borderColor:"#e3e3e3", paddingBottom:30}}>
      <Text style={{fontSize:24, color:'#222', margin:20, marginLeft:5, fontWeight:'300'}}>Current Trip</Text>
      {this.renderThis(current)}
      </View>
      <Text style={{fontSize:24, color:'#222', margin:20, marginLeft:5, fontWeight:'300'}}>Past Trips</Text>
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {(val) => this.renderThis(val)}
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

