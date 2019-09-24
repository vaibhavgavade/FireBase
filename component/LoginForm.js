import React, { Component } from 'react';
import {Text,StyleSheet} from 'react-native'
import Input from '../component/Input';
import Spinner from '../component/Spinner'
import firebase from 'firebase'
import Button from '../component/Button';
import Card from '../component/Card';
import CardSection from '../component/CardSection';

 class LoginForm extends Component {
            state={
            email:'',
            password:'',
            loading:false,
            error:''
            
            }
     
    
     onLoginSucess=()=>{
         this.setState({
             email:'',
             password:'',
             loading:false
         })
     }
     onLoginFail=()=>{
        this.setState({error:'Auhhentication failed',loading:false});
     }

    
  
buttonOnPress=()=>{
    const{email,password,} = this.state
    this.setState({error:'', loading:true});
    
    console.log(this.state.loading)
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSucess())
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.onLoginSucess())
            .catch(this.onLoginFail)
        });
}

renderSpinner=()=>{
    
    if(this.state.loading){
       return <Spinner/>
    }
    return(
        <Button onPress={()=>this.buttonOnPress()}>
                      Login
                  </Button>

    )



}
  render() {
    return (
    
          <Card>
              <CardSection>
                    <Input 
                        secureTextEntry={false}
                        placeholder='vaibhav0413@gmail.com'
                        label='Email'
                        onChangeText={email=>this.setState({email})}
                        value={this.state.email}
                    />
                  </CardSection>
                
              <CardSection>
              <Input 
                        secureTextEntry={true}
                        placeholder='Enter Password'
                        label='Password'
                        onChangeText={password=>this.setState({password})}
                        value={this.state.password}
                    />
                  </CardSection>
                  <Text style={Styles.errorTextstyle}>{this.state.error}</Text>
              <CardSection>
                 {this.renderSpinner()}
              </CardSection>
         
          </Card>
 
    );
  }
}

const Styles = StyleSheet.create({
    errorTextstyle:{
        fontSize:25,
        alignSelf:'center',
        color:'red'
    }
})
export default LoginForm