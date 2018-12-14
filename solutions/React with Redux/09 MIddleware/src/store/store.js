import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import { historyMiddleware } from './middleware';

import user from './user.json';

const initialState = { user: user };

const enhancers = applyMiddleware(historyMiddleware);

export const store = createStore(reducer, initialState, enhancers);