import React, { Component } from 'react';
import {StatusBar , ListView , Text , Image} from 'react-native';
import { Container , Button , Spinner } from 'native-base';
import Detail from './screenexp'

const Pokedex = (props) => {
  const btpressed = (rowData, sectionID, rowID) => {
    this.requestAnimationFrame(() => {
      props.navigator.push({name: props.store.screen3})
      props.resetState();
      props.btdata(rowID)
    });
  }
  const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
  });
  return(

    <Container style={{ marginTop : 56 }}>
    <Spinner color = 'red' style = {{position: 'absolute',top: 20,left: 170,elevation : 20}} animating = {props.store.animating} />
      <ListView
        pageSize= {1}
        dataSource={ds.cloneWithRows(props.store.pokelist)}
        renderRow={(rowData, sectionID, rowID) => (
          <Button full large style = {{backgroundColor : '#FFFEFF', justifyContent : 'flex-start' , paddingTop : 10}} androidRippleColor ='red'
          onPress = {() => btpressed(rowData, sectionID, rowID)}>
            <Image style = {{width : 50 , height : 50 , marginRight : 10}} source={require('./img/pokeball.png')} />
            <Text style = {{color : 'black'}} >{rowData.toUpperCase()}</Text>
          </Button>
        )}
      />

    </Container>
  );
}
export default Pokedex;
