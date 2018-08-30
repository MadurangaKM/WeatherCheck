import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

export default class Statusbar extends Component {
  render() {
    return (
      <View style={[styles.statusbar, { backgroundColor: '#5D4626' }]} >
        <StatusBar
           barStyle="light-content" 
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    statusbar: {
        //backgroundColor: '#8B567E',
        height: 25,
    }
});

module.exports = Statusbar;
/* eslint-disable eol-last */