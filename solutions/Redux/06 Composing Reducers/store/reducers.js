import { actionTypes } from './actions';

const personReducer = (state, action) => {
  console.log("In person reducer", state, action);
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.payload.email }
    case actionTypes.SET_CELL:
      return { ...state, cell: action.payload.cell }
    default:
      return state;
  }
};

const nameReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_NAME_FIRST:
      return { ...state, first: action.payload.first }
    case actionTypes.SET_NAME_LAST:
      return { ...state, last: action.payload.last }
    case actionTypes.SET_NAME_TITLE:
      return { ...state, title: action.payload.title }
    default:
      return state;
  }
};

const locationReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_LOCATION_STREET:
      return { ...state, street: action.payload.street }
    case actionTypes.SET_LOCATION_CITY:
      return { ...state, city: action.payload.city }
    case actionTypes.SET_LOCATION_STATE:
      return { ...state, state: action.payload.state }
    case actionTypes.SET_LOCATION_POSTCODE:
      return { ...state, postcode: action.payload.postcode }
    default:
      return state;
  }
}
// Combining the other reducers
const rootReducer = (state, action) => ({
  ...state,
  person: {
    ...personReducer(state.person, action),
    name: nameReducer(state.person.name, action),
    location: locationReducer(state.person.location, action)
  }
})

export default rootReducer;