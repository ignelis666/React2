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
  TouchableOpacity

} from 'react-native';

const instructions = Platform.select({
  
 // android: 'Double tap R on your keyboard to reload,\n' +
   // 'Shake or press menu button for dev menu',
});
var keiciamojiSp =  'blue';
var keiciamojiSp2 =  'green';
var keiciamojiSp3 =  'magenta';
var keiciamojiSp4 =  'black';
export default class App extends Component<{ }> {
 
  constructor () {
    super()
    this.state = {
      spalva1 : 'red',
      spalva2 : 'red',
      spalva3 : 'red',
      spalva4 : 'red'

    }
  }
keiciamSpalva() {
  var backgroundColor = keiciamojiSp;
  this.setState({
  spalva1:backgroundColor
  })
}
keiciamSpalva2() {
  var backgroundColor = keiciamojiSp2;
  this.setState({
  spalva2:backgroundColor
  })
}
keiciamSpalva3() {
  var backgroundColor = keiciamojiSp3;
  this.setState({
  spalva3:backgroundColor
  })
}
keiciamSpalva4() {
  var backgroundColor = keiciamojiSp4;
  this.setState({
  spalva4:backgroundColor
  })
}

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.flex1}>

      <TouchableOpacity onPress={ () =>this.keiciamSpalva()} >
        <Text style = {styles.button} onPress= {this.updateText}>
          Button1
        </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={ () =>this.keiciamSpalva2()} >
     <Text style = {styles.button} onPress= {this.updateText}>
       Button2
     </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={ () =>this.keiciamSpalva3()} >
  <Text style = {styles.button} onPress= {this.updateText}>
           Button3
        </Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={ () =>this.keiciamSpalva4()} >
     <Text style = {styles.button} onPress= {this.updateText}>
           Button4
        </Text>
     </TouchableOpacity>
        </View>
        <View style={styles.flexBox}>

        <Text style={ {
    padding: 15,
    width: 150,
    marginLeft: 30,
    backgroundColor: this.state.spalva1,
    textAlign:'center',
    fontSize: 26,
  }}> BOX1</Text>

<Text style={ {
    padding: 15,
    width: 150,
    marginLeft: 30,
    backgroundColor: this.state.spalva2,
    textAlign:'center',
    fontSize: 26,
  }}> BOX2</Text>
                <Text style={ {
    padding: 15,
    width: 150,
    marginLeft: 30,
    backgroundColor: this.state.spalva3,
    textAlign:'center',
    fontSize: 26,
  }}> BOX3</Text>
   <Text style={ {
    padding: 15,
    width: 150,
    marginLeft: 30,
    backgroundColor: this.state.spalva4,
    textAlign:'center',
    fontSize: 26,
  }}> BOX4</Text>
        
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
    height : 50,
    width: 150,
    marginLeft: 30,
    borderColor: 'yellow',
    backgroundColor: 'grey',
    textAlign:'center',
    fontSize: 16,
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

});