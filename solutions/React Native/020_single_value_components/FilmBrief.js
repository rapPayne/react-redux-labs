import React from 'react';
import { Text, View, Image } from 'react-native';
import { host } from './helpers';

export const FilmBrief = ({film}) => (
  <View>
   <Image source={{uri:`${host}/${film.poster_path}`}} style={{width: 100, height: 100, resizeMode:"contain"}} />
   <Text>{film.title}</Text>
   <Text>{film.tagline}</Text>
  </View>
)