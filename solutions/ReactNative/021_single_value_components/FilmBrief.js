import React from 'react';
import { Image, Text, View } from 'react-native';
import { host } from './store/api_host_maker';

export const FilmBrief = ({ film }) => {
  return (
    <View>
      <Text>{film.title}</Text>
      <Text>{film.tagline}</Text>
      <Image source={{ uri: `${host}/${film.poster_path}` }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
    </View>
  )
}