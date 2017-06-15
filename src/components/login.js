import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import FBLogin from './fb_login';

export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Weather and Cheese Pairing</Text>
        <Image source={require('../images/wcpLogo.png')} />
        <View style={styles.fblogin}>
          <FBLogin />
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
