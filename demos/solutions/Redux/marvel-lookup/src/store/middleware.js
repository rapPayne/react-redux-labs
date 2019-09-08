import { marvelPublicKey } from '../sensitive_constants';

export const fetchCharactersMiddleware = ({getState,dispatch}) => next => action => {
 // Go get characters here.
 if (action.type === "FETCH_CHARACTERS") {
  dispatch({type:"CLEAR_ALL_CHARACTERS"});
  const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${action.characterName}&apikey=${marvelPublicKey}`;
  fetch(url)
  .then(res => res.json())
  .then(res => {console.log(res.data.results);return res.data.results;})
  .then(res => res)
  .then(characters => characters.forEach(character => dispatch({type: "ADD_CHARACTER", character})))
  .catch(err => console.error(`Oh noes! ${err}`));
 }
 next(action);
}
