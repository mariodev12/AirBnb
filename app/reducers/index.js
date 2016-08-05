import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';
import React, {Component, ScrollView, Text, View, Image, Dimensions } from 'react-native';
   var userData;

const initialState = {
	navColor:'#fff',
  userDeets: {

 },
 trips: {},
 listings: {}

};

export function airbnb(state = initialState, action = {}) {
    switch(action.type){
   case types.LOGIN:

return {...state, userDeets:userData};

case types.NAV:
return {...state,
  navigator: action.navigator
}

case types.NAVTO:
console.log("Moving nave to " + action.props)
state.navigator.replace({
  id: action.props,
  name: action.props,
})

return {
  ...state,
  openMenu: false 
};




default:
return state;

}
}
