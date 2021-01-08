import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './scenes/Home';
import { Login } from './scenes/Login';
import { Settings } from './scenes/Settings';

export const App = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={styles.navContainer}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login">
            {() => <Login />}
          </Stack.Screen>
          <Stack.Screen name="Settings">
            {() => <Settings />}
          </Stack.Screen>
          <Stack.Screen name="Home">
            {() => <Home />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
  }
});
