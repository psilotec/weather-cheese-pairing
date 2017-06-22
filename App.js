import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './src/components/login';
import WeatherCheeseDisplay from './src/components/weather_cheese_display';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <WeatherCheeseDisplay />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
