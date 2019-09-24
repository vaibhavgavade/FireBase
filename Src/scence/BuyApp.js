import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Header from '../../component/Header';
import AlbumList from '../../component/AlbumList';


 class BuyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1}}>
       <Header textHeader={'Welcome to Amazon shopping'}/>
      <AlbumList/>
      
      </View>
        
      
    );
  }
}
// const Styles=StyleSheet.create({
//     conatiner:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })

export {BuyApp}