import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';


function Page1Component(props) {
  return (
    <View>
      <Text>I'm Page1</Text>
    </View>
  )
}

function Page2Component(props) {
  return (
    <View>
      <Text>I'm Page2</Text>
    </View>
  )
}

function Page3Component(props) {
  return (
    <View>
      <Text>I'm Page3</Text>
    </View>
  )
}

const routeConfig = {
  Page1: Page1Component,
  Page2: Page2Component,
  Page3: Page3Component,
};

export const TabNavComponent = createBottomTabNavigator(routeConfig);

