import React, { Component } from 'react';
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { Constants, BlurView } from 'expo';
import { Card, Text, Icon } from 'react-native-elements';

import { CheeseCard } from '../components/cheese_card';
import { WeatherCard } from '../components/weather_card';

const data = {
  weatherData: { title: 'Kinda Rainy', temp: '50°' },
  cheeseData: {
    title: 'Brie',
    imgUri:
      'http://www.eatwisconsincheese.com/images/CheeseCupid/images/cheese/detail/brie.png',
    description:
      'How about a nice Brie? The delicous creaminess and subtle flavor will help you forget about the subtle shitiness outside.',
  },
};

export default class WeatherCheeseScreen extends Component {
  _renderCard(item) {
    return (
      <View style={{ marginTop: 70 }}>
        <Image
          source={{ uri: item.imgUri }}
          style={{ flex: 1, maxHeight: 200 }}
        />

        <View style={{ alignItems: 'flex-end' }}>
          <Icon
            raised
            name="local-bar"
            color="#b71c1c"
            reverse
            onPress={() => {
              Alert.alert(
                `...and while you're at it`,
                `You might as well enjoy this delcious red.`
              );
            }}
          />
        </View>

        <View style={{ backgroundColor: '#ffeb3b' }}>
          <Text h3 style={{ margin: 20 }}>
            {item.title}
          </Text>
        </View>

        <View style={{ backgroundColor: '#ffffff' }}>
          <Text style={{ margin: 10 }}>
            {item.description}
          </Text>
        </View>
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
          <Text style={styles.location}>Massapequa, NY</Text>
        </View>

        <View style={styles.blurViewContainer}>
          <Image
            source={{
              uri:
                'http://www.northcountyplumbing.com/wp-content/uploads/2016/01/Tree-in-Rain.jpg',
            }}
            style={{ flex: 1 }}
          />

          <BlurView tint="light" intensity={60} style={StyleSheet.absoluteFill}>
            <View style={styles.scrollViewContainer}>
              <View style={styles.weatherInfoContainer}>
                <Text h2>
                  {data.weatherData.title}
                </Text>
                <Text h4>
                  {data.weatherData.temp}
                </Text>
              </View>

              <View style={{ flex: 3 }}>
                <CheeseCard
                  _renderCard={this._renderCard}
                  data={data.cheeseData}
                />
              </View>
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
    backgroundColor: '#ffeb3b',
    zIndex: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
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
