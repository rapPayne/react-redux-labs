import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';
// import { ProgressBar } from '@react-native-community/progress-bar-android'
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';

export const Landing = ({ films, selected_date }) => {
  return (
    <ScrollView>
      {/* <ProgressBar styleAttr="Horizontal" /> */}
      <Text>Dinner and a Movie</Text>
      <Text>Tap on a movie to see its details and to pick a date to see showtimes</Text>
      <DatePicker selected_date={selected_date} />
      {films.map(film => <FilmBrief film={film} key={film.id} />)}
      <Text>{(new Date()).toTimeString()}</Text>
    </ScrollView>
  )

}