import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { theme } from './theme';
import { host } from './store/api_host_maker';
import { Title } from './Title';
import { ShowingTimes } from './ShowingTimes';

export const FilmDetails = ({ film, selected_date, showings = [] }) => {
  //TODO: Fake showings. Remove later.
  showings = [
    { id: 1, showing_time: new Date() },
    { id: 2, showing_time: new Date() },
    { id: 3, showing_time: new Date() },
    { id: 5, showing_time: new Date() },
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.posterContainer}>
            <Image source={{ uri: `${host}${film.poster_path}` }} style={styles.poster} />
          </View>
          <ShowingTimes showings={showings} selected_date={selected_date} />
          <View style={styles.descriptionWrapper}>
            <Title>{film.title}</Title>
            <Text style={styles.tagline}>{film.tagline}</Text>
            <Text style={styles.homepage}>{film.homepage}</Text>
            <Text style={styles.overview}>{film.overview}</Text>
            <View style={styles.dataWrapper}>
              <Text style={theme.text.label}>Release date</Text><Text>{film.release_date}</Text>
            </View>
            <View style={styles.dataWrapper}>
              <Text style={theme.text.label}>Running time</Text><Text>{film.runtime} minutes</Text>
            </View>
            <View style={styles.voteLine}>
              <Text style={theme.text.label}>Rating:</Text>
              <Text style={theme.text.rating}>
                {film.vote_average}/
                <Text style={theme.text.ratingSmallText}>10</Text>
              </Text>
              <Text style={styles.voteCount}>{film.vote_count} votes</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = {
  posterContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  poster: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  descriptionWrapper: {
    marginTop: 30,
  },
  tagline: {
    fontSize: 16,
  },
  homepage: {
    fontSize: 10,
  },
  overview: {
    marginTop: 20,
    marginBottom: 15,
  },
  dataWrapper: {
    flexDirection: 'row',
    marginTop: 5, marginBottom: 10,
  },
  voteLine: {
    flexDirection: 'row',
  },
  voteCount: {
    marginLeft: 20,
  },
}