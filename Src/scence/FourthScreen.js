//USeEffect in react native
import React, { useState,useEffect} from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';

function Count(){
  const[count, setCount]=useState(0);
  const[color,seColor]=useState('green');
  const increase=()=>setCount(count+1)
  const decrease=()=>setCount(count-1)
  const reset=()=>setCount(0)

  useEffect(()=>{
     console.log(`I am inside the use effect function, current count is:${count}`)
      return ()=>{
        console.log(`I am removing anythig that was setup  , Last count is:${count}, i am called when component unmounting`)
      }
},[count])

function handleColorChange(){
  const colorChange = color === 'green'? 'red':'green'
  seColor(colorChange)
}

return(
  <View style={Styles.Container}>
    <Text>count{count}</Text>
    <Button title='Increase' onPress={increase}/>
    <Button title='ChangeColor' onPress={handleColorChange}/>
    <Button title='Decrease' onPress={decrease}/>
    <Button title='Reset' onPress={reset}/>
    <Text style={{color}}>{count}</Text>
  </View>
)}

 function FourthScreen(){
    const [visible,setVisible]=useState(false)
   return(
    <View >

        <Button  title='Visible' onPress={()=>setVisible(!visible)}/>
      {visible && <Count/>}
    </View>
  )
   
  
}
export {FourthScreen}


const Styles=StyleSheet.create({
  Container:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
