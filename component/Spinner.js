import React from 'react';
import { Text, View ,ActivityIndicator,StyleSheet} from 'react-native';

const Spinner = () => {
    const{spinnerStyle}=Container

    return(
    <View style={spinnerStyle}>
            <ActivityIndicator size='large' color='black'/>
    </View>
    );
}
const Container=StyleSheet.create({
spinnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
}


})
export default Spinner;
