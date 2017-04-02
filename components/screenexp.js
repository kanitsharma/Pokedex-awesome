import React, { Component } from 'react';
import {Container , Spinner , Card, CardItem, Text,Left, Body , Content} from 'native-base'
import {Image ,View , ScrollView} from 'react-native'

const Detail = (props) => {
  const gg = props.store.types.map((obj) => {
    return(
      <Text style={{ paddingRight : 20 , paddingLeft : 20, color : '#847577'}}>
        {obj}
      </Text>
    )
  })
  const pp = props.store.abilities.map((obj) => {
    return(
      <Text style={{ paddingTop : 5 , color : '#847577'}}>
        {obj}
      </Text>
    )
  })
  return(

      <View style = {{ flex : 1 , backgroundColor : '#ECECEC' , padding : 10}}>
        <View style = {{marginTop : 60 , flexDirection : 'column' , padding : 20 ,backgroundColor : '#FFFEFF', elevation : 10 }}>

          <Spinner color = 'red' style = {{position: 'absolute',top: 20,left: 170,elevation : 20}} animating = {props.store.animating} />
          <View style= {{ flexDirection : 'row' , alignItems : 'center' }}>
            <Image style={{width: 80, height: 80 , marginRight : 10}} source = {{uri : props.store.imagebaseurl + props.store.sprite}} />
            <Text style={{ fontSize : 28}}>{props.store.resdata.name}</Text>
          </View>
          <Text style = {{ lineHeight : 25 , color : '#847577' }}>
            {props.store.desc}
          </Text>
          <View style={{ flexDirection : 'row' , paddingTop : 20 , }}>
            <Text>Height :</Text><Text style={{ alignItems : 'flex-start' , marginRight : 130 , color : '#847577'  }}>  {props.store.resdata.height}</Text>
            <Text>Weight :</Text><Text style={{ alignItems : 'flex-end', color : '#847577' }} >  {props.store.resdata.weight} </Text>
          </View>

          <View style={{ flexDirection : 'row' , paddingTop : 20,alignItems : 'center' }}>
            <Text>Types  :</Text>
            {gg}
          </View>
          <View style={{  paddingTop : 20 , paddingBottom : 10 , flexWrap : 'wrap' }}>
            <Text >Abilities  :</Text>
            {pp}
          </View>
        </View>
        <View style={{ justifyContent : 'flex-end' , alignItems : 'center' , marginTop : 10 }}>
          <Image style = {{width : 55 , height : 55}} source={require('./img/pokedex.png')} />
        </View>
      </View>

  );
}
export default Detail;
