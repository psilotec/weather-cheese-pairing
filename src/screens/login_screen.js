import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants, Location, Permissions } from 'expo';

export default class LoginScreen extends React.Component {
  state = {
    locationResult: null,
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
    try {
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Weather and Cheese Pairing</Text>
        <Image source={require('../images/wcpLogo.png')} />
        <View style={styles.fblogin}>
          {this.state.locationResult == null
            ? <Text>Please enable GPS</Text>
            : <Text>Pairing...</Text>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 45,
  },
  fblogin: {
    marginTop: 40,
  },
});
