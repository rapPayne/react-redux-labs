import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { store } from './store/store';
import { Landing } from './Landing';
import { Checkout } from './Checkout';
import { PickSeats } from './PickSeats';
import { Ticket } from './Ticket';

// Colors
// Primary light: rgb(232, 229, 153) Pale yellow
// Secondary light: rgb(230, 255, 13) Bright yellow
// Primary dark: rgb(11, 134, 232)  Darker blue
// Secondary dark: rgb(17, 190, 255) Pale blue
// Highlight: rgb(255, 0, 0) Red

const routes = {
  Landing: { screen: Landing, },
  PickSeats: { screen: PickSeats, },
  Checkout: { screen: Checkout, },
  Ticket: { screen: Ticket, },
};
const stackNavConfig = {
  initialRouteName: 'Landing',
  navigationOptions: {
    headerStyle: {
      backgroundColor: 'rgb(232, 229, 153)',
    },
    headerTintColor: 'rgb(17, 190, 255)',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
}
const StackNavigator = createStackNavigator(routes, stackNavConfig);

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    store.dispatch({ type: "FETCH_FILMS" });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} hidden={true} />
        <StackNavigator />
        {/* <Landing {...this.state} /> */}
        {/* <Checkout {...this.state} /> */}
        {/* <PickSeats {...this.state} /> */}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

