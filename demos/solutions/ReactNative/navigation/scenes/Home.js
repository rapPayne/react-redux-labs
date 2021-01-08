import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Desserts } from '../components/Menu/Desserts';
import { Drinks } from '../components/Menu/Drinks';
import { Salads } from '../components/Menu/Salads';
import { Sandwiches } from '../components/Menu/Sandwiches';
import { Tacos } from '../components/Menu/Tacos';
export const Home = () => {
  const nav = useNavigation();
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Text>Looking forward to feeding you!</Text>
      <Text>To look at our menu, swipe from the left side.</Text>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home">
          {() => <DefaultContent />}
        </Drawer.Screen>
        <Drawer.Screen name="Tacos">
          {() => <Tacos />}
        </Drawer.Screen>
        <Drawer.Screen name="Sandwiches">
          {() => <Sandwiches />}
        </Drawer.Screen>
        <Drawer.Screen name="Drinks">
          {() => <Drinks />}
        </Drawer.Screen>
        <Drawer.Screen name="Desserts">
          {() => <Desserts />}
        </Drawer.Screen>
      </Drawer.Navigator>
      <Button title="Log in" onPress={() => nav.push("Login")} />
      <Button title="Settings" onPress={() => nav.push("Settings")} />
    </>
  );
}

const DefaultContent = () => (
  <Text>This is the menu home</Text>
)