import React from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'; // <--Put this at the top
import tables from './assets/tables.json';
import { Title } from './Title';
import { Table } from './Table';

export const PickSeats = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const showing = route.params.showing;
  const selected_film = useSelector(state => state.selected_film)
  const selected_date = useSelector(state => state.selected_date)
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