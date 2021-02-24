import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export const Login = () => {
  const nav = useNavigation();
  return (
    <>
      <Text>
        Log in so we know who you are</Text>
      <Text>Username</Text>
      <Text>Password</Text>
      <Button title="Log in" onPress={()=>nav.push("Home")} />
    </>
  );
}

const styles = StyleSheet.create({
  foo: {
  },
});
