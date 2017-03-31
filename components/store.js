import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ListView
} from 'react-native'

import Main from './index'

export default class pokedex_awesome extends Component{

  constructor(props){
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const endpoint = 'https://pokeapi.co/api/v1/';
    this.state = {
      dataSource: ds.cloneWithRows(['Pokedex', 'Pokesearch']),
      screen1 : 'Pokedex',
      screen2 : 'Pokesearch',
      pokedexdata : {},
      pokelist : [],
      pokeresource : {},
    }
  }



  componentWillMount(){

    this.getdata()
  }
  getdata(){
    pokelist = []
    const endpoint = 'https://pokeapi.co/api/v1/';
    return fetch('https://pokeapi.co/api/v1/pokedex/1/')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ pokedexdata : responseJson })
      responseJson.pokemon.map((obj) => {
        pokelist.push(obj.name);
      })
      this.setState({ pokelist : pokelist })
    })
    .catch((error) => {
      console.error(error);
    });
  }
  render(){
    return(
      <Main store = {this.state} />
    );
  }

}

AppRegistry.registerComponent('pokedex_awesome', () => pokedex_awesome);
