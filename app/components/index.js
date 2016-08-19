'use strict';

import React, { Component } from 'react';
import { View, Navigator } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import Nav from "./global_widgets/nav"
import Drawer from 'react-native-drawer'
import ControlPanel from './controlPanel'
import Icon from 'react-native-vector-icons/MaterialIcons';


import Home from './home';
import Convo from './each_convo';
import Inbox from './inbox';
import Invite from './invite';
import Profile from './profile';
import Settings from './settings';
import Search from './search';
import Trips from './trips';
import Wish from './wish';
import EachCity from './each_city';

var drawerRef = {
  close: () => console.log("close"),
  open: () => console.log("open"),

}



connect(state => ({
 state: state.seven
}));

class Root extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    drawerRef = this.refs.drawer;
  }
  closeControlPanel(){
    drawerRef.close()
  }
  openControlPanel(){
    drawerRef.open()
  }

  renderScene(route, navigator) {
    var {state,actions} = this.props;
    var routeId = route.id;

    if (routeId === 'home') {
      return (
        <Home
        {...this.props} 
        userData ={route.userData}
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }
      if (routeId === 'invite') {
      return (
        <Invite
        {...this.props} 
        data ={route.data}
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }
    if (routeId === 'profile') {
      return (
          <Profile
              {...this.props}
              data ={route.data}
              close = {() => this.closeControlPanel()}
              navigator={navigator} />
      );
    }
    if (routeId === 'inbox') {
      return (
          <Inbox
              {...this.props}
              data ={route.data}
              close = {() => this.closeControlPanel()}
              navigator={navigator} />
      );
    }
    if (routeId === 'convo') {
      return (
          <Convo
              {...this.props}
              data ={route.data}
              close = {() => this.closeControlPanel()}
              navigator={navigator} />
      );
    }
    if (routeId === 'wish') {
      return (
        <Wish
        {...this.props} 
        data ={route.data}
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }

    if (routeId === 'settings') {
      return (
        <Settings {...this.props} 
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }
    if (routeId === 'trips') {
      return (
        <Trips {...this.props} 
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }
    if (routeId === 'search') {
      return (
        <Search {...this.props} 
        close = {() => this.closeControlPanel()}
        navigator={navigator} />
        );
    }
  }


  render() {
    const { state, actions } = this.props;
    console.log(this.props)
    return (

      <View style ={{flex:1}}>
       <Drawer
        ref = "drawer"
        tapToClose={true}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        content={<ControlPanel {...this.props} onPress = {() => this.closeControlPanel()}/>}
        >
      <Nav {...this.props} pop = {() => this.refs.NAV} onPress = {() => this.openControlPanel()}  />
     <Navigator
     style={{flex: 1}}
     ref={'NAV'}
     initialRoute={{id: 'home', name: 'home'}}
     renderScene={this.renderScene.bind(this)}/>
     </Drawer>
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
