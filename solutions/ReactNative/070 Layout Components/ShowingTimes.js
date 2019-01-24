import React from 'react';
import { Text, View } from 'react-native';

export function ShowingTimes(props) {
  const showings = props.showings.map(showing => ({...showing, showing_time: (new Date(showing.showing_time)).toLocaleTimeString() }))
  return (
    <View>
      <Text>Showing times for {props.selected_date.toDateString()}</Text>
      {showings.map(showing => <Text key={showing.id}>{showing.showing_time}</Text> )}
    </View>
  )
}