import React, { Component } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { store } from './store/store';
import { Landing } from './Landing';
import { Checkout } from './Checkout';
import { PickSeats } from './PickSeats';

export default class App extends Component {
 constructor() {
  super();
  this.state = store.getState();
  store.subscribe(() => this.setState(store.getState()));
 }

 componentDidMount() {
  store.dispatch({type: "FETCH_FILMS"});
 }

 render() {
  return (
   <View style={styles.container}>
    <StatusBar barStyle="light-content" hidden={true}></StatusBar>
    <Checkout />
    {/* <PickSeats /> */}
    {/* <Landing {...this.state} /> */}
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
