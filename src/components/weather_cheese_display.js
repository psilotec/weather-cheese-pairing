import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native';
import { Constants } from 'expo';

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
                <Text style={styles.location}>
                    Massapequa, NY
                </Text>
                <Text style={styles.date}>
                    Monday, June 12th
                </Text>

                <View>
                    <Text>Kinda Rainy</Text>
                    <Image
                        source={{ uri: 'http://www.northcountyplumbing.com/wp-content/uploads/2016/01/Tree-in-Rain.jpg' }}
                        style={styles.weather}/>
                </View>

                <View>
                    <Text>How about a nice Brie</Text>
                    <Image
                        source={{ uri: 'http://www.eatwisconsincheese.com/images/CheeseCupid/images/cheese/detail/brie.png' }}
                        style={{ height: 140, width: 180 }} />
                </View>

                <Text style={styles.description}>
                    How about a nice Brie? The delicous creaminess and subtle flavor will help you forget about the subtle shitiness outside.
                </Text>

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
        margin: 0,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },
    date: {
        marginBottom: 30,
    },
    weather: {
        height: 140,
        width: 200,
        marginBottom: 20,
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