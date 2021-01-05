import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { DrawerNavComponent } from './DrawerNavComponent';
import { TabNavComponent } from './TabNavComponent';

const StackNavComponent = props => {
  const goToStackNav = () => {
    props.navigation.navigate('stack');
  }
  const goToDrawerNav = () => {
    props.navigation.navigate('drawer');
  }
  const goToTabNav = () => {
    props.navigation.navigate('tab');
  }
  return (
    <View style={{flex:1}}>
      <View style={styles.card}>
        <Button title="Stack Navigator" onPress={goToStackNav}></Button>
      </View>
      <View style={styles.card}>
        <Button title="Drawer Navigator" onPress={goToDrawerNav}></Button>
      </View>
      <View style={styles.card}>
        <Button title="Tab Navigator" onPress={goToTabNav}></Button>
      </View>
    </View>
  )
};

const routingObject = {
  root: StackNavComponent,
  stack: StackNavComponent,
  drawer: DrawerNavComponent,
  tab: TabNavComponent,
};
const configObject = {
  initialRouteName: 'root',
};
const stackNav =
  createStackNavigator(routingObject, configObject);
const MyNavigator = createAppContainer(stackNav);

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MyNavigator />
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
    padding: 10,
    margin: 5,
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.5,
  }
});
