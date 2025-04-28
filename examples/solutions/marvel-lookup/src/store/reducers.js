
export const reducer = (state,action) => {
 if (!action) return state;
 switch (action.type) {
  case "CLEAR_ALL_CHARACTERS":
   return {...state, characters: []};
  case "ADD_CHARACTER":
   console.log("adding ", action.character)
   return {...state, characters: [action.character, ...state.characters]};
  case "SET_CHARACTER_NAME":
    return {...state, characterName: action.characterName};
   default:
   return state;
 }
};