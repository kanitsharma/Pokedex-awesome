import React, { Component } from 'react';
import {Image , ListView , View , Text , TouchableNativeFeedback} from 'react-native'
import {Button , Icon} from 'native-base'
import Pokedex from './screen1'
import Pokesearch from './screen2'

const SideBar = (props) => {
  const btpressed = (rowData, sectionID, rowID) => {

    this.requestAnimationFrame(() => {

      if(rowID == 0){
        props.navigator.immediatelyResetRouteStack([{name: props.store.screen1}])
        props.reference.closeDrawer();
      }
      if(rowID == 1) {
        props.navigator.immediatelyResetRouteStack([{name: props.store.screen2}])
        props.reference.closeDrawer();
      }

    });


  }
  return(
    <View style={{flex : 1}}>
      <Image style = {{width : 300 , height : 200}} source={require('./img/poke.jpg')} />
      <ListView
        dataSource={props.store.dataSource}
        style={{marginTop : 20}}
        renderRow={(rowData, sectionID, rowID, highlightRow) => (
          <View style = {{ flexDirection : 'row'}}>
          <Button  large style = {{backgroundColor : '#FFFEFF',flex : 1 , flexDirection : 'row', justifyContent : 'flex-start'}} androidRippleColor ='red'
            onPress = {() => btpressed(rowData, sectionID, rowID)}
           >
              <Image style = {{width : 40 , height : 40 , marginRight : 20 }} source={require('./img/pokebag.png')} />
              <Text style = {{color : 'black' , fontSize : 20}} >{rowData}</Text>
          </Button>
          </View>
        ) }
      />
      <View style={{ justifyContent : 'flex-end' , alignItems : 'center' , margin : 10}}>
        <Text style={{ fontSize : 15 }}>
          Made By Kt-uchiha
        </Text>
      </View>
    </View>
  );
}
export default SideBar;
