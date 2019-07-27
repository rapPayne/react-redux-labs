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

export class HourlyForecast extends Component {
 constructor(props) {
  super(props);
  this.state = store.getState();
  this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
 }
 componentWillUnmount() {
  this.unsubscribe();
 }
 componentDidMount() {
  if (!this.state.forecastHourlyUrl) throw ("Bad hourly URL")
  store.dispatch({ type: "FETCH_HOURLY_FORECAST", url: this.state.forecastHourlyUrl });
 }
 render() {
  return (
   <View>
    <Text style={styles.title}>Hourly Forecast</Text>
    <ScrollView>
     {this.state.hourlyForecast && this.state.hourlyForecast.map(weather => <Weather weather={weather} key={weather.endTime} />)}
    </ScrollView>
   </View>
  )
 }
}