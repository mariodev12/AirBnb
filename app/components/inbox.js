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

inboxData = [{
  "id": 1,
  "first_name": "Joshua",
  "time": "2016-04-02T15:34:31Z",
  "status": "vehicula",
  "avatar": "https://robohash.org/recusandaeperspiciatisunde.png?size=50x50&set=set1",
  "message": "In hac habitasse platea dictumst."
}, {
  "id": 2,
  "first_name": "Dennis",
  "time": "2016-07-19T09:36:05Z",
  "status": "vestibulum",
  "avatar": "https://robohash.org/quiaimpeditexpedita.png?size=50x50&set=set1",
  "message": "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus."
}, {
  "id": 3,
  "first_name": "Daniel",
  "time": "2015-11-25T00:34:30Z",
  "status": "aenean",
  "avatar": "https://robohash.org/iustoautemmagnam.jpg?size=50x50&set=set1",
  "message": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}, {
  "id": 4,
  "first_name": "Catherine",
  "time": "2015-09-13T13:48:07Z",
  "status": "integer",
  "avatar": "https://robohash.org/laboriosamquaea.bmp?size=50x50&set=set1",
  "message": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
}, {
  "id": 5,
  "first_name": "Joseph",
  "time": "2015-09-05T23:05:05Z",
  "status": "feugiat",
  "avatar": "https://robohash.org/suscipitetqui.jpg?size=50x50&set=set1",
  "message": "Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
}, {
  "id": 6,
  "first_name": "Adam",
  "time": "2015-12-21T22:21:13Z",
  "status": "venenatis",
  "avatar": "https://robohash.org/sapientereiciendissed.jpg?size=50x50&set=set1",
  "message": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet."
}, {
  "id": 7,
  "first_name": "Ryan",
  "time": "2016-01-20T04:22:48Z",
  "status": "ac",
  "avatar": "https://robohash.org/utautemqui.jpg?size=50x50&set=set1",
  "message": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
}, {
  "id": 8,
  "first_name": "Charles",
  "time": "2016-06-12T02:53:16Z",
  "status": "dui",
  "avatar": "https://robohash.org/eligendierrordelectus.png?size=50x50&set=set1",
  "message": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
}, {
  "id": 9,
  "first_name": "Gerald",
  "time": "2016-05-21T12:44:20Z",
  "status": "ipsum",
  "avatar": "https://robohash.org/consequunturaconsequatur.bmp?size=50x50&set=set1",
  "message": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
}, {
  "id": 10,
  "first_name": "Russell",
  "time": "2015-10-06T23:39:44Z",
  "status": "suscipit",
  "avatar": "https://robohash.org/aspernaturhicdebitis.jpg?size=50x50&set=set1",
  "message": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc."
}, {
  "id": 11,
  "first_name": "Elizabeth",
  "time": "2016-01-26T12:48:43Z",
  "status": "sed",
  "avatar": "https://robohash.org/itaquenesciuntrerum.jpg?size=50x50&set=set1",
  "message": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."
}, {
  "id": 12,
  "first_name": "Julia",
  "time": "2016-03-28T17:39:50Z",
  "status": "nam",
  "avatar": "https://robohash.org/utinnemo.png?size=50x50&set=set1",
  "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
}, {
  "id": 13,
  "first_name": "Larry",
  "time": "2016-03-12T10:06:01Z",
  "status": "imperdiet",
  "avatar": "https://robohash.org/autabautem.png?size=50x50&set=set1",
  "message": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit."
}, {
  "id": 14,
  "first_name": "Ernest",
  "time": "2016-03-14T05:50:35Z",
  "status": "nulla",
  "avatar": "https://robohash.org/optioquaetempora.jpg?size=50x50&set=set1",
  "message": "Nulla nisl. Nunc nisl."
}, {
  "id": 15,
  "first_name": "Ashley",
  "time": "2016-01-04T19:51:49Z",
  "status": "ac",
  "avatar": "https://robohash.org/maximevoluptatemut.png?size=50x50&set=set1",
  "message": "Aliquam erat volutpat. In congue. Etiam justo."
}, {
  "id": 16,
  "first_name": "Teresa",
  "time": "2016-04-22T23:50:05Z",
  "status": "nulla",
  "avatar": "https://robohash.org/perferendisetet.bmp?size=50x50&set=set1",
  "message": "Praesent id massa id nisl venenatis lacinia."
}, {
  "id": 17,
  "first_name": "Randy",
  "time": "2015-12-09T14:03:04Z",
  "status": "tempus",
  "avatar": "https://robohash.org/explicabovoluptasvoluptatibus.png?size=50x50&set=set1",
  "message": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla."
}, {
  "id": 18,
  "first_name": "Kevin",
  "time": "2016-07-18T09:38:31Z",
  "status": "mi",
  "avatar": "https://robohash.org/fugadignissimosquasi.bmp?size=50x50&set=set1",
  "message": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis."
}, {
  "id": 19,
  "first_name": "Shirley",
  "time": "2015-10-28T01:53:51Z",
  "status": "purus",
  "avatar": "https://robohash.org/porromollitianemo.bmp?size=50x50&set=set1",
  "message": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst."
}, {
  "id": 20,
  "first_name": "Catherine",
  "time": "2015-08-10T06:51:37Z",
  "status": "nisl",
  "avatar": "https://robohash.org/corporisnatusconsequuntur.png?size=50x50&set=set1",
  "message": "In congue."
}, {
  "id": 21,
  "first_name": "Dennis",
  "time": "2015-08-14T13:32:40Z",
  "status": "eu",
  "avatar": "https://robohash.org/eligendiexpeditaatque.png?size=50x50&set=set1",
  "message": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis."
}, {
  "id": 22,
  "first_name": "Paul",
  "time": "2016-04-02T13:17:25Z",
  "status": "amet",
  "avatar": "https://robohash.org/sitmaioreset.jpg?size=50x50&set=set1",
  "message": "Nullam molestie nibh in lectus."
}, {
  "id": 23,
  "first_name": "Ruth",
  "time": "2016-02-14T05:38:59Z",
  "status": "ut",
  "avatar": "https://robohash.org/evenietfugiatconsequatur.bmp?size=50x50&set=set1",
  "message": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."
}, {
  "id": 24,
  "first_name": "Samuel",
  "time": "2015-11-20T01:55:07Z",
  "status": "sociis",
  "avatar": "https://robohash.org/idetsed.jpg?size=50x50&set=set1",
  "message": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla."
}, {
  "id": 25,
  "first_name": "Ruth",
  "time": "2015-09-17T21:33:35Z",
  "status": "blandit",
  "avatar": "https://robohash.org/dolorharumtemporibus.jpg?size=50x50&set=set1",
  "message": "In congue."
}, {
  "id": 26,
  "first_name": "Annie",
  "time": "2016-01-15T19:45:44Z",
  "status": "pede",
  "avatar": "https://robohash.org/saepereiciendisid.bmp?size=50x50&set=set1",
  "message": "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio."
}, {
  "id": 27,
  "first_name": "Pamela",
  "time": "2015-09-14T09:10:26Z",
  "status": "cursus",
  "avatar": "https://robohash.org/utetut.jpg?size=50x50&set=set1",
  "message": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl."
}, {
  "id": 28,
  "first_name": "Shawn",
  "time": "2016-03-08T23:34:38Z",
  "status": "non",
  "avatar": "https://robohash.org/fugiatvoluptatelaboriosam.bmp?size=50x50&set=set1",
  "message": "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus."
}, {
  "id": 29,
  "first_name": "Alan",
  "time": "2015-12-08T19:23:35Z",
  "status": "aenean",
  "avatar": "https://robohash.org/officiisquiexplicabo.jpg?size=50x50&set=set1",
  "message": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
}, {
  "id": 30,
  "first_name": "Antonio",
  "time": "2016-01-06T01:38:16Z",
  "status": "felis",
  "avatar": "https://robohash.org/eumlaudantiumreiciendis.bmp?size=50x50&set=set1",
  "message": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh."
}];
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
       <View>
       <Text style={{fontSize:38, color:'#333', margin:20, marginLeft:0, fontWeight:'700'}}>Inbox</Text>
       <View style={{borderBottomWidth:1, margin:20, marginLeft:0, borderColor:"#e1e1e1", width:30}} />
       <View>
       <Text style={{margin:5, marginLeft:0, color:'#888', fontSize:18}}>Messages</Text>
       </View>

       <ListView 
          noScroll={true}
          dataSource = {this.state.datasource}
          renderRow = {(rowData) => <EachMessage {...this.props} rowData = {rowData} />}
          />
       </View>
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

