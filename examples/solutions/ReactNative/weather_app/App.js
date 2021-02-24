import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { FiveDayForecast } from './FiveDayForecast';
import { HomeScreen } from './HomeScreen';
import { CurrentWeather } from './CurrentWeather';
import { HourlyForecast } from './HourlyForecast';

const routing = {
 Landing: HomeScreen,
 Results: CurrentWeather,
 FiveDay: FiveDayForecast,
 Hourly: HourlyForecast,
};
const routeConfig = {
 initialRoute: "Landing",
};
const stackNavigator = createStackNavigator(routing, routeConfig);
const AppContainer = createAppContainer(stackNavigator);

export default function App() {
 return (
  <AppContainer />
  );
}


