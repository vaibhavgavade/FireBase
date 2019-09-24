import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import AlbumDetail from '../component/AlbumDetail';
import Spinner from '../component/Spinner'

class AlbumList extends Component {
    constructor(){
        super()
        this.state={
            dataSource:[],
            isLoading:true
        }
    }

    componentDidMount(){
        console.log('Component did mounted')
        fetch(`https://rallycoding.herokuapp.com/api/music_albums`,{
            method:'GET'
        })
        .then(response=>response.json())
        .then(responseJson=>{
                console.log(responseJson)
                this.setState({
                    dataSource:responseJson,
                    isLoading:!this.state.isLoading
                })
        })

    }

    renderItem=()=>{
       return (
        //    <Text>Helloo</Text>
           this.state.dataSource.map(album=>
              <AlbumDetail key={album.title} album={album}/>
            )
        )
       
    }
render() {
    console.log(this.state)


    if(this.state.isLoading){
        return(
        <Spinner/>
        )
    }
    else{
    return (

        
   <ScrollView>
        {/* {this.state.dataSource.map(album=>
                <Text key={album.title}>{album.title}</Text>
            )} */}
            {this.renderItem()}
            </ScrollView>   
     
    );

        }
  }
}
export default AlbumList;