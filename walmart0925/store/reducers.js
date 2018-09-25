import { actionTypes } from './actions';

const personReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case actionTypes.SET_EMAIL:
      return { ...state, email: action.email };
    case actionTypes.SET_CELL:
      return { ...state, cell: action.cell };
    default:
      return state;
  }
}

const nameReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, first: action.firstname }
    case "SET_LAST_NAME":
      return { ...state, last: action.lastname }
    case "SET_TITLE":
      return { ...state, title: action.title }
    default:
      return state;
  }
}
const locationReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    case "SET_STREET":
      return { ...state, street: action.street }
    case "SET_CITY":
      return { ...state, city: action.city }
    case "SET_STATE":
      return { ...state, state: action.state }
    case "SET_POSTCODE":
      return { ...state, postcode: action.postcode }
    default:
      return state;
  }
}

const rootReducer = (state, action) => {
  if (!action) return state;
  switch (action.type) {
    default:
      return state;
  }
};

export const reducer = (state, action) => ({
  ...rootReducer(state, action),
  person: {
    ...personReducer(state.person, action),
    name: nameReducer(state.person.name, action),
    location: locationReducer(state.person.location, action),
  }
})