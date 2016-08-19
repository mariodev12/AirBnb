import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';
import React, {Component, ScrollView, Text, View, Image, Dimensions } from 'react-native';
   var userData;

const initialState = {
	navColor:'#fff',
  navStyle:{backgroundColor:'#ff585b', color:'#fff', padding:20},
  userDeets: {
  	email:"s.okoro07@gmail.com",
  	first_name:'Samuel',
  	last_name:'Okoro',
  	image:'https://scontent-dft4-1.xx.fbcdn.net/v/t1.0-9/13434970_10209841206091706_4316142461215331993_n.jpg?oh=6dcd8a17df9c06adfaab46ac1e108d52&oe=58271748'
 },
 trips: {},
 listings: {},
 navigator:"",
 navProps:{
  name:"",
  type:"menu",
  icon:"menu"
 }

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

case types.NAV_TO_POP:
return{
  ...state,
  navProps: {name:action.name, type:"pop", icon:'arrow-back'}
}

case types.CHANGE_NAV_STYLE:
console.log(action.prop)

if(action.prop == "light"){
return {
...state,
navStyle : {backgroundColor:'#fff', color:'#444'},
navProps:{
  name:"",
  type:"menu",
  icon:"menu"
 }
}
}
else if(action.prop == "dark"){
  return{
    ...state,
    navStyle: {backgroundColor:'#ff585b', color:'#fff'},
    navProps:{
  name:"",
  type:"menu",
  icon:"menu"
 }
  }
} 






default:
return state;

}
}
