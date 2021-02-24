import React, { useState, useCallback } from 'react';
import { Button, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [timesPressed, setTimesPressed] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  const addMessage = (message: string) => {
    console.log(message);
    setMessages(oldMessages => [message, ...oldMessages]); // A function so it'll be (kind of) synchronous
  };

  return (
    //<SafeAreaView>
      <View style={styles.container}>
        <Button title="Generic Button" onPress={e => addMessage("Button pressed")}></Button>
        <Pressable android_ripple={{ radius: 100, borderless: true }}
          onPress={e => {
            setTimesPressed((current) => current + 1);
            addMessage("onPress");
          }}
          onPressIn={e => addMessage("onPressIn")}
          onPressOut={e => addMessage("onPressOut")}
          onLongPress={e => addMessage("onLongPress")}
          style={({ pressed }) => [
            styles.btn,
            {
              backgroundColor: pressed ? 'rgb(219, 68, 55)' : 'rgba(66,133,244,1)'
            },
          ]}
        >
          {({ pressed }) => (
            <View>
              <Text style={styles.text}>
                {pressed ? 'Pressed!' : 'Press Me'}
              </Text>
            </View>
          )}
        </Pressable>
        <View style={styles.logBox}>
          <Text>{`Pressed ${timesPressed} times`}</Text>
        </View>
        <ScrollView>
          {messages.map((message, i) => <Text key={i}>{message}</Text>)}
        </ScrollView>
      </View>
    //</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },
  btn: {
    backgroundColor: 'rgba(66,133,244,1)',
    width: 300,
    padding: 20,
    margin: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});

export default App;