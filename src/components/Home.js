/* eslint-disable global-require */
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { StyleSheet, View, Image, ImageBackground, Text, AppRegistry, alert 
} from 'react-native';
import Statusbar from './Statusbar';
import Images from './Images';
import config from '../common/config';
import { fetchWeather } from '../components/WeatherAPI';
import OfflineNotice from './src/components/OfflineNotice';

const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 18;
let answer;
if (isDayTime === true) {
    answer = Images.Day;
} else {
    answer = Images.Night;
}
console.log(isDayTime);
console.disableYellowBox = true;

const iconNames = {
    Clear: Images.Clouds,
    Rain: Images.Rain,
    Thunderstorm: Images.Rain,
    Clouds: Images.Clouds,
    Snow: Images.Snow,
    Drizzle: Images.Rain,
};

const phases = {
    Clear: 'Nice Clear Clouds',
    Rain: 'Rain Rain Go Away',
    Thunderstorm: 'Opps! Thundering',
    Clouds: 'Cloud Storage Limit Reached.....',
    Snow: 'Brain Fucking Freeze',
    Drizzle: 'Rain Rain Go Away',


};


export default class Splash extends Component {

    componentWillMount() {
        this.state = {
            tem: 0,
            weather: 'Clear'
        };
    }

    componentDidMount() {
        this.getLocation();
        //fetchWeather(-21, 28).then(res => console.log(res));
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (posData) => fetchWeather(posData.coords.latitude, posData.coords.longitude)
                .then(res => this.setState({
                    tem: res.temp,
                    weather: res.weather
                })),
            (error) => alert(error),
            { timeout: 1000 }
        );
    }
 
  render() {
    return (
  
        <View style={styles.containerStyle}>
            <Statusbar backColor={config.colors.red} />
            <OfflineNotice />>
            
            <ImageBackground
                style={styles.backgroundImage}
                source={answer} 
            >
             
            <View style={styles.viewBack}>
            <Animatable.View
                animation="zoomIn" iterationCount={1}
                style={styles.viewBack}
            >
            <View style={styles.imageView}>
            <Image
                source={iconNames[this.state.weather]}
                style={styles.Icon}
            />
            </View>
            <Text style={styles.Temp}>{this.state.tem}º</Text>
            <Text style={styles.TextSub}>{phases[this.state.weather]}</Text>
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
        height: '100%', 
        width: '100%',
        marginTop: 30,
    },
    imageView: {
        height: 220, 
        width: 280,
        marginBottom: 30,
        //backgroundColor: 'red'
    },
    viewBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
        //backgroundColor: 'red'
    },
    Temp: {
        color: 'white',
        fontSize: 70,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 4 },
        textShadowRadius: 10,
        width: 200,
        textAlign: 'center',

    },
    TextSub: {
        width: 300,
        textAlign: 'center',
        //color: '#8B567E',
        fontSize: 30,
        //backgroundColor: 'red',
        color: 'white',
        

    }

});
// module.exports = Splash;
/* eslint-disable eol-last */