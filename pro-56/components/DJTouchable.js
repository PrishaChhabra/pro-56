import  React, {Component} from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Audio} from 'expo-av';

class DJTouchable extends Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      {uri: this.props.myuri},
   { shouldPlay: true }
    );
  }
  render(){
    return(
      <TouchableOpacity style={[styles.touchablestyle,{backgroundColor:this.props.mycolor}]} 
      onPress={this.playSound}> 
      <Text style={styles.textstyle}> {this.props.mytitle} </Text>
      </TouchableOpacity>
       );
  }
}
 
const styles= StyleSheet.create({
  touchablestyle:{
    width:300,
    height:40,
    marginTop:30,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius:50
  },
  textstyle:{
    font:20,
    fontWeight:'bold'
  }
})
export default DJTouchable;