import React from 'react';
import { Button, Text, View } from 'react-native';
import Expo from 'expo';

const logIn = async () => {
  const result = await Expo.Google.logInAsync({
    androidClientId: "973845586997-t5csdjm9f6oqm4rqghlp1vuf14f00lba.apps.googleusercontent.com",
    behavior: 'web',
    scopes: ['profile','email'],
  });
  console.log("result of login attempt is ", result);
}

export function Login(props) {
  return (
    <View>
      <Text>You are not currently logged in.</Text>
      <Text>Go ahead and log in now.</Text>
      <Button onPress={() => logIn()} title="Log in"></Button>
    </View>
  )


}