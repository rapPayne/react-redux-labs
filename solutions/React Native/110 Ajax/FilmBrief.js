import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { store } from './store/store';
import { Title } from './Title';

const styles = StyleSheet.create({
  mainLayout: { 
    marginTop: 20,
    flexDirection: 'row' },
  image: {
    resizeMode: 'contain',
    height: 100, width: 100,
  },
  taglineText: {
  },
  textWrapper: {
    flex: 1,    // Added so the tagline wraps
  }
});

export function FilmBrief(props) {
  return (
    <TouchableHighlight onPress={selectThisFilm}>
      <View style={styles.mainLayout}>
        <Image source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} style={styles.image} />
        <View style={styles.textWrapper}>
          <Title>{props.film.title}</Title>
          <Text style={styles.taglineText}>{props.film.tagline}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )

  function selectThisFilm(e) {
    store.dispatch({ type: "SET_SELECTED_FILM", film: props.film });
    store.dispatch({ type: "SHOW_FILM_DETAILS" });
  }
}