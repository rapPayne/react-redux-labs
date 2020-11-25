import React, { useState, useEffect } from 'react';
import { store } from './store/store';
import { StyleSheet, Text, View } from 'react-native';
import { Landing } from './Landing';


export default function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    store.subscribe(() => setState(store.getState()));
    store.dispatch({type:"FETCH_FILMS"})
  }, []);
  console.log({state});
  return (
    <View style={styles.container}>
      <Landing {...state}></Landing>
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
