import React, { Component, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#eee',
  alignItems: 'center',
  justifyContent: 'center',
 },
});

export class CurrentWeather extends Component {
 constructor(props) {
  super(props);
  this.state = store.getState();
  this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
 }
 
 componentWillUnmount() {
  this.unsubscribe();
 }

 componentDidMount() {
  //store.dispatch({type: "FETCH_FORECAST"})
 }
 render() {
  return (
   <View style={styles.container}>
    {this.state.currentWeather &&
     <View style={{ flexDirection: "row" }}>
      <View style={{ padding: 20 }}><Text>Temp</Text><Text>{this.state.currentWeather.temperature} {this.state.currentWeather.temperatureUnit}</Text></View>
      <View style={{ padding: 20 }}><Text>Wind</Text><Text>{this.state.currentWeather.windSpeed} {this.state.currentWeather.windDirection} </Text></View>
     </View>
    }
    <Text>Location: {this.state.location.city}, {this.state.location.region}</Text>
    <Button title="5 day" onPress={() => this.props.navigation.navigate("FiveDay")}></Button>
    <Button title="Hourly" onPress={() => this.props.navigation.navigate("Hourly")}></Button>
   </View>
  )
 }
}
