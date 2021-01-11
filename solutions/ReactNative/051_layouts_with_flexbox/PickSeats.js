import React from 'react';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tables from './assets/tables.json';

export const PickSeats = () => {
  const selected_film = useSelector(state => state.selected_film)
  const selected_date = useSelector(state => state.selected_date)
  return (
    <SafeAreaView>
      <ScrollView style={styles.sceneWrapper}>
        <Text>Choose your seats for</Text>
        <Text>{selected_film?.title}</Text>
        <Text>on</Text>
        <Text>{selected_date?.toShowingDateString()}</Text>
        <Text>at {selected_date.toShowingTimeString()}</Text>
        {tables.map(table => (
          <View>
            <Text>Table: {table.table_number}</Text>
            <View style={styles.seatWrapper}>
              {table.seats.map(seat => (
                <Text>Seat {seat.seat_number}</Text>
              ))}
            </View>
          </View>
        ))}
        <View style={styles.buttonWrapper}>
          <Button title="Check out" onPress={() => { }}  style={styles.button} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  sceneWrapper: {
    width: 400,
  },
  seatWrapper: {
    flexDirection: 'row',
  },
  button: {
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
}