import React from 'react';
import { Button, DatePickerAndroid, DatePickerIOS, Platform, Text, View } from 'react-native';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { ShowingTimes } from './ShowingTimes';

export function Landing(props) {
  return (
    <View>
      <Text>Dinner And A Movie</Text>
      <Text>Tap a movie below to see its details. Then pick a date to see showtimes.</Text>
      <DatePicker />
      {props.selected_film.id && <ShowingTimes showings={[]} />}
      {props.films.map(film => (
        <FilmBrief film={film} key={film.id} isSelected={film.id === props.selected_film.id} />
      )
      )} 
    </View>
  )
}