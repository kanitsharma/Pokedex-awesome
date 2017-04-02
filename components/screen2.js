import React, { Component } from 'react';
import {Text , View , ToastAndroid } from 'react-native'
import { Item , Input , Icon} from 'native-base'
const Pokesearch = (props) => {
  let Value = '' , pokeid
  const change  = (value) => {
    Value = value
  }
  const submit = () => {
    props.resetState();
    pokeid = null
    props.store.pokelist.map((obj,index) => {
      if(obj == Value.toLowerCase()){
        props.btdata(index)
        props.navigator.push({name : props.store.screen3})
        pokeid = true
      }
    })
    if(pokeid == null)
    ToastAndroid.show('No pokemon found!', ToastAndroid.SHORT);
  }
  const setNode = (node) => {
    tinput = node
  }
  return(

      <View style={{ marginTop : 60  , padding : 10 }}>
        <Item regular>
          <Icon name="search" />
          <Input placeholder='Enter Pokemon Name'
            autoFocus = {true}
            onChangeText = { (value) => change(value) }
            onSubmitEditing = { () => submit() }
            style = {{ height : 50 ,  fontSize : 20 , textDecorationColor : 'white' }}
           />
        </Item>
      </View>

  );
}
export default Pokesearch;
