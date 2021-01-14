import React from 'react';
import { Button, Image, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from './theme';
import { host } from './store/api_host_maker';
// import QRCode from 'react-native-qrcode';
import QRCode from 'react-native-qrcode-svg';
import { Title } from './Title';

export const Ticket = (props) => {
  const { selected_film, selected_showing } = props;
  const navigation = useNavigation();
  const ticketNumber = getTicketNumber();
  console.log("Ticket", selected_showing);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Image source={require('./assets/daam.png')} style={{ height: 100, width: 100 }} />
            <Text style={theme.text.companyName}>Dinner and a Movie</Text>
          </View>
          <View style={styles.ContentWrapper}>
            <Text>We're looking forward to seeing you soon. Please show this to the host when you arrive. This is your ticket.</Text>
            <View style={styles.filmDetailsRow}>
              <Image source={{ url: `${host}${selected_film.poster_path}` }} style={styles.poster} />
              <Title>{selected_film.title}</Title>
            </View>
            <Text style={styles.showingTime}>{selected_showing.showing_time.toShowingDateString()} {selected_showing.showing_time.toShowingTimeString()}</Text>
            <View style={styles.qrCodeWrapper}>
              <QRCode value={ticketNumber + ""} size={300} />
            </View>
            <View style={styles.dataWrapper}>
              <Text style={theme.text.label}>Ticket number</Text><Text>{ticketNumber}</Text>
            </View>
            <Button title="Look for another movie" onPress={() => navigation.push("Landing")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// Generate a fake ticket number. In production, we'd grab this from a database somehow.
const getTicketNumber = () => Math.floor(Math.random() * 1050000) + 50000;

const styles = StyleSheet.create({
  title: {
    flexDirection: 'row',
  },
  ContentWrapper: {
    padding: 20,
  },
  filmDetailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  poster: {
    height: 150, width: 100, resizeMode: 'contain',
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 5, marginBottom: 10,
  },
  showingTime: {
    fontSize: 25,
    textAlign: 'center',
  },
  qrCodeWrapper: {
    justifyContent: 'center',
  }
});