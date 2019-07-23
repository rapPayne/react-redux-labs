import React from 'react';
import { Image, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { host } from './helpers';
import { Showings } from './Showings';

export const FilmDetails = ({ selected_date, selected_film, showings }) => {
 return (
  <SafeAreaView>
   <View style={{ flexBasis: 450 }}>
    <Image source={{ uri: `${host}/${selected_film.poster_path}` }} style={{ flex: 1, resizeMode: "contain" }} />
   </View>
   {showings && selected_date &&
    <Showings selected_date={selected_date} showings={showings} />}
   <Text>{selected_film.title}</Text>
   <Text>{selected_film.tagline}</Text>
   <Text>{selected_film.homepage}</Text>
   <Text>{selected_film.overview}</Text>
   <Text>{selected_film.release_date}</Text>
   <Text>{selected_film.runtime}</Text>
   <View style={{ flexDirection: "row" }}>
    <Text>Rating: {selected_film.vote_average}/10</Text>
    <Text>{selected_film.vote_count} votes</Text>
   </View>
  </SafeAreaView>
 );
}