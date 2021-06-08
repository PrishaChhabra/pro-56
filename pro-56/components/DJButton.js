import  React, {Component} from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Button} from 'react-native';
import {Audio} from 'expo-av';

class DJButton extends Component{
  playSound = async () => {
    await Audio.Sound.createAsync(
      {uri: this.props.myuri},
   { shouldPlay: true }
    );
  }
  render(){
    return(
      <Button style={styles.buttonstyle}  color={this.props.mycolor} title={this.props.mytitle} onPress={this.playSound} > 
      </Button>
       );
  }
}
 
const styles= StyleSheet.create({
  buttonstyle:{
    width:450,
    marginVertical:300,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
     }
})
export default DJButton;


