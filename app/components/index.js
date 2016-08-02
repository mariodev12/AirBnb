import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  DrawerLayoutAndroid,
  ScrollView,
  TouchableOpacity,
  ListView,
  Image,
  Text,
  View
} from 'react-native';
import Nav from "./global_widgets/nav"
import Icon from 'react-native-vector-icons/MaterialIcons';
var i = -1;
var cities = [{"id":1,"city_name":"Três Pontas","date_from":"9/21/2015","date_to":"1/3/2016"},
{"id":2,"city_name":"Dongxi","date_from":"10/30/2015","date_to":"2/28/2016"},
{"id":3,"city_name":"Gaoqiao","date_from":"4/28/2016","date_to":"9/10/2016"},
{"id":4,"city_name":"Redon","date_from":"10/11/2015","date_to":"7/27/2016"},
{"id":5,"city_name":"Rzepiennik Strzyżewski","date_from":"3/16/2016","date_to":"6/27/2016"},
{"id":6,"city_name":"Tugulym","date_from":"10/9/2015","date_to":"6/21/2016"},
{"id":7,"city_name":"Dagou","date_from":"7/17/2016","date_to":"9/24/2016"},
{"id":8,"city_name":"San Rafael","date_from":"2/5/2016","date_to":"1/18/2016"},
{"id":9,"city_name":"Wólka Pełkińska","date_from":"4/25/2016","date_to":"2/14/2016"},
{"id":10,"city_name":"Presnenskiy","date_from":"2/9/2016","date_to":"3/1/2016"}]

var image1 = require("./../img/image1.png")
var image2 = require("./../img/image2.jpg")
var image3 = require("./../img/image3.jpg")
var image4 = require("./../img/image4.jpg")
var image5 = require("./../img/image5.jpg")
var image5 = require("./../img/image5.jpg")
var image6 = require("./../img/image6.jpg")
var images = [
image1,
image2,
image3,
image4,
image5,
image6,
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Index extends Component {
  constructor(props){
    super(props)

    this.state = {
      datasource: ds.cloneWithRows(cities)
    }
  }
  componentDidMount(){

  }

  cityBox(val){
if(i < 5){
  i++
}else{
  i = 0
}
    return(
      <Image source={images[i]} resizeMode="contain" style={{width:320, height:220, margin:10, justifyContent:'center', alignItems:'center'}}>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>{val.city_name}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>{val.date_from} - {val.date_to}</Text>
      </Image>
      )
  }

  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
      <View style={styles.container}>
      
      <Nav color ="#fff" />
        <Text style={styles.main}>
          Welcome to Medellin, Colombia!
        </Text>
        <TouchableOpacity style={{margin:10,marginTop:60, marginLeft:20, padding:10, borderWidth:2, borderColor:"#fff", borderRadius:18, width:150}}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'600'}}>View itinerary</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
      <Text style={styles.title}></Text>
      <ListView 
      dataSource = {this.state.datasource}
      renderRow={(rowData) => this.cityBox(rowData)}
      horizontal = {true}
      />
      </View>
      </ScrollView>
      <TouchableOpacity style={{width:60, alignItems:'center', justifyContent:'center', height:60, backgroundColor:'#ff585b', borderRadius:30, position:'absolute', bottom:20, right:20}}>
      <Icon name="search" size={22} color="#fff"/>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff585b',
    height:400
  },
  container2: {
    backgroundColor: '#fff',
    height:400
  },
  main: {
    fontSize: 25,
    textAlign: 'left',
    color:'#fff',
    fontWeight:'600',
    width:200,
    margin: 10,
    marginLeft:20,
    marginTop:30
  },
  instructions: {
    textAlign: 'center',
    color:'#fff',
    marginBottom: 5,
  },
});

