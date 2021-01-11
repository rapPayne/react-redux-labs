import React from 'react';
import { Button, Image, Modal, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { store } from './store/store';
import { DatePicker } from './DatePicker';
import { FilmBrief } from './FilmBrief';
import { FilmDetails } from './FilmDetails';


export const Landing = props => {
 const { films, selected_date, selected_film, show_film_details, showings } = props;
 return (
  <SafeAreaView>
   <ScrollView>
    <View flexDirection="row">
     <Image source={require("./assets/daam.png")} style={{height:100, width:100}} />
     <View>
      <Text>Dinner and a Movie</Text> 
      <Text>Tap on a film to see its details and pick a date to see showtimes.</Text>
     </View>
    </View>
    <DatePicker selected_date={selected_date} />
    {films.map(film => <FilmBrief film={film} isSelected={film === selected_film} key={film.id} />)}
   </ScrollView>
   <Modal visible={show_film_details}>
    <FilmDetails selected_film={selected_film} selected_date={selected_date} showings={showings} />
    <Button onPress={dismissModal} title="Done" />
   </Modal>
  </SafeAreaView>
 )
}

function dismissModal() {
 store.dispatch({ type: "HIDE_FILM_DETAILS" });
}