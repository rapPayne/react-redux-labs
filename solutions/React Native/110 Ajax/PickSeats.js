import React, { Component } from 'react';
import { Button, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';
import { Table } from './Table.js';
import { Title } from './Title';

//import tables from './tables.json';

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
});

export class PickSeats extends Component {
  constructor(props) {
    super(props);
    this.showing = props.navigation.state.params.showing;
    this.state = store.getState();
    store.subscribe(() => this.setState(store.getState()));
    this.navigation = { ...props.navigation };
    console.log("pickseats", this.state)
  }
  componentDidMount() {
    console.log("didmount", this.showing)
    const { id, theater_id } = this.showing;
    store.dispatch({ type: "FETCH_RESERVATIONS", showing_id: id });
    store.dispatch({ type: "FETCH_TABLES_AND_SEATS", theater_id });
  }
  checkout = () => {
    this.navigation.navigate('Checkout');
  }
  render() {
    console.log("in render", this.state);
    const tables = this.state.tables.map(t => ({ ...t, seats: t.seats.map(s => setSeatStatus(s, this.state.reservations)) }));
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Choose your seats for</Text>
        <View style={styles.movieTitle}>
          <Title>{this.state.selected_film.title}</Title>
        </View>
        <Text style={styles.on}>on</Text>
        <Text style={styles.selected_date}>{formatSelectedDate(this.state.selected_date)}</Text>
        <ScrollView style={styles.tablesContainer}>
          {tables.map(table => <Table {...table} key={table._id} />)}
        </ScrollView>
        <Button title="Check out" onPress={this.checkout} style={styles.checkoutButton} />
      </SafeAreaView>
    )
  }
  static navigationOptions = {
    title: "Seat map",
  }
}

function setSeatStatus(seat, reservations) {
  if (reservations.some(r => r.seat_id === seat._id))
    return { ...seat, status: 'seatIsTaken' };
  else
    return seat;
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

