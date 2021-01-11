import React, { Component } from 'react';
import { Button, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import cart from './cart.json';

export class Checkout extends Component {
  subTotal = 0;
  tax = 0;
  total = 0;

  render() {
    console.log(Platform.ios, Platform.android, Platform)

    return (
      <SafeAreaView> 
      <KeyboardAvoidingView behavior="position">
        <ScrollView>
          <View style={styles.container}>
          <Text style={styles.headline}>Checkout</Text>
          <Text style={styles.yourCart}>Your cart</Text>
          <View style={styles.cart}>
            {cart.seats.map(line => this.makeCartLine(line))}
            <Text style={[styles.cartText, styles.tax]}>_________________</Text>
            <Text style={[styles.cartText, styles.subtotal]}>subtotal: 32.25</Text>
            <Text style={[styles.cartText, styles.tax]}>Tax: 2.66</Text>
            <Text style={[styles.cartText, styles.tax]}>_________________</Text>
            <Text style={[styles.cartText, styles.total]}>Total: 34.91</Text>
          </View>
          <View style={styles.form}>
            <Text style={styles.label}>First name</Text>
            <TextInput onChangeText={text => this.handleChange("first name", text)} style={styles.formField} />
            <Text style={styles.label}>Last name</Text>
            <TextInput onChangeText={text => this.handleChange("last name", text)} style={styles.formField} />
            <Text style={styles.label}>Email</Text>
            <TextInput keyboardType="email-address" onChangeText={text => this.handleChange("email", text)} style={styles.formField} />
            <Text style={styles.label}>Cell</Text>
            <TextInput keyboardType="phone-pad" onChangeText={text => this.handleChange("cell", text)} style={styles.formField} />
            <Text style={styles.label}>Credit Card Number</Text>
            <TextInput keyboardType="number-pad" onChangeText={text => this.handleChange("creditCard", text)} style={styles.formField} />
            <Button title="Purchase" onPress={this.purchase} style={styles.purchaseButton} />
          </View>
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
    this.total = this.subTotal + this.tax;
    return (
      <View style={styles.cartLine} key={line._id}>
        <Text style={styles.cartText}>Table {line.table_number} seat {line.seat_number}</Text>
        <Text style={styles.cartText}>{line.price}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headline: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 30,
  },
  yourCart: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cart: {
    width: 400,
    backgroundColor: 'rgb(232, 229, 153)',
    borderColor: 'rgb(11, 134, 232)',
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
  cartText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  cartLine: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subtotal: {
    alignSelf: 'flex-end',
  },
  tax: {
    alignSelf: 'flex-end',
  },
  total: {
    alignSelf: 'flex-end',
  },
  form: {
    margin: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  formField: {
    borderWidth: 1,
    marginBottom: 10,
    height: 40,
  },
  purchaseButton: {
    backgroundColor: 'rgb(232, 229, 153)',
    borderColor: 'rgb(230, 255, 13)',

  },
})