import { createStore } from 'redux';
import { reducer } from './reducers';
import user from './user.json';

const initialState = { user: user };

export const store = createStore(reducer, initialState);