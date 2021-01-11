import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { host } from './store/api_host_maker';

export const FilmDetails = ({ film, selected_date, showings = [] }) => {
  //TODO: Fake showings. Remove later.
  showings = [
    {showing_time:new Date().setHours(1)},
    {showing_time:new Date().setHours(3)},
    {showing_time:new Date().setHours(5)},
    {showing_time:new Date().setHours(7)},
  ]
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.posterContainer}>
          <Image source={{ uri: `${host}${film.poster_path}` }} style={styles.poster} />
          </View>
          <Text>Showing times for {selected_date.toShowingDateString()}</Text>
          <View style={styles.showingsContainer}>
          {showings.map(showing => <Text key={showing.id}>
            {showing.showing_time.toShowingTimeString()}
          </Text>)}
          </View>
          <Text>{film.title}</Text>
          <Text>{film.tagline}</Text>
          <Text>{film.homepage}</Text>
          <Text>{film.overview}</Text>
          <Text>Release date: {film.release_date}</Text>
          <Text>Running time: {film.runtime} minutes</Text>
          <View style={styles.voteLine}>
            <Text>
              Rating: {film.vote_average}/
          <Text>10</Text>
            </Text>
            <Text>{film.vote_count} votes</Text>
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
  },
  poster: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  showingsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  voteLine: {
    flexDirection: 'row',
  }
}