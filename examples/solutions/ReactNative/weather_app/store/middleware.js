
const server = "https://api.weather.gov";

const fetchPointMiddleware = ({ dispatch, getState }) => next => action => {
 // console.log("middleware", action);
 if (action.type === "FETCH_POINT") {
  const state = getState();
  fetch(`${server}/points/${state.coordinates.latitude},${state.coordinates.longitude}`)
   .then(res => res.json())
   .then(res => {
    // Note: "state" gets reassigned to "region" here b/c it is messing with the "state" variable name in the reducer. (Duh).
    const { city, state: region } = res.properties.relativeLocation.properties;
    const { forecast, forecastHourly } = res.properties;
    dispatch({ type: "SET_LOCATION", city, region });
    dispatch({ type: "SET_FORECAST_URL", forecastUrl: forecast });
    dispatch({ type: "SET_FORECAST_HOURLY_URL", forecastHourlyUrl: forecastHourly });
    dispatch({ type: "FETCH_FORECAST", url: forecast })
    return res;
   })
   .catch(err => console.error("Couldn't fetch the geographic point", err))
 }
 next(action);
}

const fetchForecastMiddleware = ({ dispatch, getState }) => next => action => {
 if (action.type === "FETCH_FORECAST") {
  fetch(action.url)
   .then(res => res.json())
   .then(res => {
    dispatch({ type: "SET_CURRENT_WEATHER", currentWeather: res.properties.periods[0] });
    dispatch({ type: "SET_FIVE_DAY_FORECAST", forecast: res.properties.periods });
    return res;
   })
   .catch(err => console.error("Couldn't fetch the weather forecast", err))
 }
 next(action);
}

const fetchHourlyForecastMiddleware = ({ dispatch, getState }) => next => action => {
 if (action.type === "FETCH_HOURLY_FORECAST") {
  fetch(action.url)
   .then(res => res.json())
   .then(res => {
    dispatch({ type: "SET_HOURLY_FORECAST", hourlyForecast: res.properties.periods });
    return res;
   })
   .catch(err => console.error("Couldn't fetch the hourly forecast", err))
 }
 next(action);
}

export default [fetchPointMiddleware, fetchForecastMiddleware, fetchHourlyForecastMiddleware];