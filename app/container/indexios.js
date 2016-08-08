import * as firebase from 'firebase';

  // firebaseApp.database().ref().on("value", (snap) => {console.log(snap.val())})

import React, { Component } from 'react';
import { View, Text, StatusBar, TouchableOpacity} from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


import * as reducers from '../reducers';
import Components from '../components/index';

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


  componentDidMount(){
  }
  render() {
    return (
      <View
       style={{flex:1}}>
      <StatusBar
     barStyle="light-content"/>
      <Provider store={store}>
        <Components/>
      </Provider>
      </View>);
  }
}
