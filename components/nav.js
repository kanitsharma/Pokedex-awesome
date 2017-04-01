import React, { Component } from 'react';
import {Navigator} from 'react-native';
import {Icon , Button , Text} from 'native-base'
import Pokedex from './screen1'
import Pokesearch from './screen2'
import Detail from './screenexp'

const Nav = (props) => {

  const route = [
    {name: props.store.screen1, index: 0 },
    {name: props.store.screen2, index: 1 },
    {name: props.store.screen3, index : 2},
  ];

  return(
    <Navigator

      initialRoute={{ name : props.store.screen1 }}
      renderScene={ (route, navigator) => {
        props.getnav(navigator)
        if (route.name === props.store.screen1){
          return (
          <Pokedex store = {props.store} btdata = {props.btdata} navigator = {navigator} />
        )
        }
        if (route.name === props.store.screen2){
          return(
          <Pokesearch />
        )
        }
        if(route.name === props.store.screen3){
          return(
            <Detail store = {props.store} />
          )
        }
      }}
      navigationBar={
       <Navigator.NavigationBar
         routeMapper={{
           LeftButton: (route, navigator, index, navState ) =>
            {
              if(index == 0){
                return (
                <Button transparent style = {{ marginTop : 4}} onPress = {() => props.opd()}  >
                  <Icon name='menu' style = {{color : '#FFFEFF'}}/>
                </Button>

               )
              }
              else{
                return(
                  <Button transparent style = {{ marginTop : 4}} onPress = {() => navigator.pop()}  >
                    <Icon name='arrow-back' style = {{color : '#FFFEFF'}}/>
                  </Button>
                )
              }
          },
           RightButton: (route, navigator, index, navState) =>
             {},
           Title: (route, navigator, index, navState) =>
             { return (<Text style = {{ color : '#FFFEFF' , fontSize : 20 , marginTop : 13 , fontWeight : 'bold'}}>{route.name}</Text>); },
         }}
         style={{backgroundColor: '#EE1B25' , elevation : 5 , justifyContent : 'flex-start'}}
       />
      }
    />
  );
}
export default Nav;
