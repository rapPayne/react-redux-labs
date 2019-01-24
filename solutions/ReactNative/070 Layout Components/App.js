import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { store } from './store/store';
import { Landing } from './Landing';
import { Checkout } from './Checkout';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
  }

  componentDidMount() {
    store.dispatch({ type: "FETCH_FILMS" });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} hidden={true} />
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
