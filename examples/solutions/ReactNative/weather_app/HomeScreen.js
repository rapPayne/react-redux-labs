import React, { useState, useEffect, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { store } from './store/store';

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#eee',
  alignItems: 'center',
  justifyContent: 'space-around',
 },
 input: {
  fontSize: 20,
  height: 40,
  paddingLeft: 5,
  borderBottomColor: "black",
  borderBottomWidth: 1,
  shadowColor: "grey",
  marginBottom: 10,
 }, 
 inputSection: {
  alignSelf: "stretch",
  borderColor: "black",
  borderWidth: 1,
  margin: 20,
  padding: 10,
 },
 label: {
  fontWeight: "bold",
  fontSize: 20,
 },
 sectionHeader: {
  fontSize: 30,
  fontWeight: "bold",
  marginBottom: 20,
 },
 title: {
  fontSize: 40,
  fontWeight: "bold",
 },
});

export const HomeScreen = (props) => {
 const state = store.getState();
 let [latitude, setLatitude] = useState(state.coordinates.latitude);
 let [longitude, setLongitude] = useState(state.coordinates.longitude);

 return (
  <>
   <View style={styles.container}>
    <Text style={styles.title}>Weather Check</Text>
    <Text>Your current location is {latitude}, {longitude}</Text>
    <View style={styles.inputSection}>
     <Text style={styles.sectionHeader}>Coordinates</Text>
     <Text style={styles.label}>Latitude</Text>
     <TextInput placeholder="latitude" style={styles.input} value={`${latitude}`} onChangeText={val => setLatitude(val)} />
     <Text style={styles.label}>Longitude</Text>
     <TextInput placeholder="longitude" style={styles.input} value={`${longitude}`} onChangeText={val => setLongitude(val)} />
    </View>
    <Button title="Set" onPress={() => fetchLocalWeather(latitude, longitude)} />
   </View></>
 )
 function fetchLocalWeather(latitude, longitude) {
  store.dispatch({ type: "SET_COORDINATES", latitude, longitude });
  store.dispatch({ type: "FETCH_POINT" });
  props.navigation.push("Results");
 }
}

