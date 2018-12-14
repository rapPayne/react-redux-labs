import { actionTypes } from './action-types';

const nameReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_NAME_FIRST:
      return { ...state, first: action.first };
    case actionTypes.SET_NAME_LAST:
      return { ...state, last: action.last };
    case actionTypes.SET_NAME_TITLE:
      return { ...state, title: action.title };
    default:
      return state;
  }
};

const locationReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_LOCATION_STREET:
      return { ...state, street: action.street};
      case actionTypes.SET_LOCATION_CITY:
      return { ...state, city: action.street};
      case actionTypes.SET_LOCATION_STATE:
      return { ...state, state: action.street};
      case actionTypes.SET_LOCATION_POSTCODE:
      return { ...state, postcode: action.street};
    default:
      return state;
  }
};

const rootUserReducer = (state, action) => {
  console.log(action);
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_CELL:
      return { ...state, cell: action.cell };
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.email };
    case actionTypes.SET_LOCATION_STREET:
      return { ...state, location: { ...state.location, street: action.street } };
    default:
      return state;
  }
};
const userReducer = (state, action) => ({
  ...rootUserReducer(state, action),
  name: nameReducer(state.name, action),
  location: locationReducer(state.location, action),
});

export const reducer = (state, action) => ({
  ...state, user: {...userReducer(state.user, action)}
});