import React from 'react';
import { Button, ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Table } from './Table.js';
import tables from './tables.json';

export function PickSeats(props) {
  const { selected_film, selected_date } = props;
  const checkout = () => {
    throw new Error("Not implemented yet");
  }

  return (
    <SafeAreaView>
      <Text>Choose your seats for</Text>
      <Text>{selected_film.title}</Text>
      <Text>on</Text>
      <Text>{selected_date.toString()}</Text>
      <ScrollView>
        {tables.map(table => <Table {...table} key={table._id} />)}
      </ScrollView>
      <Button title="Check out" onPress={checkout} />
    </SafeAreaView>
  )
}