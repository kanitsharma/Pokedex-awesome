import React, { Component } from 'react';
import {Text , View } from 'react-native'
import { Item , Input , Icon} from 'native-base'
const Pokesearch = (props) => {
  return(

      <View style={{ marginTop : 60  , padding : 10}}>
        <Item regular>
          <Icon name="search" />
          <Input placeholder='Enter Pokemon Name'/>
        </Item>
      </View>

  );
}
export default Pokesearch;
