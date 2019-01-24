import React from 'react';
import { Text, View, Image } from 'react-native';
import { FilmBrief } from './FilmBrief';

export function Landing(props) {
  return (
    <View>
      <Text>Dinner And A Movie</Text>
      <Text>Tap a movie below to see its details. Then pick a date to see showtimes.</Text>
      {props.films.map(film => (
        <FilmBrief film={film} key={film.id} isSelected={film.id === props.selectedFilm.id} />
      )
      )}
    </View>
  )
}