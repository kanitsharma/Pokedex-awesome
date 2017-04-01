  import React, { Component } from 'react';
  import {
    DrawerLayoutAndroid,
    Text,

  } from 'react-native';
  import {Button} from 'native-base'
  import Nav from './nav'
  import SideBar from './sidebar'



  const Main = (props) => {

  let nav , dlayout;

  const getnav = (navigator) =>{
    nav = navigator
  }
  const setNode = (node) => {
    dlayout = node
  }
  const opendrawer = () => {
    dlayout.openDrawer();
  }

  return(
    <DrawerLayoutAndroid
    drawerWidth={300}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    statusBarBackgroundColor= '#BF1E2F'
    ref={ setNode }
    renderNavigationView={() =>  <SideBar navigator = {nav} store = {props.store} reference = {dlayout}/>
    }>
      <Nav getnav = {getnav} store = {props.store} opd = {opendrawer} btdata = {props.btdata}/>
    </DrawerLayoutAndroid>

  );
  }

  export default Main;
