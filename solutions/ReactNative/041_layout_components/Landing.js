import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { FilmDetails } from './FilmDetails';

export const Landing = ({ films, selected_date, selected_film, show_film_details }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Modal visible={show_film_details}>
        <FilmDetails film={selected_film} selected_date={selected_date} />
        <Button title="Done" onPress={()=>dispatch({ type: "HIDE_FILM_DETAILS" })} />
      </Modal>
      <ScrollView>
        <View>
          <Text>Dinner and a Movie</Text>
          <Text>Tap on a film to see its details and pick a date to see showtimes</Text>
          <DatePicker selected_date={selected_date} />
          {films.map(film => <FilmBrief film={film} key={film.id} isSelected={selected_film === film} />)}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}