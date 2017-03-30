import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Gg from './index'
export default class pokedex_awesome extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Gg  name = "Good Game"  />
    );
  }

}


AppRegistry.registerComponent('pokedex_awesome', () => pokedex_awesome);
