import React from 'react';
import { Text } from 'react-native';

export const Showings = ({showings, selected_date}) =>
showings.map(showing => <Text key={showing.id}>
 {showing.showing_time}
</Text>)