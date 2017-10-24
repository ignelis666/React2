/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableHighlight

} from 'react-native';

const instructions = Platform.select({
  
 // android: 'Double tap R on your keyboard to reload,\n' +
   // 'Shake or press menu button for dev menu',
});

export default class App extends Component<{ }> {
 /* onPressButton() {
    Alert.alert('Tu mane paspaudei')
  }*/
  constructor() {
    super()
    this.state = {textcolor: 'Button1'}
  }

  updateText = () => {
    this.setState({text : 'pakeiciau'})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex1}>
        <TouchableOpacity>
        <Text style = {styles.button} onPress= {this.updateText}>
          
        </Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text style = {styles.button}>
           Button2
        </Text>
     </TouchableOpacity>
     <TouchableOpacity>
        <Text style = {styles.button}>
           Button3
        </Text>
     </TouchableOpacity>
        <TouchableOpacity>
        <Text style = {styles.button}>
           Button4
        </Text>
     </TouchableOpacity>
        
        </View>
        <View style={styles.flexBox}>
        <Text style={styles.boxes}> BOX1</Text>
        <Text style={styles.boxes}> BOX2</Text>
        <Text style={styles.boxes}> BOX3</Text>
        <Text style={styles.boxes}> BOX4</Text>
        
        </View>
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    borderWidth: 6,
    padding: 15,
    width: 150,
    marginLeft: 30,
    borderColor: 'yellow',
    backgroundColor: 'grey',
    textAlign:'center',
    fontSize: 26,
  },
  flex1: { 
    flex: 1,
    justifyContent:'space-around',
backgroundColor: 'grey',
  },
  flexBox: {
  flex:1,
  justifyContent: 'space-around',
backgroundColor: '#A25252',
  },
  boxes: {
    
    padding: 15,
    width: 150,
    marginLeft: 30,
    
    backgroundColor: 'red',
    textAlign:'center',
    fontSize: 26,
  }
});