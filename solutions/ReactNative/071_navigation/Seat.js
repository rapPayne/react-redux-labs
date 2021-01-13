import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export const Seat = ({ seat }) => {
  return (
    <Text style={{ ...styles.seat, ...styles[seat.status] }}>Seat {seat.seat_number}</Text>
  );
}

const styles = StyleSheet.create({
  seat: {
    padding: 5,
    marginRight: 5,
    fontWeight: 'bold',
  },
  seatIsTaken: {
    color: theme.colors.mainLight,
    backgroundColor: theme.colors.seatIsTakenBackground,
  },
  seatIsSelected: {
    color: theme.colors.mainLight,
    backgroundColor: theme.colors.seatIsSelectedBackground,
  },
});