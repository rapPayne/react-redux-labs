import React, { Component } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const StackNavComponent = props => {
  const goToStackNav = () => {
    console.log("Stack");
  }
  const goToDrawerNav = () => {
    console.log("Drawer");
  }
  const goToTabNav = () => {
    console.log("Tab");
  }
  return (
    <View style={{flex:1}}>
      <View style={styles.card}>
        <Button title="Show Stack Navigator" onPress={goToStackNav}></Button>
      </View>
      <View style={styles.card}>
        <Button title="Show Drawer Navigator" onPress={goToDrawerNav}></Button>
      </View>
      <View style={styles.card}>
        <Button title="Show Tab Navigator" onPress={goToTabNav}></Button>
      </View>
    </View>
  )
};

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StackNavComponent />
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
