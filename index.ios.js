/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  NativeModules, 
  Button
} from 'react-native';

var AssetsPicker = NativeModules.AssetsPicker; 


export default class RNFilePicker extends Component {

  selectImage(){
    // AssetsPicker.PickAsset(null,  (results) => {
    //     alert(JSON.stringify(results));
    //   });

    AssetsPicker.PickAsset(null).then(result =>{
      alert(result);
    }
    )
    

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Button title="kababa" onPress={this.selectImage.bind(this)}>Open picker</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNFilePicker', () => RNFilePicker);
