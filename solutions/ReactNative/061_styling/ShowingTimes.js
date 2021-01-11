import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';

export const ShowingTimes = ({ showings, selected_date }) =>
  <View>
    <Text style={{...theme.text.showingTimesTitle, ...styles.showingTimesTitle}}>Showing times for {selected_date?.toShowingDateString()}</Text>
    <View style={styles.times}>
      {showings.map(showing => (
        <Text key={showing.id} style={styles.time}>
          {showing.showing_time.toShowingTimeString()}
        </Text>
      ))}
    </View>
  </View>

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
