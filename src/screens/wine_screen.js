import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

export default class WineScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wine Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
