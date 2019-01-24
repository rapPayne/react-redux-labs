import React from 'react';
import { Button, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Table } from './Table.js';
import { Title } from './Title';

import tables from './tables.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    alignSelf: 'center',
    fontSize: 20,
  },
  movieTitle: {
    alignSelf: 'center',
  },
  on: {
    alignSelf: 'center',
  },
  selected_date: {
    alignSelf: 'center',
    fontSize: 20,
  },
  tablesContainer: {
    padding: 5
  },
  checkoutButton: {
    backgroundColor: 'green',
    color: 'white',
    borderColor: 'darkgreen',

  }
})
export function PickSeats(props) {
  const { selected_film, selected_date, showing } = props.navigation.state.params;
  const checkout = () => {
    props.navigation.navigate('Checkout');
  }
  console.log("pickseats", props)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headline}>Choose your seats for</Text>
      <View style={styles.movieTitle}>
        <Title>{selected_film.title}</Title>
      </View>
      <Text style={styles.on}>on</Text>
      <Text style={styles.selected_date}>{formatSelectedDate(selected_date)}</Text>
      <ScrollView style={styles.tablesContainer}>
        {tables.map(table => <Table {...table} key={table._id} />)}
      </ScrollView>
      <Button title="Check out" onPress={checkout} style={styles.checkoutButton} />
    </SafeAreaView>
  )
}

function formatSelectedDate(selected_date) {
  return selected_date.toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
}

PickSeats.navigationOptions = {
  title: "Seat map",
}