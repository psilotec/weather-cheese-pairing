import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import LoginScreen from './src/screens/login_screen';
import WeatherCheeseScreen from './src/screens/weather_cheese_screen';
import CheeseScreen from './src/screens/cheese_screen';
import WineScreen from './src/screens/wine_screen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      login: { screen: LoginScreen },
      main: {
        screen: TabNavigator({
          weatherCheese: { screen: WeatherCheeseScreen },
          cardScreen: {
            screen: StackNavigator({
              cheeseCard: { screen: cheeseScreen },
              wineCard: { screen: wineScreen },
            }),
          },
        }),
      },
    });

    return (
      <View style={styles.container}>
        <MainNavigator />
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

export default App;
