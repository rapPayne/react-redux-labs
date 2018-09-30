import React from 'react';
import { Button, Image, Modal, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { store } from './store/store';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { FilmDetails } from './FilmDetails';
import { ShowingTimes } from './ShowingTimes';

import showings from './showings.json'

export function Landing(props) {
    return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <View>
            <Image source={require(`./assets/daam.png`)} style={{ height: 75, width: 75 }} />
            <Text>Dinner And A Movie</Text>
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
          <FilmDetails film={props.selected_film} selected_date={props.selected_date} showings={showings} />
          <Button title="Done" onPress={() => store.dispatch({ type: "HIDE_FILM_DETAILS" })} />
        </Modal>
      </ScrollView>

    </SafeAreaView>
  )


}