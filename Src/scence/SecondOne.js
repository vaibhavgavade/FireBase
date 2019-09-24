import React,{useState,useEffect} from 'react';
import { View, Text,StyleSheet,TextInput,Button,TouchableOpacity} from 'react-native';


function SecondOne(){  
    const [count, setCount]=useState(0)
    const [city, setCity] = useState('')
    const [country,SetCountry]=useState('')
    
         const increaseValue = ()=> setCount(count+1)
        const decreaseValue = ()=>setCount(count-1)
        const resetValue = ()=>setCount(0)
        // useEffect(()=>{
        //     setInterval(()=>{
        //         setCount(count+1)
        //     }, 2000)
        // })
        

            const handeChangeCity=(event)=>setCity(event)
            const handleChangeCountry=(event)=>SetCountry(event)
     
    return(
      <View style={Styles.Container}>
          <Text>count is:{count}</Text>
          <Button title='Increase' onPress={increaseValue}/>
          <Button title='Decrease' onPress={decreaseValue}/>
          <Button title='Reset' onPress={resetValue}/>

            <TextInput style={Styles.inputData}
                    value={city}
                    onChangeText={handeChangeCity}
            />
            <TextInput style={Styles.inputData}
                value={country}
                onChangeText={handleChangeCountry}
            />
                <View>
                  <Text>{`${city} and ${country}`}</Text>
                </View>

           
      </View>
    ) 

}
export  {SecondOne};
const Styles=StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }, 
    inputData:{
        
        borderBottomWidth: 1,
        marginBottom:30,
        width:200
    }

})
