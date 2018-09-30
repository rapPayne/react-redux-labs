import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ShowingTimes } from './ShowingTimes';

const styles = StyleSheet.create({
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  }
})

export function FilmDetails(props) {
  return (
    <View>
      <View>
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
      <View style={styles.ratingsRow}>
        <Text>Rating: {props.film.vote_average}/10</Text>
        <Text>{props.film.vote_count} votes</Text>
      </View>
    </View>
  )

}