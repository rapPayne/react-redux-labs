import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Showings } from './Showings';

export const FilmDetails = ({ selected_date, selected_film, showings }) => {
 return (
  <ScrollView>
   <Text>Showing times for {selected_date.toDateString()}</Text>
   <Showings showings={showings} selected_date={selected_date} />
   <Text>{selected_film.title}</Text>
   <Text>{selected_film.tagline}</Text>
   <Text>{selected_film.homepage}</Text>
   <Text>{selected_film.overview}</Text>
   <Text>Release date: {selected_film.release_date}</Text>
   <Text>Running time: {selected_film.runtime} minutes</Text>
   <Text>Rating: {selected_film.vote_average}/10</Text>
   <Text>{selected_film.vote_count} votes</Text>
  </ScrollView>
 );
}