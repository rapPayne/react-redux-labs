import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { host } from './store/api_host_maker';
import { theme } from './theme';
import { Title } from './Title';

export const FilmBrief = ({ film, isSelected }) => {
  const dispatch = useDispatch();
  return (
    <Pressable onPress={() => selectThisFilm(film)}>
      <View style={{...styles.wrapper, backgroundColor: isSelected ? theme.colors.selectedFilmBackground : theme.colors.mainLight }}>
        <Image source={{ uri: `${host}/${film.poster_path}` }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
        <View>
          <Title>{film.title}</Title>
          <Text>{film.tagline}</Text>
        </View>
      </View>
    </Pressable>
  )

  function selectThisFilm(film) {
    dispatch({ type: "SET_SELECTED_FILM", film });
    dispatch({ type: "SHOW_FILM_DETAILS" });
  }
}

const styles= StyleSheet.create({
  wrapper: {
    marginTop: 5, marginBottom: 10,
    flexDirection: 'row',
  },
});