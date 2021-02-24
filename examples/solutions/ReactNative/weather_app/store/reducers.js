export const reducer = (state, action) => {
 if (!action) return state;
 switch (action.type) {
  case "SET_COORDINATES":
   const { latitude, longitude } = action;
   return { ...state, coordinates: { latitude, longitude } };
  case "SET_CURRENT_WEATHER":
   return { ...state, currentWeather: action.currentWeather };
  case "SET_FIVE_DAY_FORECAST":
   return { ...state, forecast: action.forecast };
  case "SET_FORECAST_URL":
   return { ...state, forecastUrl: action.forecastUrl };
  case "SET_FORECAST_HOURLY_URL":
   return { ...state, forecastHourlyUrl: action.forecastHourlyUrl };
  case "SET_HOURLY_FORECAST":
   console.log("in reducer setting hourly", action)
   return { ...state, hourlyForecast: action.hourlyForecast };
  case "SET_LOCATION":
   const { city, region } = action;
   return { ...state, location: { city, region } };
  default:
   return state;
 }
};