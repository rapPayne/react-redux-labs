import React from 'react';
import { Button, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { FilmDetails } from './FilmDetails';
import { ShowingTimes } from './ShowingTimes';
import { Title } from './Title';

import showings from './showings.json'

const styles = StyleSheet.create({
  header: { flex: 1, flexDirection: 'row' },
  logo: {
    height: 75, width: 75,
  }
});

export function Landing(props) {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Image source={require(`./assets/daam.png`)} style={styles.logo} />
            <Title>Dinner And A Movie</Title>
          </View>
          <Text>Tap a movie below to see its details. Then pick a date to see showtimes.</Text>
          <DatePicker />
          {props.showings && <ShowingTimes showings={props.showings} />}
          {props.films.map(film => (
            <FilmBrief film={film} key={film.id} isSelected={film.id === props.selected_film.id} />
          )
          )}
        </View>
        <Modal visible={props.showFilmDetails}>
          <ScrollView>
            <FilmDetails film={props.selected_film} selected_date={props.selected_date} showings={showings} />
            <Button title="Done" onPress={() => store.dispatch({ type: "HIDE_FILM_DETAILS" })} />
          </ScrollView>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  )


}