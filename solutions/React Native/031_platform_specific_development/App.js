import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Landing } from './Landing';

export function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch({type:"FETCH_FILMS"});
  },[]);

  return (
    <View style={styles.container}>
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
