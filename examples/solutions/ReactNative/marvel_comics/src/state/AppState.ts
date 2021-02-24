import { Character } from './APICharacterTypes';

export interface AppState {
  searchString? :string;
  characters? :Character[];
}