import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Title } from './Title';

const styles = StyleSheet.create({
  header: { flex: 1, flexDirection: 'row' },
  logo: {
    height: 75, width: 75,
  },
  greeting: {
    fontSize: 20,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  poster: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 200, width: 200,
  },
  ticketContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  showingTime: {
    textAlign: 'center',
    fontSize: 30,
  },
  seatContainer: {
    alignItems: 'center',
  },
  seat: {
    fontSize: 20,
    paddingLeft: 20,
  }
});

export function Ticket(props) {
  const { selected_film, showing, seats } = props.navigation.state.params;
  const ticket_number = getTicketNumber();
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image source={require(`./assets/daam.png`)} style={styles.logo} />
            <Title>Dinner And A Movie</Title>
          </View>

          <Text style={styles.greeting}>We're looking forward to seeing you! Show this to your host when you arrive. This is your ticket.</Text>
          <View style={styles.titleContainer}>
            <Image source={{ uri: `http://localhost:5000/${selected_film.poster_path}` }} style={styles.poster} />
            <Title>{selected_film.title}</Title>
          </View>
          <Text style={styles.showingTime}>Sat Oct 2, 2018 7:15pm</Text>
          <View style={styles.ticketContainer}>
            <QRCode value={ticket_number} size={300} />
            <Text>Ticket number: {ticket_number}</Text>
          </View>
          <View style={styles.seatContainer}>
            {seats.map(seat => <Text style={styles.seat} key={seat._id}>Table {seat.table_number} Seat {seat.seat_number}</Text>)}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )

}
Ticket.navigationOptions = {
  header: null,
}
function getTicketNumber() {
  return Math.floor((Math.random() * 1000000) - 50000)
}