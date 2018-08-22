/* eslint-disable global-require */
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, View, Image, ImageBackground, Text, } from 'react-native';
import Statusbar from './Statusbar';
import Images from './Images';
import config from '../common/config';


export default class Splash extends Component {
 
  render() {
    return (
  
        <View style={styles.containerStyle}>
            <Statusbar backColor={config.colors.red} />
            
            <ImageBackground
                style={styles.backgroundImage}
                source={Images.Day} 
            >
             
            <View style={styles.viewBack}>
            <Animatable.View
                animation="zoomIn" iterationCount={1}
                style={styles.viewBack}
            >
            <Image
                source={Images.Sun}
                style={styles.Icon}
            />
            <Text style={styles.Temp}>25</Text>
            <Text style={styles.TextSub}>Very Hot Here, So Don't go out..</Text>
            </Animatable.View>
            </View>
          
            </ImageBackground>
            
        </ View>
    );
  }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1, 
        height: '100%', 
        width: '100%'
    },
    Icon: {
        height: 150, 
        width: 150,
        marginTop: 30
       
    },
    viewBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40
        //backgroundColor: 'red'
    },
    Temp: {
        color: 'white',
        fontSize: 100,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 4 },
        textShadowRadius: 10
    },
    TextSub: {
        textAlign: 'center',
        color: '#8B567E',
        fontSize: 30,
        

    }

});
// module.exports = Splash;
/* eslint-disable eol-last */