import  React, {Component} from 'react';
import { Text, View,TouchableOpacity, Button, StyleSheet} from 'react-native';
import {Audio} from 'expo-av';
import DJButton from './components/DJButton';
import DJTouchable from './components/DJTouchable';
import AppHeader from './components/AppHeader'




class StopButton extends Component {
  
  render(){
    return(
      <TouchableOpacity style={{
         width:450,
         height:35,
         marginTop:40,
          backgroundColor:'red',
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center"
          
          }}
          onPress={()=>{
             Audio.setIsEnabledAsync(false);
          }
         }
          >
          <Text  style={{ fontWeight : 'bold', fontSize:20}}> STOP SOUND </Text>
          </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  render(){
    return(
      <View style={{backgroundColor:'black'}} >
      <AppHeader/>
       <DJTouchable mycolor="purple" mytitle="Guitar Music" myuri="https://freesound.org/data/previews/231/231341_3908940-lq.mp3"/>

        <DJTouchable mycolor="olive" mytitle="Jingle Bells" myuri="https://freesound.org/data/previews/452/452774_9080507-lq.mp3"/>

        <DJTouchable mycolor="cyan" mytitle="Drum Roll" myuri="https://freesound.org/data/previews/368/368405_5381677-lq.mp3"/>

         <DJTouchable mycolor="blue" mytitle="Orchestra" myuri="https://freesound.org/data/previews/353/353964_5442183-lq.mp3"/>
       
       
        <StopButton/>
      </View>

    )
  }
}



