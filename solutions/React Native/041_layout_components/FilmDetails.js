import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export const FilmDetails = ({ film, selected_date, showings = [] }) => {
  return (
    <ScrollView>
      <View>
        <Text>Showing times for {selected_date.toDateString()}</Text>
        {showings.map(showing => <Text key={showing.id}>
          {showing.showing_time}
        </Text>)}
        <Text>{film.title}</Text>
        <Text>{film.tagline}</Text>
        <Text>{film.homepage}</Text>
        <Text>{film.overview}</Text>
        <Text>Release date: {film.release_date}</Text>
        <Text>Running time: {film.runtime} minutes</Text>
        <View>
          <Text>
            Rating: {film.vote_average}/
          <Text>10</Text>
          </Text>
          <Text>{film.vote_count} votes</Text>
        </View>
      </View>
    </ScrollView>
  )
}