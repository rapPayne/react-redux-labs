import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from './theme';

export const ShowingTimes = ({ showings, selected_date }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View>
      <Text style={{ ...theme.text.showingTimesTitle, ...styles.showingTimesTitle }}>Showing times for {selected_date?.toShowingDateString()}</Text>
      <View style={styles.times}>
        {showings.map(showing => (

          <Text onPress={() => pickShowingTime(showing)} key={showing.id} style={styles.time}>
            {new Date(showing.showing_time).toShowingTimeString()}
          </Text>
        ))}
      </View>
    </View>
  )
  function pickShowingTime(showing) {
    dispatch({type: "HIDE_FILM_DETAILS"});
    dispatch({type: "SET_SELECTED_SHOWING", showing});
    navigation.push("PickSeats", {showing});
  }
}

const styles = StyleSheet.create({
  showingTimesTitle: {
    textAlign: 'center',
  },
  times: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  time: {
    padding: 7,
    fontSize: 14,
  },
})
