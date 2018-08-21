/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Statusbar from './Statusbar';


export default class Splash extends Component {
 
  render() {
    return (
  
        <View style={styles.containerStyle}>
            <Statusbar />
            <Text>This is Home</Text>
        </ View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },

});
// module.exports = Splash;
/* eslint-disable eol-last */