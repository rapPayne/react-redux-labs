import { Character } from './APICharacterTypes';

const SET_SEARCH_STRING = "SET_SEARCH_STRING";

interface SetSearchStringAction {
  type: string;
  searchString: string;
}
interface SetCharactersAction {type: string; characters: Character[] }

export type ActionTypes = SetSearchStringAction | SetCharactersAction ;

const setSearchString = (searchString: string) :ActionTypes => ({type: SET_SEARCH_STRING, searchString});

export const actions :Object = {
  setSearchString,
};
