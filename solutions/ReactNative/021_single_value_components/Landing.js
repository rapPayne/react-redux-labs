import React from 'react';
import { Text, View } from 'react-native';
import { FilmBrief } from './FilmBrief';

export const Landing = ({ films }) => {
  return (
    <View>
      <Text>Dinner and a Movie</Text>
      <Text>Tap on a film to see its details and pick a date to see showtimes</Text>
      {films.map(film => <FilmBrief film={film} key={film.id} />)}
    </View> 
  )
}