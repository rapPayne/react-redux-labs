import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers.js';
import middlewares from './middleware.js';

const initialState = {
 coordinates: {latitude: 36.3615, longitude: -94.1807 },
 location: {},
 forecastUrl: "",
 forecastHourlyUrl: "",
}

export const store = createStore(reducer, initialState,   
                                 applyMiddleware(...middlewares));
