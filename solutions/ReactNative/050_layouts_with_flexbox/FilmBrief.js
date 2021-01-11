import React from 'react';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { store } from './store/store';
import { host } from './helpers';

export const FilmBrief = ({ film }) => {
 return (
  <TouchableHighlight onPress={selectThisFilm}>
   <View flexDirection="row">
    <Image source={{ uri: `${host}/${film.poster_path}` }} style={{ width: 100, height: 100, resizeMode: "contain" }} />
    <View>
     <Text>{film.title}</Text>
     <Text>{film.tagline}</Text>
    </View>
   </View>
  </TouchableHighlight>
 )

 function selectThisFilm(e) {
  store.dispatch({ type: "SET_SELECTED_FILM", film });
  store.dispatch({ type: "SHOW_FILM_DETAILS" });
 }
}
