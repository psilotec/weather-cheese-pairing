import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { Card, Text } from 'react-native-elements';

import { CheeseCard } from './cheese_card';
import { WeatherCard } from './weather_card';


const data = {
    weatherData: {title: "Kinda Rainy", imgUri: "http://www.northcountyplumbing.com/wp-content/uploads/2016/01/Tree-in-Rain.jpg", description: "The idea with React Native Elements is more about component structure than actual design."},
    cheeseData: {title: "Brie", imgUri: "http://www.eatwisconsincheese.com/images/CheeseCupid/images/cheese/detail/brie.png", description: "How about a nice Brie? The delicous creaminess and subtle flavor will help you forget about the subtle shitiness outside."},       

};

export default class WeatherCheeseDisplay extends Component {
    _handleButtonPress = () => {
        Alert.alert(
            `....and while you're at it`,
            `you might as well enjoy a delcious red. Here's a nice one`,
        );
    };

    renderCard(item) {
        return (
            <View>
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
                <View style={[styles.header]}></View>
                <ScrollView>
                    <Text h3 style={styles.date}>
                        Monday, June 12th
                    </Text>
                    <Text style={styles.location}>
                        Massapequa, NY
                    </Text>
                    
                    <WeatherCard renderCard={this.renderCard} data={data.weatherData} />
                    <CheeseCard renderCard={this.renderCard} data={data.cheeseData} />

                    <Button
                        title="Wine"
                        onPress={this._handleButtonPress}
                        style={styles.winebutton}
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#c6c9b0',
    },
    location: {
        color: '#34495e',
        margin: 0,
    },
    date: {
        
    },
    winebutton: {
        backgroundColor: 'red',
    },
    header: {
        height: Constants.statusBarHeight,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: '#e4d98d',
        zIndex: 10
  },
});