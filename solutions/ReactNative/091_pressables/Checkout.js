import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as cart from './assets/cart.json';
import { theme } from './theme';

export const Checkout = (props) => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [creditCard, setCreditCard] = useState(props.creditCard);
  const [email, setEmail] = useState(props.email);
  const [phone, setPhone] = useState(props.phone);
  const subtotal = cart.seats.reduce((total, seat) => total += seat.price, 0);
  const tax = subtotal * 0.0825;
  const grandtotal = subtotal + tax;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <Text style={{ ...theme.text.headline, ...styles.headline }}>Checkout</Text>

          <Text style={theme.text.h2}>Your cart</Text>
          <View style={styles.cart}>
            {cart?.seats?.map((seat, i) => (
              <View style={styles.tr} key={i}>
                <Text style={styles.tdLeft}>Table {seat.table_number}, Seat {seat.seat_number}</Text>
                <Text style={styles.tdRight}>{seat.price.toCurrency()}</Text>
              </View>
            )
            )}
            <View style={styles.underline}></View>
            <View style={styles.tr}>
              <Text style={styles.tdLeft}>Subtotal</Text>
              <Text style={styles.tdRight}>{subtotal.toCurrency()}</Text>
            </View>
            <View style={styles.tr}>
              <Text style={styles.tdLeft}>Tax</Text>
              <Text style={styles.tdRight}>{tax.toCurrency()}</Text>
            </View>
 
            <View style={styles.tr}>
              <Text style={styles.tdLeft}>Total</Text>
              <Text style={{...styles.tdRight}}>{grandtotal.toCurrency()}</Text>
            </View>
          </View>

          <Text style={theme.text.label}>First name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} style={styles.input} />

          <Text style={theme.text.label}>Last name</Text>
          <TextInput value={lastName} onChangeText={setLastName} style={styles.input} />

          <Text style={theme.text.label}>Credit Card</Text>
          <TextInput value={creditCard} onChangeText={setCreditCard} keyboardType="number-pad" style={styles.input} />

          <Text style={theme.text.label}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" style={styles.input} />

          <Text style={theme.text.label}>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" style={styles.input} />

          <Button title="Purchase" onPress={purchase} />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )

  function purchase() {
    // Here is where we'd charge the user and put their tickets into the database.
    navigation.push("Ticket");
  }
}

const styles = StyleSheet.create({
  headline: {
    textAlign: 'center',
  },
  cart: {
    width: 350,
    borderColor: theme.colors.altDark,
    borderWidth: 1,
    backgroundColor: theme.colors.altLight,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  tr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tdLeft: {
    flex: 3,
  },
  tdRight: {
    flex: 1,
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  }
});