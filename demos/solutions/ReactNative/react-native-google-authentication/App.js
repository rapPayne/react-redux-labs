import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './Login';
import { Logout } from './Logout';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      name: "",
      photoUrl: "",
    };
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {this.state.loggedIn ? <Logout {...this.state} /> : <Login /> }
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
});
