import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './Date';
import './Currency';
import { Landing } from './Landing';
import { Checkout } from './Checkout';
import { PickSeats } from './PickSeats';
import { Ticket } from './Ticket';

export function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: "FETCH_FILMS" });
  }, []);
  const Nav = createStackNavigator();
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Nav.Navigator initialRouteName="Landing">
          <Nav.Screen name="PickSeats">
            {() => <PickSeats {...state} />}
          </Nav.Screen>
          <Nav.Screen name="Checkout">
            {() => <Checkout {...state} />}
          </Nav.Screen>
          <Nav.Screen name="Landing">
            {() => <Landing {...state} />}
          </Nav.Screen>
          <Nav.Screen name="Ticket">
            {() => <Ticket {...state} />}
          </Nav.Screen>
        </Nav.Navigator>
      </View>
      <StatusBar barStyle="dark-content" hidden={true} />

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
