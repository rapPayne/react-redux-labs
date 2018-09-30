import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  headline: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  showingList: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
  showing: {
    fontSize: 20,
  }
})

export function ShowingTimes(props) {
  const t = formatShowingTime(props.showings[0].showing_time);
  const showings = props.showings.map(showing => ({ ...showing, showing_time: formatShowingTime(showing.showing_time) }))
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Showing times for {props.selected_date.toDateString()}</Text>
      <View style={styles.showingList}>
        {showings.map(showing => <Text key={showing.id} style={styles.showing}>{showing.showing_time}</Text>)}
      </View>
    </View>
  )
}

function formatShowingTime(showing_time) {
  const t = new Date(showing_time);
  const h = t.getHours();
  const m = t.getMinutes();
  return `${h > 12 ? h-12 : h}:${m < 10 ? 0+m : m} ${h < 12 ? "am" : "pm"}`
}