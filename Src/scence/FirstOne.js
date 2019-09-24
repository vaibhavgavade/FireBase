import React,{Component,PureComponent}from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Button} from 'react-native';
PureFunc=(props)=>{
  return(
    <View>
          <Text>{props.val}</Text>
    </View>
    )
 };
 



class FirstOne extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
          val:1
    };
  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
          val:2
      });
    }, 2000
    )
  }

 render() {
   console.log('rendering value is',this.state.val)
  return (
     <View style={Styles.Container}>
      
      <PureFunc val={this.state.val}/>
      <Button title='Go Next' onPress={()=>this.props.navigation.navigate('second')}/>
    
      <Button title='Go Fourth' onPress={()=>this.props.navigation.navigate('fourth')}/>
      <Button title='Go Buy' onPress={()=>this.props.navigation.navigate('buy')}/>
      <Button title='FireBase' onPress={()=>this.props.navigation.navigate('auth')}/>
  
  
     
     </View>
    );
  }
}

export {FirstOne};

const Styles=StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})