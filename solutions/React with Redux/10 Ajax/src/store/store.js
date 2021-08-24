import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { historyMiddleware, fetchCityAndStateMiddleware } from './middleware';

import user from './user.json';

const initialState = { user: user };

const enhancers = applyMiddleware(historyMiddleware, fetchCityAndStateMiddleware);

export const store = createStore(reducer, initialState, enhancers);