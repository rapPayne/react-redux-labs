import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import cart from './cart.json';

export class Checkout extends Component {
  subTotal = 0;
  tax = 0;
  Total = 0;
  render() {
    return (
      <SafeAreaView> 
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <View style={styles.cart}>
            {cart.seats.map(line => this.makeCartLine(line))}
            <Text>subtotal: {this.subTotal}</Text>
            <Text>Tax: {this.tax}</Text>
            <Text>Total: {this.total}</Text>
          </View>
          <View>
            <Text>Checkout</Text>
            <Text>First name</Text>
            <TextInput onChangeText={text => this.handleChange("first name", text)} />
            <Text>Last name</Text>
            <TextInput onChangeText={text => this.handleChange("last name", text)} />
            <Text>Email</Text>
            <TextInput keyboardType="email-address" onChangeText={text => this.handleChange("email", text)} />
            <Text>Cell</Text>
            <TextInput keyboardType="phone-pad" onChangeText={text => this.handleChange("cell", text)} />
            <Text>Credit Card Number</Text>
            <TextInput keyboardType="number-pad" onChangeText={text => this.handleChange("creditCard", text)} />
            <Button title="Purchase" onPress={this.purchase} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }

  purchase = () => {
    throw new Error("Not yet implemented");
  }
  handleChange(name, text) {
    console.log(`${name} was changed to ${text}`);
  }
  makeCartLine(line) {
    console.log("makeCartLine", line)
    this.subTotal += line.price;
    this.tax = this.subTotal * 0.0825;
    this.Total = this.subTotal + this.tax;
    return (
      <View style={styles.cartLine} key={line._id}>
        <Text>Table {line.table_number} seat {line.seat_number}</Text>
        <Text>{line.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cart: {
    backgroundColor: "yellow",
  },
  cartLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
})