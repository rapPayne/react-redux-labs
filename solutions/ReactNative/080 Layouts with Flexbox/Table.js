import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  seatsGroup: {
    flexDirection: "row",
  }
})
export function Table(props) {
  console.log("in table", props)
  return (
    <View>
      <Text>Table {props.table_number}</Text>
      <View style={styles.seatsGroup}>
      {props.seats.map(seat => <Text key={seat._id}>Seat {seat.seat_number}</Text>)}
      </View>
      </View>
  )
}