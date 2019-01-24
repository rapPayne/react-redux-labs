import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { store } from './store/store';
import { Landing } from './Landing';
import { Checkout } from './Checkout';
import { PickSeats } from './PickSeats';

// Colors
// Primary light: rgb(232, 229, 153) Pale yellow
// Secondary light: rgb(230, 255, 13) Bright yellow
// Primary dark: rgb(11, 134, 232)  Darker blue
// Secondary dark: rgb(17, 190, 255) Pale blue
// Highlight: rgb(255, 0, 0) Red

export default class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    this.state.selected_film = {title:"Sack Lunch"}
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
        {/* <Checkout {...this.state} /> */}
        {/* <PickSeats {...this.state} /> */}
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
