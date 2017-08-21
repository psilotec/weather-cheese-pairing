import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/login_screen';
import WeatherCheeseScreen from './src/screens/weather_cheese_screen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen />
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
