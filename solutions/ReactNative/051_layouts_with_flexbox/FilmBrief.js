import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { host } from './store/api_host_maker';

export const FilmBrief = ({ film, isSelected }) => {
  const dispatch = useDispatch();
  return (
    <Pressable onPress={() => selectThisFilm(film)}>
      <View style={styles.wrapper}>
        <Image source={{ uri: `${host}/${film.poster_path}` }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
        <View>
          <Text>{film.title}</Text>
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

const styles={
  wrapper: {
    flexDirection: 'row',
  },
}