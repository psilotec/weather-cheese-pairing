import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';
import { Card, Text } from 'react-native-elements';

export default class WeatherCheeseDisplay extends Component {
    _handleButtonPress = () => {
        Alert.alert(
            `....and while you're at it`,
            `you might as well enjoy a delcious red. Here's a nice one`,
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <Text h2 style={styles.date}>
                    Monday, June 12th
                </Text>
                <Text h4 style={styles.location}>
                    Massapequa, NY
                </Text>

                <View style={styles.weather}>
                    <Card
                        title='Kinda Rainy'
                        image={{uri: 'http://www.northcountyplumbing.com/wp-content/uploads/2016/01/Tree-in-Rain.jpg'}}>
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                    </Card>
                </View>


                <View>
                    <Card
                        title='Brie'
                        image={{uri: 'http://www.eatwisconsincheese.com/images/CheeseCupid/images/cheese/detail/brie.png'}}>
                        <Text style={{marginBottom: 5}}>
                            How about a nice Brie? The delicous creaminess and subtle flavor will help you forget about the subtle shitiness outside.
                        </Text>
                    </Card>
                </View>

                <Button
                    title="Wine"
                    onPress={this._handleButtonPress}
                    style={styles.winebutton}
                />

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
        backgroundColor: '#ecf0f1',
    },
    location: {
        color: '#34495e',
        margin: 0,
    },
    date: {
    },
    weather: {
    },
    description: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
    },
    winebutton: {
        backgroundColor: 'red',
    },
});