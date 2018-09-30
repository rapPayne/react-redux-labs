import React from 'react';
import { Image, Text, View } from 'react-native';
import { ShowingTimes } from './ShowingTimes';

export function FilmDetails(props) {
  console.log("fd props", props)
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
      <Image source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} style={{ height: 200, width: 200 }} />
      </View>
      {props.showings && props.selected_date && 
        <ShowingTimes selected_date={props.selected_date} showings={props.showings} />}
      <Text>{props.film.title}</Text>
      <Text>{props.film.tagline}</Text>
      <Text>{props.film.homepage}</Text>
      <Text>{props.film.overview}</Text>
      <Text>{props.film.release_date}</Text>
      <Text>{props.film.runtime}</Text>
      <Text>{props.film.vote_average}</Text>
      <Text>{props.film.vote_count}</Text>
    </View>
  )

}