import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ShowingTimes } from './ShowingTimes';
import { Title } from './Title';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  posterContainer: {

  },
  poster: {
    alignSelf: 'center',
    resizeMode: 'contain',
    height: 400, width: 400,
  },
  tagline: {
    fontSize: 20,
  },
  homepage: {
    paddingBottom: 10,
  },
  overview: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  runtime: {
    paddingTop: 10,
  },
  ratingsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 5,
  },
  bigRating: {
    fontSize: 20,
  },
  smallRating: {
    fontSize: 10,
  }
})

export function FilmDetails(props) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.posterContainer}>
            <Image source={{ uri: `http://localhost:5000/${props.film.poster_path}` }} style={styles.poster} />
          </View>
          {props.showings && props.selected_date &&
            <ShowingTimes selected_date={props.selected_date} showings={props.showings} chooseTime={props.chooseTime} />}
          <Title>{props.film.title}</Title>
          <Text style={styles.tagline}>{props.film.tagline}</Text>
          <Text style={styles.homepage}>{props.film.homepage}</Text>
          <Text style={styles.overview}>{props.film.overview}</Text>
          <Text style={styles.release_date}>Release date: {formatReleaseDate(props.film.release_date)}</Text>
          <Text style={styles.runtime}>Running time: {props.film.runtime} minutes</Text>
          <View style={styles.ratingsRow}>
            <Text style={styles.bigRating}>Rating: {props.film.vote_average}/<Text style={styles.smallRating}>10</Text></Text>
            <Text>{props.film.vote_count} votes</Text>
          </View>
        </View>
    </SafeAreaView>
  )

}

function formatReleaseDate(release_date) {
  return (new Date(release_date)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}