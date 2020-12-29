import React from 'react';
import { Image, Text, View } from 'react-native';
import { host } from './store/apiHelpers';

export const FilmBrief = ({ film }) => {
  return (
    <View>
      <Image source={{ uri: `${host}/${film.poster_path}` }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
    </View>
  )
}