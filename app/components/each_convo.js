/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import EachMessage from './inbox_widgets/eachMessage'
import TitleBar from './inbox_widgets/titleBar'
import Icon from 'react-native-vector-icons/MaterialIcons';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
const {width, height} = Dimensions.get('window');
import {
  AppRegistry,
  StyleSheet,
  ListView,
  TextInput,
  Dimensions,
  Image,
  Text,
  View
} from 'react-native';

var count;
var convo = [{note:"Are you a robot though dude?", person:2}, {person:1, note:"Working on it man"}, {note:"Yeah Whatever fam. Call me when you start taking life seriously", person:2}]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class Inbox extends Component {
  constructor(props){
    super(props)
    count = 1
    console.log(this.props)
    this.props.actions.changeNav('light')
    this.state = {
      datasource: ds.cloneWithRows(convo.reverse()),
      note: ""
    }
  }

  componentDidMount(){
    this.props.close();
    this.props.actions.navToPop('Rude Robot')
  }

  eachMessage(x){
    count ++;

    if(x.person == 2){
        return(
          <View style={{flexDirection:'row', alignItems:'flex-end', margin:5}}>
          <Image source ={{uri: "https://robohash.org/recusandaeperspiciatisunde.png?size=50x50&set=set1"}} resizeMode ="contain" style={{height:40, width:40, margin:5, borderRadius:20, backgroundColor:'#f8f8f8'}} />
          <View style={{width:220, borderRadius:10, backgroundColor:'#f4f4f4', padding:10}}>
          <Text style={{fontSize:15, color:'#555',fontWeight:'600'}}>{x.note}</Text>
          </View>
          </View>
          )
    }else{
        return(
          <View style={{flexDirection:'row', alignSelf:'flex-end', alignItems:'flex-end', margin:5}}>
          <View style={{width:220, borderRadius:10, backgroundColor:'#00b499', padding:10}}>
          <Text style={{fontSize:15, color:'#fff',fontWeight:'600'}}>{x.note}</Text>
          </View>
          <Image source ={{uri: "https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/13434970_10209841206091706_4316142461215331993_n.jpg?oh=6dcd8a17df9c06adfaab46ac1e108d52&oe=58271748"}} resizeMode ="contain" style={{height:40, width:40, margin:5, borderRadius:20, backgroundColor:'#f8f8f8'}} />

          </View>
          )}
  }
  submitThis(){

    convo.push({person:1, note:this.state.note})

    this.setState({
      datasource: ds.cloneWithRows(convo.reverse())
    })

    setTimeout(() => {
      this.similator();
    }, 1000);

  }

  similator(){
    convo.reverse();
    convo.push({person:2, note:"Fuck you Sam. Fuck you"})
    this.setState({
      datasource: ds.cloneWithRows(convo.reverse())
    })
  }

  render() {
    return (
      <View style={styles.container}>
       <View style={{borderBottomWidth:1,borderColor:"#e1e1e1", padding:15, flexDirection:'row', justifyContent:'space-between'}} >

       <Text style={{fontSize:15, color:'#333', fontWeight:'400'}}>Accepted</Text>
       <Text style={{fontSize:14, color:'#333', fontWeight:'400'}}>Details</Text>
      </View>

       <ListView 
          renderScrollComponent={props => <InvertibleScrollView {...props} inverted />}
          noScroll={true}
          style = {{flex:1,}}
          contentContainerStyle = {{justifyContent:'flex-end'}}
          dataSource = {this.state.datasource}
          renderRow = {(rowData) => this.eachMessage(rowData)}/>
          
          <View style={{alignSelf:'flex-end', padding:10, height:60, width:width, borderTopWidth:1, borderColor:'#f3f3f3', backgroundColor:'#fff'}}>
          <TextInput 
          style = {{flex:1,}}
          onChangeText = {(text) => this.setState({note:text})}
          onSubmitEditing = {() => this.submitThis()}
          placeholder ="Enter Your message here" 
          />
          </View>
      
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

