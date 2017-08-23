import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

export default class CheeseScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Cheese Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
