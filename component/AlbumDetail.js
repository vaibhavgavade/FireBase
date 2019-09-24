import React from 'react';
import { Text, View ,StyleSheet,Image,Linking} from 'react-native';
import Card from '../component/Card';
import CardSection from '../component/CardSection';
import Button from '../component/Button';
import AppFonts from '../component/FontData'


const AlbumDetail = ({album}) => {
    const {title,artist,thumbnail_image,image,url}=album

    const {headerContentStyle,imageStyle,imageContainerStyle,headerTextStyle,bigImage}=Styles
    return(
            <Card>
            <CardSection>
                <View style={imageContainerStyle}>
                    <Image style={imageStyle}
                    source={{uri:thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text style={{fontFamily:AppFonts.bold}} >
                    {artist}
                </Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={bigImage}
                source={{uri:image}}/>
            </CardSection>
           
            <Button onPress={()=>Linking.openURL(url)} >
               Buy Now
                </Button>
         
        
        </Card>
    );
    }

    const Styles=StyleSheet.create({
        headerContentStyle:{
            flexDirection:'column',
            justifyContent:'space-around'

        },
        imageStyle:{
            height:50,
            width:50
        },
        imageContainerStyle:{
            justifyContent:'center',
            alignItems:'center',
            marginLeft:10,
             marginRight:10
        },
        headerTextStyle:{
            fontSize:25,
            fontFamily:AppFonts.extraBold
        },
        bigImage:{
            height:300,
            flex:1,
            width:null
        }
    })
export default AlbumDetail;
