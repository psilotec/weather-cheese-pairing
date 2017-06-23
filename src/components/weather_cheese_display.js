import React, { Component } from 'react';
import { Dimensions, View, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { Constants, BlurView } from 'expo';
import { Card, Text, Icon } from 'react-native-elements';

import { CheeseCard } from './cheese_card';
import { WeatherCard } from './weather_card';


const data = {
    weatherData: {title: "Kinda Rainy", temp: "50°"},
    cheeseData: {title: "Brie", imgUri: "http://www.eatwisconsincheese.com/images/CheeseCupid/images/cheese/detail/brie.png", description: "How about a nice Brie? The delicous creaminess and subtle flavor will help you forget about the subtle shitiness outside."},       

};

export default class WeatherCheeseDisplay extends Component {
    _handleButtonPress = () => {
        Alert.alert(
            `....and while you're at it`,
            `you might as well enjoy a delcious red. Here's a nice one`,
        );
    };

    _renderCard(item) {
        return (
            <View style={{marginTop: 70}}>
                <Card
                    title={item.title}
                    image={{uri: item.imgUri}}>
                    <Text style={{marginBottom: 10}}>
                        {item.description}
                    </Text>
                </Card>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.header]}>
                    <Text h4 style={styles.date}>
                        Monday, June 12th
                    </Text>
                    <Text style={styles.location}>
                        Massapequa, NY 
                    </Text>
                </View>
            
                <View style={styles.blurViewContainer}>
                    
                    <Image
                        source={{ uri: 'http://www.northcountyplumbing.com/wp-content/uploads/2016/01/Tree-in-Rain.jpg' }}
                        style={{ flex: 1 }}
                    />

                    <BlurView
                        tint="light"
                        intensity={60}
                        style={StyleSheet.absoluteFill}>

                        <View style={styles.scrollViewContainer}>
                            <View style={styles.weatherInfoContainer}>
                                <Text h2>{data.weatherData.title}</Text>
                                <Text h4>{data.weatherData.temp}</Text>
                            </View>

                            <CheeseCard _renderCard={this._renderCard} data={data.cheeseData} />

                            <Icon
                                raised
                                name='local-bar'
                                color='#b71c1c'
                                reverse
                                onPress={this._handleButtonPress} />
                        </View>
                    </BlurView>

                </View>

            </View>
        );
    }
}
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#fafafa',
    },
    blurViewContainer: {
        height: height, 
        width: width,
        flex: 1,
    },
    location: {
        color: '#34495e',
        margin: 0,
        alignSelf: 'center',
    },
    date: {
        alignSelf: 'center',
    },
    header: {
        height: 75,
        position: 'absolute',
        paddingTop: Constants.statusBarHeight,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#ffee58',
        zIndex: 10,
  },
    scrollViewContainer: {
        paddingTop: 75,
        height: height,
        width: width,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
    weatherInfoContainer: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});