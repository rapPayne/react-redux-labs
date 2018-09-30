import { createStore } from 'redux';
import * as user from '../user.json';
import reducer from './reducers';

const initialState = { person: user };

export const store = createStore(reducer, initialState);