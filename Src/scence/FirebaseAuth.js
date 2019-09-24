import React, { Component } from 'react';
import { View,Alert} from 'react-native';
import Firebase from '../../component/Firebase'
import Header from '../../component/Header';
import LoginForm from '../../component/LoginForm'
import Button from '../../component/Button';
import CardSection from '../../component/CardSection'

class FirebaseAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false
      
    };
  }

  componentDidMount(){
     Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              this.setState({
                isLogin:true
              })
            }else
            {
              this.setState({
                isLogin:false
              })
            }
            
          })
    }

    onDismiss(){

      Alert.alert(
      
        'info',
        'Do you really want to logout this App',
        [
          {
            text: 'ok',
            onPress: () => {
              console.log("test");
              Firebase.auth().signOut();
              this.props.navigation.navigate('one');
             
            },
          },
        ],
        
    )

      
     
       
      
     
   }





   logonOff=()=>{
     if(this.state.isLogin){
       return(
        
           <CardSection>
           <Button onPress={()=>{
           
           this.onDismiss()
          }}>
               Log Out
          </Button>
           </CardSection>
       
         
    
       )
     } 
     else{
     return(
       <LoginForm/>
        )
     }

   }

  render() {
    
    return (
      <View style={{flex:1}}>
          <Header textHeader={'FireBase'}/>
           {this.logonOff()}
      </View>
    );
  }
}



  export {FirebaseAuth}