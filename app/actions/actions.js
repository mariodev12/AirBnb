import * as types from './actionTypes';


export function login(navProps, res) {
  console.log(res);
  return {
    type: types.LOGIN,
    nav:navProps,
    data: res
  };
}
export function setNav(nav) {
  console.log(nav)
  return {
    type: types.NAV,
    navigator : nav
  };
}

export function navigate(id){
  return {
    type: types.NAVTO,
    props : id
  }
}




