import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';
import { Seat } from './Seat';

export const Table = ({ table }) => {
  return (
    <View style={{ ...styles.tableWrapper, ...makeTablePositionStyle(table) }}>
      <Text style={{ ...theme.text.h2, color: theme.colors.altDark }}>Table {table.table_number}</Text>
      <View style={styles.seatWrapper}>
        {table.seats.map(seat => <Seat seat={seat} key={seat.seat_number} />)}
      </View>
    </View>
  );
}

function makeTablePositionStyle(table) {
  return {
    position: 'absolute',
    top: table.y * 100, left: table.x * 200
  }
}

const styles = StyleSheet.create({
  tableWrapper: {
    margin: 10,
    padding: 10,
    borderColor: theme.colors.altDark,
    borderWidth: 1,
    backgroundColor: theme.colors.altLight,
  },
  seatWrapper: {
    flexDirection: 'row',
  },
});