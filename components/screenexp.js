import React, { Component } from 'react';
import {Container , Spinner , Card, CardItem, Text,Left, Body , Content} from 'native-base'
import {Image ,View , ScrollView} from 'react-native'

const Detail = (props) => {
  const gg = props.store.types.map((obj) => {
    return(
      <Text style={{ paddingRight : 20 , paddingLeft : 20}}>
        {obj}
      </Text>
    )
  })
  const pp = props.store.abilities.map((obj) => {
    return(
      <Text style={{ paddingTop : 5 ,}}>
        {obj}
      </Text>
    )
  })
  return(

      <View style = {{ flex : 1 , backgroundColor : '#FFE9E8'}}>
        <View style = {{marginTop : 70 , flexDirection : 'column' , padding : 20 ,backgroundColor : '#FFFEFF', elevation : 10 }}>

          <Spinner color = 'red' style = {{position: 'absolute',top: 20,left: 170,elevation : 20}} animating = {props.store.animating} />
          <View style= {{ flexDirection : 'row' , alignItems : 'center' }}>
            <Image style={{width: 90, height: 90 , marginRight : 20}} source = {{uri : props.store.imagebaseurl + props.store.sprite}} />
            <Text style={{ fontSize : 28}}>{props.store.resdata.name}</Text>
          </View>
          <Text style = {{ lineHeight : 25 }}>
            {props.store.desc}
          </Text>
          <View style={{ flexDirection : 'row' , paddingTop : 20 , }}>
            <Text style={{ alignItems : 'flex-start' , marginRight : 130  }}>Height :  {props.store.resdata.height}</Text>
            <Text style={{ alignItems : 'flex-end' }} >Weight : {props.store.resdata.weight} </Text>
          </View>

          <View style={{ flexDirection : 'row' , paddingTop : 20,alignItems : 'center' }}>
            <Text style={{ fontSize : 20 }}>Types  :</Text>
            {gg}
          </View>
          <View style={{  paddingTop : 20 , paddingBottom : 10 , flexWrap : 'wrap' }}>
            <Text style={{ fontSize : 20 }}>Abilities  :</Text>
            {pp}
          </View>
        </View>
      </View>

  );
}
export default Detail;
