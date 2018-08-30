/* eslint-disable global-require */
import React, { Component } from 'react';
import { StyleSheet, Image, View, } from 'react-native';
import Images from '../components/Images';


export default class Splash extends Component {
    componentDidMount() {
        //console.log('Splash componentDidMount');
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
          //Navigate to Home screen
          this.props.navigation.navigate('Home');
        }, 2000);
      }
 
  render() {
    return (
  
        <View style={styles.containerStyle}>
            <Image 
                source={Images.Spalsh}
                //style={styles.Image}
                style={{ flex: 1, height: undefined, width: undefined }}
            />
        </ View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    Image: {
        width: 600,
        height: 300,
    }

});
// module.exports = Splash;
/* eslint-disable eol-last */