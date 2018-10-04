import React, { Component } from 'react';
import { Button, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { store } from './store/store';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { FilmDetails } from './FilmDetails';
import { ShowingTimes } from './ShowingTimes';
import { Title } from './Title';

//import showings from './showings.json'

const styles = StyleSheet.create({
  header: { flex: 1, flexDirection: 'row' },
  logo: {
    height: 75, width: 75,
  }
});

export class Landing extends Component {
  constructor(props) {
    super(props);
    this.navigation = this.props.navigation;
    this.state = {...store.getState()};
    //this.state.showings = [...showings];                     // <-- Kludge! Must fix!
    store.subscribe(() => this.setState(store.getState()));
  }

  chooseTime = (showing) => {
    const { selected_film, selected_date } = this.state;
    this.navigation.navigate('PickSeats', { selected_film, selected_date, showing });
    store.dispatch({ type: "HIDE_FILM_DETAILS" });
  }

  render() {
    const { showings, films, selected_date, selected_film, showFilmDetails } = {...this.state};
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
            {showings && selected_film.id && <ShowingTimes showings={showings} selected_date={selected_date} chooseTime={this.chooseTime} />}
            {films.map(film => (
              <FilmBrief film={film} key={film.id} isSelected={film.id === selected_film.id} />
            )
            )}
          </View>
          <Modal visible={showFilmDetails}>
            <ScrollView>
              <FilmDetails film={selected_film} selected_date={selected_date} showings={showings} chooseTime={this.chooseTime} />
              <Button title="Done" onPress={() => store.dispatch({ type: "HIDE_FILM_DETAILS" })} />
            </ScrollView>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    )
  }

  static navigationOptions = {
    title: "More movies",
    header: null,
  }
}


