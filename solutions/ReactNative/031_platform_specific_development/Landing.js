import React from 'react';
import { Button, Text, View } from 'react-native';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';

export const Landing = ({ films, selected_date }) => {
  return (
    <View>
      <Text>Dinner and a Movie</Text>
      <Text>Tap on a film to see its details and pick a date to see showtimes</Text>
      <DatePicker selected_date={selected_date} />
      {films.map(film => <FilmBrief film={film} key={film.id} />)}
    </View>
  )
}