'use strict';

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Nav from "./global_widgets/nav"

import Home from './home';
import Inbox from './inbox';
import Invite from './invite';
import Profile from './profile';
import Settings from './settings';
import Trips from './trips';
import Wish from './wish';
import EachCity from './each_city';





connect(state => ({
 state: state.seven
}));

class Root extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        userData ={route.userData}
        navigator={navigator} />
        );
    }
      if (routeId === 'invite') {
      return (
        <Invite
        {...this.props} 
        data ={route.data}
        navigator={navigator} />
        );
    }
    if (routeId === 'profile') {
      return (
          <Profile
              {...this.props}
              data ={route.data}
              navigator={navigator} />
      );
    }
    if (routeId === 'inbox') {
      return (
          <Inbox
              {...this.props}
              data ={route.data}
              navigator={navigator} />
      );
    }
    if (routeId === 'wish') {
      return (
        <Wish
        {...this.props} 
        data ={route.data}
        navigator={navigator} />
        );
    }

    if (routeId === 'settings') {
      return (
        <Settings {...this.props} navigator={navigator} />
        );
    }
    if (routeId === 'trips') {
      return (
        <Trips {...this.props} 
        fireAuth = {firebaseAuth}
        navigator={navigator} />
        );
    }
  }


  render() {
    const { state, actions } = this.props;
    console.log(this.props)
    return (
      <View style ={{flex:1}}>
      <Nav {...this.props} color ={this.props.state.navColor} />
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'home', name: 'home'}}
     renderScene={this.renderScene.bind(this)}/>
     </View>
     );
  }
}

export default connect(state => ({
  state: state.airbnb
}),
(dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})
)(Root);
