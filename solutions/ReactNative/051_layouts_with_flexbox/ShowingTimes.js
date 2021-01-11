import React from 'react';
import { Text, View } from 'react-native';

export const ShowingTimes = ({showings, selected_date}) =>
<View>
<Text>Showing times for {selected_date.toDateString()}</Text>
<View>
  {showings.map(showing => (
    <Text key={showing.id}>
      {showing.showing_time}
    </Text>
  ))}
</View>
</View>