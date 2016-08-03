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
var viewed =[{
  "id": 1,
  "price": "$26.11",
  "reviews": 62,
  "name": "Nam tristique tortor eu pede.",
  "location": "Huanza"
}, {
  "id": 2,
  "price": "$16.34",
  "reviews": 76,
  "name": "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
  "location": "Abuyog"
}, {
  "id": 3,
  "price": "$13.64",
  "reviews": 89,
  "name": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
  "location": "Loma Bonita"
}, {
  "id": 4,
  "price": "$16.28",
  "reviews": 57,
  "name": "Nullam porttitor lacus at turpis.",
  "location": "Sambungjaya"
}, {
  "id": 5,
  "price": "$25.62",
  "reviews": 18,
  "name": "Quisque ut erat. Curabitur gravida nisi at nibh.",
  "location": "Krajan"
}, {
  "id": 6,
  "price": "$10.65",
  "reviews": 45,
  "name": "Nunc nisl.",
  "location": "North Shore"
}, {
  "id": 7,
  "price": "$12.51",
  "reviews": 42,
  "name": "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
  "location": "Héroumbili"
}, {
  "id": 8,
  "price": "$11.88",
  "reviews": 54,
  "name": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
  "location": "Campinas"
}, {
  "id": 9,
  "price": "$17.35",
  "reviews": 94,
  "name": "Pellentesque at nulla. Suspendisse potenti.",
  "location": "Sredniy"
}, {
  "id": 10,
  "price": "$15.29",
  "reviews": 62,
  "name": "Integer tincidunt ante vel ipsum.",
  "location": "Ngamba"
}, {
  "id": 11,
  "price": "$24.67",
  "reviews": 16,
  "name": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "location": "Panamá"
}, {
  "id": 12,
  "price": "$19.46",
  "reviews": 78,
  "name": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "location": "Jessore"
}, {
  "id": 13,
  "price": "$23.84",
  "reviews": 91,
  "name": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",
  "location": "Viale"
}, {
  "id": 14,
  "price": "$16.10",
  "reviews": 32,
  "name": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
  "location": "Saint Louis"
}, {
  "id": 15,
  "price": "$10.96",
  "reviews": 61,
  "name": "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "location": "Torre"
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

    this.state = {
      datasource: ds.cloneWithRows(cities),
      dataviewed:ds.cloneWithRows(viewed)
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
      <View style={{width:340, height:280}}>
      <Image source={images2[j]} resizeMode="stretch" style={{width:330, height:220, margin:5, justifyContent:'space-between'}}>
      <View style={styles.row}><View/>
      <Icon name='favorite-border' size={25} style={{backgroundColor:'rgba(0,0,0,0)', margin:10}} color='#fff' />
</View>
      <View style={styles.row}>
      <View style={{backgroundColor:'rgba(0,0,0,0.6)', marginBottom:10, paddingLeft:10}}><Text style={{color:'#fff', margin:10, fontSize:16, fontWeight:'500'}}>{val.price}</Text></View>
      </View>
      </Image>
      <View style={styles.row}>
      <View style={{margin:5}}>
      <Text 
      numberOfLines = {1}
      style={{fontSize:14, width:190}}>{val.name}</Text>
      <Text style={{fontWeight:'300', fontSize:13}}>Private Room</Text>
      </View>
      </View>
      </View>
      )
  }

  render() {
    return (
      <View style={{flex:1}}>
      <ScrollView style={{flex:1,}}>
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
    height:400,
    padding:5
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

