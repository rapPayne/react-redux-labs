import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'; // <--Put this at the top
//import tables from './assets/tables.json';
import { Title } from './Title';
import { Table } from './Table';

export const PickSeats = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const showing = route.params.showing;
  const dispatch = useDispatch();
  const selected_film = useSelector(state => state.selected_film);
  const selected_date = useSelector(state => state.selected_date);
  const tables = useSelector(state => state.tables);
  const reservations = useSelector(state => state.reservations);
  //useEffect(() => {
    tables.forEach(table => {
      table.seats.forEach(seat => {
        if (reservations.some(res => res.seat_id === seat.id))
          seat.status = "seatIsTaken"
      })
    })
  //})
  useEffect(() => {
    dispatch({ type: "FETCH_TABLES_AND_SEATS", theater_id: showing.theater_id })
    dispatch({ type: "FETCH_RESERVATIONS", showing_id: showing.id });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView style={styles.sceneWrapper}>
        <View style={styles.headerWrapper}>
          <Text>Choose your seats for</Text>
          <Title>{selected_film?.title}</Title>
          <Text>on</Text>
          <Text>{selected_date?.toShowingDateString()}</Text>
          <Text>at {selected_date.toShowingTimeString()}</Text>
        </View>
        {tables.map(table => <Table table={table} key={table.id} />)}
        <View style={styles.buttonWrapper}>
          <Button title="Check out" onPress={() => navigation.push("Checkout")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sceneWrapper: {
    width: 400,
  },
  headerWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});