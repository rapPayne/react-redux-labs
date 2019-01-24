import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { store } from './store/store';

export function FilmBrief(props) {
  return (
    <TouchableHighlight onPress={selectThisFilm}>
      <View>
        <Image source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} style={{ height: 100, width: 100 }} />
        <Text>{props.film.title}</Text>
        <Text>{props.film.tagline}</Text>
      </View>
    </TouchableHighlight>
  )

  function selectThisFilm(e) {
    store.dispatch({type: "SET_SELECTED_FILM", film:props.film});
  }
}