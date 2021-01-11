import React from 'react';
import { Text, View, Image } from 'react-native';
import { FilmBrief } from './FilmBrief';
import { host } from './helpers';

export const Landing = props => (
 <View>
  <Text>Dinner and a Movie</Text>
  <Text>Tap on a film to see its details and pick a date to see showtimes.</Text>
  {props.films.map(film => <FilmBrief film={film} key={film.id} />)}
 </View>
)


