import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { getTime } from './helpers';

const styles = StyleSheet.create({
 container: {
  borderWidth: 2,
  borderColor: "red",
  borderRadius: 5,
  padding: 5,
  margin: 5,
  flexDirection: "row",
 },
 detailsContainer: {
  marginLeft: 10,
 },
 iconContainer: {
 },
 summary: {
  fontSize: 20,
 },
 temperature: {
  fontSize: 30,
 },
 times: {
  fontSize: 20,
 },
 weatherIcon: {
  height:80, width:80,
 },
 wind: {
  fontSize: 20,
 },
})

export const Weather = ({weather}) => {
 return (
  <View style={styles.container}>
   <View style={styles.iconContainer}>
   <Image source={{uri: weather.icon}} style={styles.weatherIcon} />
   </View>
   <View style={styles.detailsContainer}>
   <Text style={styles.times}>{getTime(weather.startTime)} to {getTime(weather.endTime)}</Text>
   <Text style={styles.summary}>{weather.shortForecast}</Text>
   <Text style={styles.temperature}>{weather.temperature} {weather.temperatureUnit}</Text>
   <Text style={styles.wind}>Wind: {weather.windDirection} {weather.windSpeed}</Text>
   </View>
  </View>
 )
}