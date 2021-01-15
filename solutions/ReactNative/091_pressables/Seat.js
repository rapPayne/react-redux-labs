import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from './theme';

export const Seat = ({ seat }) => {
  const dispatch = useDispatch();
  const showing = useSelector(state => state.selected_showing);
  return (
    <Pressable onPress={() => selectSeat(seat)}>
      <View style={{ ...styles.wrapper, left: (seat.seat_number - 1) * 50 }}>
        <Image source={require("./assets/seat.png")} style={styles.seatImage} />
        <Text style={{ ...styles.seat, ...styles[seat.status] }}>{seat.seat_number}</Text>
      </View>
    </Pressable>
  );

  function selectSeat(seat) {
    switch (seat.status) {
      case "seatIsTaken":
        return;
      case "seatIsSelected":
        dispatch({ type: "UNSELECT_SEAT", seat, showing });
      default:
        dispatch({ type: "SELECT_SEAT", seat, showing });
    }
  }
}

const styles = StyleSheet.create({
  wrapper: {
  },
  seat: {
    position: 'absolute',
    padding: 5,
    marginRight: 5,
    fontWeight: 'bold',
    width: 50, height: 50,
  },
  seatImage: {
    position: 'absolute',
    width: 50, height: 50,
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