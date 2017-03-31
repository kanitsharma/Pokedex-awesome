import React, { Component } from 'react';
import {StatusBar , ListView , Text} from 'react-native';
import { Container } from 'native-base';

const Pokedex = (props) => {
  const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1.id !== r2.id
  });
  return(

    <Container>

      <ListView
        dataSource={ds.cloneWithRows(props.store.pokelist)}
        renderRow={(rowData,rowID,sectionID) => (
          <Text>{rowData}</Text>
        )}
      />

    </Container>
  );
}
export default Pokedex;
