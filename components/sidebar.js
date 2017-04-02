import React, { Component } from 'react';
import {Image , ListView , View , Text , TouchableNativeFeedback} from 'react-native'
import {Button} from 'native-base'
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
        renderRow={(rowData, sectionID, rowID, highlightRow) => (
          <Button full large style = {{backgroundColor : '#FFFEFF'}} androidRippleColor ='red'
            onPress = {() => btpressed(rowData, sectionID, rowID)}
           >
              <Text style = {{color : 'black' , fontSize : 20}} >{rowData}</Text>
          </Button>
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
