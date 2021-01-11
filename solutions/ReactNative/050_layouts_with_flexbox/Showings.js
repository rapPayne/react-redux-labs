import React from 'react';
import { Text, View } from 'react-native';
import { formatShowingTime } from './helpers';

export const Showings = ({ showings, selected_date }) =>
 <>
  <Text>Showing times for {selected_date.toDateString()}</Text>
  <View style={{flexDirection: "row"}}>
   {showings.map(showing => <Text key={showing.id}>{formatShowingTime(showing.showing_time)}</Text>)}
  </View>
 </>
