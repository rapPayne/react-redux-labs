import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';
import { Landing } from './Landing';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe( () => this.setState(store.getState()) );
  } 

  componentDidMount() {
    store.dispatch({type:"FETCH_FILMS"});
  }

  render() {
    return (
      <View style={styles.container}>
        <Landing {...this.state} />
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
