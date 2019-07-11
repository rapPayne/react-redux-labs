import React from 'react';
import {
  Button,
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Press me" onPress={this.noop}>
          <View style={styles.base}>
            <Text>WithoutFeedback</Text>
            <Image
              style={styles.logo}
              source={require('./assets/expo.symbol.white.png')}
            />
          </View>
        </Button>

        <TouchableWithoutFeedback onPress={this.noop}>
          <View style={styles.base}>
            <Text style={styles.text}>WithoutFeedback</Text>
            <Image
              style={styles.logo}
              source={require('./assets/expo.symbol.white.png')}
            />
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback onPress={this.noop}>
          <View style={styles.base}>
            <Text>NativeFeedback</Text>
            <Image
              style={styles.logo}
              source={require('./assets/expo.symbol.white.png')}
            />
          </View>
        </TouchableNativeFeedback>

        <TouchableHighlight onPress={this.noop} style={styles.base}>
          <View>
            <Text>Highlight</Text>
            <Image
              style={styles.logo}
              source={require('./assets/expo.symbol.white.png')}
            />
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.base}
          onPress={this.noop}>
          <View>
            <Text>Opacity</Text>
            <Image
              style={styles.logo}
              source={require('./assets/expo.symbol.white.png')}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
          WithoutFeedback and NativeFeedback don't seem to hold styles
        </Text>
      </View>
    );
  }
  noop = e => console.log(e);
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  base: {
    //alignContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
  logo: {
    alignSelf: 'center',
    backgroundColor: 'purple',
    height: 50,
    width: 50,
  },
  text: {
    alignSelf: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    color: '#34495e',
  },
});
