import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers';
import { loggingMiddleware } from './middleware';
import * as user from '../user.json';

const enhancers = applyMiddleware(loggingMiddleware);

const initialState = { person: user };
export const store = createStore(reducer, initialState, enhancers);
