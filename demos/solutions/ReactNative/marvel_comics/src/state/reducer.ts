import { Reducer, Action } from 'redux';
import { AppState } from './AppState';
import { ActionTypes } from './actions';

const initialState: AppState = {
  searchString: "",
  characters: [],
}
export function reducer(state = initialState, action: ActionTypes): AppState | undefined {
  switch (action.type) {
    case "SET_CHARACTER_SEARCH_STRING":
      return { ...state, searchString: action.searchString };
    case "SET_CHARACTERS":
      return { ...state, characters: action.characters };
    default:
      return state;

  }
}

