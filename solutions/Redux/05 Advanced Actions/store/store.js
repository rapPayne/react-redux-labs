import { createStore } from 'redux';
import * as user from '../user.json';
import { actions, actionTypes } from './actions';

const reducer = (state, action) => {
  console.log("In reducer", state, action);
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_NAME_FIRST:
      return {
        ...state,
        person: { ...state.person, name: { ...state.person.name, first: action.payload.first } }
      };
    case actionTypes.SET_NAME_LAST:
      return {
        ...state,
        person: { ...state.person, name: { ...state.person.name, last: action.payload.last } }
      };
    case actionTypes.SET_NAME_TITLE:
      return {
        ...state,
        person: { ...state.person, name: { ...state.person.name, title: action.payload.title } }
      };
    case actionTypes.SET_LOCATION_STREET:
      return {
        ...state,
        person: { ...state.person, location: { ...state.person.location, street: action.payload.street } }
      };
    case actionTypes.SET_LOCATION_CITY:
      return {
        ...state,
        person: { ...state.person, location: { ...state.person.location, city: action.payload.city } }
      };
    case actionTypes.SET_LOCATION_STATE:
      return {
        ...state,
        person: { ...state.person, location: { ...state.person.location, state: action.payload.state } }
      };
    case actionTypes.SET_LOCATION_POSTCODE:
      return {
        ...state,
        person: { ...state.person, location: { ...state.person.location, postcode: action.payload.postcode } }
      };
    case actionTypes.SET_EMAIL:
      return {
        ...state,
        person: { ...state.person, email: action.payload.email }
      };
    case actionTypes.SET_CELL:
      return {
        ...state,
        person: { ...state.person, cell: action.payload.cell }
      };
    default:
      return state;
  }
};
const initialState = { person: user };

export const store = createStore(reducer, initialState);