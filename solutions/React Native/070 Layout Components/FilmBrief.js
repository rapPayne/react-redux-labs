import React from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { store } from './store/store';

export function FilmBrief(props) {
  const styles = {
    mainLayout:{ flexDirection:'row'}
  }
  return (
    <TouchableHighlight onPress={selectThisFilm}>
      <View style={styles.mainLayout}>
        <Image source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} style={{ height: 100, width: 100 }} />
        <View>
          <Text>{props.film.title}</Text>
          <Text>{props.film.tagline}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  function selectThisFilm(e) {
    store.dispatch({ type: "SET_SELECTED_FILM", film: props.film });
    store.dispatch({ type: "SHOW_FILM_DETAILS" });
  }
}