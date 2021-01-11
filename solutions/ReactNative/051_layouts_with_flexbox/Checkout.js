import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import * as cart from './assets/cart.json';

export const Checkout = (props) => {
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
          <Text>Checkout</Text>

          <Text>Your cart</Text>
          <View style={styles.cart}>
            {cart?.seats?.map((seat,i) => (
              <View style={styles.tr} key={i}>
                <Text style={styles.tdLeft}>Table {seat.table_number}, Seat {seat.seat_number}</Text>
                <Text style={styles.tdRight}>{seat.price.toCurrency()}</Text>
              </View>
            )
            )}
            <View style={styles.underline}></View>
            <View style={styles.tr}>
              <Text>Subtotal</Text>
              <Text>{subtotal.toCurrency()}</Text>
            </View>
            <View style={styles.tr}>
              <Text>Tax</Text>
              <Text>{tax.toCurrency()}</Text>
            </View>
            <View style={styles.underline}></View>
            <View style={styles.tr}>
              <Text>Total</Text>
              <Text>{grandtotal.toCurrency()}</Text>
            </View>
          </View>

          <Text>First name</Text>
          <TextInput value={firstName} onChangeText={setFirstName} />

          <Text>Last name</Text>
          <TextInput value={lastName} onChangeText={setLastName} />

          <Text>Credit Card</Text>
          <TextInput value={creditCard} onChangeText={setCreditCard} keyboardType="number-pad" />

          <Text>Email</Text>
          <TextInput value={email} onChangeText={setEmail} keyboardType="email-address" />

          <Text>Phone</Text>
          <TextInput value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

          <Button title="Purchase" onPress={purchase} />

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )

  function purchase() {
    console.log("Purchasing")
  }
}

const styles = {
  cart: {
    width: 350,
  },
  tr: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tdLeft: {
  },
  tdRight: {
  },
  underline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
}