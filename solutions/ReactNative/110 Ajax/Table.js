import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#140CE8',
    backgroundColor: '#11FF95'
  },
  tableNumber: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#140CE8',
  },
  seatsGroup: {
    flexDirection: "row",
  },
  seat: {
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingRight: 5,
  },
  seatIsTaken: {
    backgroundColor: 'pink',
  },
  seatIsSelected: {
    backgroundColor: 'orange',
  }
})
export function Table(props) {
  console.log(`Table `, props)
  return (
    <View style={styles.container}>
      <Text style={styles.tableNumber}>Table {props.table_number}</Text>
      <View style={styles.seatsGroup}>
        {props.seats.map(seat => <Text style={[styles.seat, styles[seat.status] ]} key={seat._id}>Seat {seat.seat_number}</Text>)}
      </View>
    </View>
  )
}