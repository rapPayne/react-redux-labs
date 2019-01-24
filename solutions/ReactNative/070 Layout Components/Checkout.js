import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, ScrollView, Text, TextInput, View } from 'react-native';

export class Checkout extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <View>
            <Text>Checkout</Text>
            <Text>Your name</Text>
            <TextInput onChangeText={text => this.handleChange("name", text)} />
            <Text>Email</Text>
            <TextInput keyboardType="email-address" onChangeText={text => this.handleChange("email", text)} />
            <Text>Cell</Text>
            <TextInput keyboardType="phone-pad" onChangeText={text => this.handleChange("cell", text)} />
            <Text>Credit Card Number</Text>
            <TextInput keyboardType="number-pad" onChangeText={text => this.handleChange("creditCard", text)} />
            <Button title="Purchase" onPress={this.Purchase} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  handleChange(name, text) {
    console.log(`${name} was changed to ${text}`);
  }
}