import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';

export default class FifthScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> FifthScreen </Text>
      </View>
    );
  }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
