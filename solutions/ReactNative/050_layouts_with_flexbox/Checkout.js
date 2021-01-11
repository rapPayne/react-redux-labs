import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

import cart from './assets/cart.json';

export const Checkout = props => {
 const [firstName, setFirstName] = useState(props.firstName);
 const [lastName, setLastName] = useState(props.lastName);
 const [creditCard, setCreditCard] = useState(props.creditCard);
 const [email, setEmail] = useState(props.email);
 const [phone, setPhone] = useState(props.phone);
 return (
  <SafeAreaView>
   <KeyboardAvoidingView behavior="height">
    <View>
     <ScrollView>
      <Text>Checking out</Text>
      <Text>Your cart</Text>
      <View>
       {console.log("cart is", cart)} 
       <Text>Your Cart</Text>
       {cart.seats.map(seat => <Text key={`${seat.table_number}_${seat.seat_number}`}>Table {seat.table_number}, seat {seat.seat_number}</Text>)}
       <Text>Subtotal: {getSubTotal(cart)}</Text>
       <Text>Tax: {getTax(cart)}</Text>
       <Text>Total: {getTotal(cart)}</Text>
      </View>
      <Text>First name</Text>
      <TextInput value={firstName} onChangeText={setFirstName} />
      <Text>Last name</Text>
      <TextInput value={lastName} onChangeText={setLastName} />
      <Text>Credit Card</Text>
      <TextInput keyboardType="number-pad" value={creditCard} onChangeText={setCreditCard} />
      <Text>Email</Text>
      <TextInput keyboardType="email-address" value={email} onChangeText={setEmail} />
      <Text>Phone</Text>
      <TextInput keyboardType="phone-pad" value={phone} onChangeText={setPhone} />
      <Button title="Purchase" onPress={purchase} />
     </ScrollView>
    </View>
   </KeyboardAvoidingView>
  </SafeAreaView>
 )
}

function purchase() {
 console.log("Purchasing")
}

function getSubTotal(cart) {
 return +cart.seats.reduce((total, current) => total+current.price, 0).toFixed(2);
}
function getTax(cart) {
 return +(getSubTotal(cart) * 0.0825).toFixed(2);
}
function getTotal(cart) {
 return +(getSubTotal(cart) + getTax(cart)).toFixed(2);
}