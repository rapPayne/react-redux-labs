import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';
import { Weather } from './Weather';

const styles = StyleSheet.create({
 container: {
  backgroundColor: "#fff",
  alignContent: "center",
  justifyContent: "center",
 },
 title: {
  fontSize: 30,
 },
});

export class FiveDayForecast extends Component {
 constructor(props) {
  super(props);
  this.state = store.getState();
  this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
 }
 componentWillUnmount() {
  this.unsubscribe();
 }
 componentDidMount() {
  store.dispatch({ type: "FETCH_5_DAY_FORECAST" });
 }
 render() {
  return (
   <View>
    <Text style={styles.title}>Five-day forecast</Text>
    <ScrollView>
     {this.state.forecast && this.state.forecast.map(weather => <Weather weather={weather} key={weather.endTime} />)}
    </ScrollView>
   </View>
  )
 }
}