import * as firebase from 'firebase';

  // firebaseApp.database().ref().on("value", (snap) => {console.log(snap.val())})

import React, { Component } from 'react';
import { View, Text, StatusBar} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Drawer from 'react-native-drawer'
import ControlPanel from '../components/controlPanel'

import * as reducers from '../reducers';
import Components from '../components';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

var config = {
    apiKey: "AIzaSyDgLxEbRZQZM0s0qNOwv8sX4hQvkTEdILg",
    authDomain: "airbnb-99efb.firebaseapp.com",
    databaseURL: "https://airbnb-99efb.firebaseio.com",
    storageBucket: "airbnb-99efb.appspot.com",
  };

  const firebaseApp = firebase.initializeApp(config);

export default class Index extends Component {
closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  componentDidMount(){
    this.openControlPanel()
  }
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#ff585b'}}>
      <StatusBar
     barStyle="light-content"
   />
   <Drawer
        ref={(ref) => this._drawer = ref}
        tapToClose={true}
        openDrawerOffset={100}
        tweenHandler={Drawer.tweenPresets.parallax}
        content={<ControlPanel />}
        >
      <Provider store={store}>
        <Components />
      </Provider>
      </Drawer>
      </View>);
  }
}
