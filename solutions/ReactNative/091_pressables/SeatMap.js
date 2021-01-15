import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import PinchZoomView from 'react-native-pinch-zoom-view';
import { Title } from './Title';
import { Table } from './Table';
import { theme } from './theme';

export const SeatMap = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const showing = route.params.showing;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const selected_film = useSelector(state => state.selected_film);
  const selected_date = useSelector(state => state.selected_date);
  const tables = useSelector(state => state.tables);
  const reservations = useSelector(state => state.reservations);
  tables.forEach(table => {
    table.seats.forEach(seat => {
      seat.status = undefined;
      if (reservations.some(res => res.seat_id === seat.id))
        seat.status = "seatIsTaken"
      if (cart.some(item => item.id === seat.id)) {
        seat.status = "seatIsSelected"
      }

    })
  })
  useEffect(() => {
    dispatch({ type: "FETCH_TABLES_AND_SEATS", theater_id: showing.theater_id })
    dispatch({ type: "FETCH_RESERVATIONS", showing_id: showing.id });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerWrapper}>
        <Text>Choose your seats for</Text>
        <Title>{selected_film?.title}</Title>
        <Text>on</Text>
        <Text>{selected_date?.toShowingDateString()}</Text>
        <Text>at {selected_date.toShowingTimeString()}</Text>
      </View>
      <View style={styles.seatMapView}>
        <PinchZoomView>
          <View style={styles.seatMapInnerView}>
            {tables.map(table => <Table table={table} key={table.id} />)}
          </View>
        </PinchZoomView>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Check out" onPress={() => navigation.push("Checkout")} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  seatMapView: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  seatMapInnerView: {
    position: 'absolute',
    top: 0, left: 0,
    borderWidth: 1, borderColor: theme.colors.mainDark,
    width: 1000, height: 500,
  }
});