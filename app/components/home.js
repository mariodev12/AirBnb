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
var j = -1;

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
var viewed = [{
  "id": 1,
  "ava": "https://robohash.org/rerumvelitaliquam.jpg?size=50x50&set=set1",
  "price": "$22.17",
  "name": "dui vel sem sed",
  "reviews": 52
}, {
  "id": 2,
  "ava": "https://robohash.org/aspernaturesterror.jpg?size=50x50&set=set1",
  "price": "$39.55",
  "name": "nec sem duis aliquam",
  "reviews": 78
}, {
  "id": 3,
  "ava": "https://robohash.org/nulladoloremest.png?size=50x50&set=set1",
  "price": "$39.84",
  "name": "accumsan tellus nisi",
  "reviews": 89
}, {
  "id": 4,
  "ava": "https://robohash.org/utdoloribusasperiores.bmp?size=50x50&set=set1",
  "price": "$30.73",
  "name": "porttitor pede justo eu",
  "reviews": 47
}, {
  "id": 5,
  "ava": "https://robohash.org/odioautsaepe.bmp?size=50x50&set=set1",
  "price": "$22.70",
  "name": "fermentum donec ut mauris",
  "reviews": 53
}, {
  "id": 6,
  "ava": "https://robohash.org/ullamdoloredolor.jpg?size=50x50&set=set1",
  "price": "$25.42",
  "name": "mauris eget massa tempor",
  "reviews": 75
}, {
  "id": 7,
  "ava": "https://robohash.org/eaquenostrumofficiis.jpg?size=50x50&set=set1",
  "price": "$23.02",
  "name": "augue vestibulum ante",
  "reviews": 55
}, {
  "id": 8,
  "ava": "https://robohash.org/esseomnisdolore.png?size=50x50&set=set1",
  "price": "$12.46",
  "name": "lacus curabitur at",
  "reviews": 74
}, {
  "id": 9,
  "ava": "https://robohash.org/temporibusenimquisquam.bmp?size=50x50&set=set1",
  "price": "$18.26",
  "name": "in sagittis dui",
  "reviews": 29
}, {
  "id": 10,
  "ava": "https://robohash.org/delectussolutaut.bmp?size=50x50&set=set1",
  "price": "$29.68",
  "name": "luctus ultricies eu",
  "reviews": 92
}];

var image1 = require("./../img/image1.png")
var image2 = require("./../img/image2.jpg")
var image3 = require("./../img/image3.jpg")
var image4 = require("./../img/image4.jpg")
var image5 = require("./../img/image5.jpg")
var image5 = require("./../img/image5.jpg")
var image6 = require("./../img/image6.jpg")
var image7 = require("./../img/image7.jpg")
var image8 = require("./../img/image8.jpg")
var image9 = require("./../img/image9.jpg")
var image10 = require("./../img/image10.jpg")
var image11 = require("./../img/image11.jpg")
var image12 = require("./../img/image12.jpg")
var image13 = require("./../img/image13.jpg")

var favs = [
{name:"It Yourts So Good", homes : 18, image: image7},
{name:"Underground Homes", homes : 4, image: image8},
{name:"Geodesic Domes", homes : 5, image: image9},
{name:"Smells Like Eames Spirit", homes : 22, image: image10},
{name:"Best of Bali", homes : 18, image: image11},
{name:"Family Fun around the World", homes : 26, image: image12},
{name:"Castles", homes : 26, image: image13},
{name:"Around The World in 15 Listings", homes : 15, image: image4},
{name:"Milano Design", homes : 20, image: image8},
{name:"Oui, Oui Paris", homes : 25, image: image6},
]

var images = [
image1,
image2,
image3,
image4,
image5,
image6,
]
var images2 = [
image7,
image8,
image9,
image10,
image11,
image12,
image13,
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Index extends Component {
  constructor(props){
    super(props)
    console.log(props)

    this.state = {
      datasource: ds.cloneWithRows(cities),
      dataviewed:ds.cloneWithRows(viewed),
      datafav:ds.cloneWithRows(favs)
    }
  }
  componentDidMount(){
    this.props.actions.changeNav('dark')
    this.props.actions.setNav(this.props.navigator);

    this.props.close();
  }

  favourites(val){
     return(
      <Image source={val.image} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', textAlign:'center', color:'#fff', fontSize:25, fontWeight:'700'}}>{val.name}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:13, fontWeight:'600'}}>{val.homes} homes</Text>
      </Image>
      )
  }
  cityBox(val){
if(i < 5){
  i++
}else{
  i = 0
}
    return(
      <Image source={images[i]} resizeMode="stretch" style={{width:330, height:220, margin:5,marginBottom:30, justifyContent:'center', alignItems:'center'}}>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff', fontSize:30, fontWeight:'700'}}>{val.city_name}</Text>
      <Text style={{backgroundColor:'rgba(0,0,0,0)', color:'#fff',fontSize:14, fontWeight:'600'}}>{val.date_from} - {val.date_to}</Text>
      </Image>
      )
  }

    viewed(val){
if(j < 5){
  j++
}else{
  j = 0
}
    return(
      <View style={{width:340, height:300}}>
      <Image source={images2[j]} resizeMode="stretch" style={{width:330, height:220, margin:5, justifyContent:'space-between'}}>
      <View style={styles.row}><View/>
      <Icon name='favorite-border' size={25} style={{backgroundColor:'rgba(0,0,0,0)', margin:10}} color='#fff' />
</View>
      <View style={styles.row}>
      <View style={{backgroundColor:'rgba(0,0,0,0.6)', marginBottom:10, paddingLeft:10}}><Text style={{color:'#fff', margin:10, fontSize:16, fontWeight:'500'}}>{val.price}</Text></View>
      </View>
      </Image>
      <View style={styles.row}>
      <View style={{margin:5, justifyContent:'center'}}>
      <Text 
      numberOfLines = {1}
      style={{fontSize:14, width:190}}>{val.name}</Text>
      <Text style={{fontWeight:'300', fontSize:13}}>Private Room</Text>
      </View>
      <Image source={{uri: val.ava}} resizeMode='contain' style={{width:40, height:40, margin:10, alignSelf:'center'}} />
      </View>
      </View>
      )
  }

  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView style={{flex:1,}}>
      <View style={styles.container}>
      <Image source = {require('./../img/logoWhite.png')} resizeMode="contain" style={{width:40, height:40, marginLeft:20, marginTop:15}} />
        <Text style={styles.main}>
          Welcome to Medellin, Colombia!
        </Text>
        <TouchableOpacity style={{margin:10,marginTop:60, marginLeft:20, padding:10, borderWidth:2, borderColor:"#fff", borderRadius:18, width:150}}>
        <Text style={{color:'#fff', textAlign:'center', fontWeight:'600'}}>View itinerary</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
      <Text style={styles.title}>Recent Searches</Text>
      <ListView 
      dataSource = {this.state.datasource}
      renderRow={(rowData) => this.cityBox(rowData)}
      horizontal = {true}
      />
      </View>
      <View style={styles.container2}>
      <Text style={styles.title}>Recently Viewed</Text>
      <ListView 
      dataSource = {this.state.dataviewed}
      renderRow={(rowData) => this.viewed(rowData)}
      horizontal = {true}
      />
      </View>
      <View style={styles.container2}>
      <Text style={styles.title}>Just For The Weekend</Text>
      <ListView 
      dataSource = {this.state.dataviewed}
      renderRow={(rowData) => this.viewed(rowData)}
      horizontal = {true}
      />
      <View style={styles.container2}>
      <Text style={styles.title}>AirBnb Favourites</Text>
      <ListView 
      dataSource = {this.state.datafav}
      renderRow={(rowData) => this.favourites(rowData)}
      horizontal = {true}
      />
      </View>
      </View>
      </ScrollView>
      <TouchableOpacity style={{width:60, borderWidth:3, borderColor:'rgba(0,0,0,0.2)', alignItems:'center', justifyContent:'center', height:60, backgroundColor:'#ff585b', borderRadius:30, position:'absolute', bottom:20, right:20}}>
      <Icon name="search" size={22} color="#fff"/>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff585b',
    height:400,
  },
  container2: {
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderBottomColor:'#d3d3d3',

  },
  title:{
    fontWeight:'400',
    fontSize:20,
    color:'#333',
    margin:20,
    marginBottom:15
  },
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
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

