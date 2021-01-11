import React, { useState } from 'react';
import { Button, ScrollView, Text, SafeAreaView, View } from 'react-native';
import { formatShowingDate, formatShowingTime } from './helpers';
import { store } from './store/store';

import tables from './assets/tables.json';

export const PickSeats = () => {
 
 const { selected_date, selected_film } = store.getState();
 console.log("tables", tables);
 return (
  <SafeAreaView>
   <Text>Choose your seats for</Text>
   <Text>{selected_film.title}</Text>
   <Text>on</Text>
   <Text>{formatShowingDate(selected_date)}</Text>
   <Text>at</Text>
   <Text>{formatShowingTime(selected_date)}</Text>
   <ScrollView>
    {tables.map(table => {
     console.log("seats are", table.seats);
     return (<View key={table.id}>
      <Text>Table {table.id}</Text>
      <View style={{flexDirection:"row"}}>
       {table.seats.length && table.seats.map(seat => <Text key={seat._id}>Seat {seat.seat_number}</Text>)}
      </View>
     </View>)
    }
    )}
   </ScrollView>
   <Button title="Checkout" onPress={checkout} />
  </SafeAreaView>
 )
}

function checkout() {
 console.log("you pressed checkout")
}