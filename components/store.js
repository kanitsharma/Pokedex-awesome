import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ListView
} from 'react-native'

import Main from './main'

export default class pokedex_awesome extends Component{

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.btdata = this.btdata.bind(this)
    this.resetState = this.resetState.bind(this)
    this.state = {
      dataSource: ds.cloneWithRows(['Pokedex', 'Pokesearch']),
      screen1 : 'Pokedex',
      screen2 : 'Pokesearch',
      screen3 : 'Detail',
      pokelist : [],
      pokeresourceuri : [],
      resdata : {},
      animating : true,
      sprite : '',
      imagebaseurl : 'https://pokeapi.co/',
      desc : '',
      types : [],
      abilities : [],
    }
  }

  componentWillMount(){
    this.getdata()
  }

  resetState(){
    this.setState( {resdata : {} , desc : '' , sprite : '' , types : [] , abilities : [] , animating : true} )
  }

  btdata(rowID){
    types = []
    abilities = []
    const endpoint = 'https://pokeapi.co/';
    fetch(endpoint+this.state.pokeresourceuri[rowID])
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState( {resdata : responseJson} )
      responseJson.types.map((obj) => {
        types.push(obj.name)
        })
        this.setState({types : types})
      responseJson.abilities.map((obj) => {
        abilities.push(obj.name)
        })
        this.setState({abilities : abilities})
        fetch(endpoint+this.state.resdata.sprites[0].resource_uri)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ sprite : responseJson.image })
        }).then(() => {
          this.setState({ animating : false })
        })
        fetch(endpoint+this.state.resdata.descriptions[0].resource_uri)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({ desc : responseJson.description })
      })
    })
}


  getdata(){
    pokelist = []
    pokeresource = []
    return fetch('https://pokeapi.co/api/v1/pokedex/1/')
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.pokemon.map((obj) => {
        pokelist.push(obj.name);
        pokeresource.push(obj.resource_uri)
      })
      this.setState({ pokelist : pokelist })
      this.setState({ pokeresourceuri : pokeresource })
    })
    .catch((error) => {
      console.error(error);
    });
  }


  render(){
    return(
      <Main store = {this.state} btdata = {this.btdata} resetState = {this.resetState} />
    );
  }

}

AppRegistry.registerComponent('pokedex_awesome', () => pokedex_awesome);
