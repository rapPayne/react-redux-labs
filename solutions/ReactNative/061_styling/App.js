import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import './Date';
import './Currency';
import { Landing } from './Landing';
import { Checkout } from './Checkout';
import { PickSeats } from './PickSeats';

export function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:"FETCH_FILMS"});
  },[]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      {/* <Checkout /> */}
      {/* <PickSeats /> */}
      <Landing {...state} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
