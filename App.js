import React, { Component } from 'react';
import { View } from 'react-native';
import AppNavigation from './src/components/AppNavigation';


export default class MyAlbum extends Component {

  render() {
    return (
      <View style={{ flex: 1 }} >
         <AppNavigation />
      </View>
    );
  }
}
/* eslint-disable eol-last */