import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export function ShowingTimes(props) {
  const showings = props.showings.map(showing => ({ ...showing, showing_time: (new Date(showing.showing_time)).toLocaleTimeString() }))
  return (
    <View>
      <Text>Showing times for {props.selected_date.toDateString()}</Text>
      <View style={styles.showingList}>
        {showings.map(showing => <Text key={showing.id} style={styles.showing}>{showing.showing_time}</Text>)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  showingList: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

})
