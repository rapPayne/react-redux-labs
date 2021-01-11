import React from 'react';
import { Image, Text, View } from 'react-native';

export const FilmBrief = ({film}) => {
  return (
    <View key={film.id}>
    <Image source={{ uri: `http://localhost:3007/${film.poster_path}` }} style={{ height: 100, width: 100, resizeMode: "contain" }} />
    <Text>{film.title}</Text>
    <Text>{film.tagline}</Text>
  </View>
  )
}