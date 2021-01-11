import React, { useState } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';

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