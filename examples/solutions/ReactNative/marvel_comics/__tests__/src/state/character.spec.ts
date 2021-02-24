
import { store } from "../../../src/state/store";
import { Character } from "../../../src/state/APICharacterTypes";

describe("The store", () => {
  it("can be created", () => {
    expect(store).toBeTruthy();
  })
});

describe("Character", () => {
  it("search string can be set in state", () => {
    const searchString: string = "thing to search for";
    store.dispatch({ type: "SET_CHARACTER_SEARCH_STRING", searchString })
    expect(store.getState()?.searchString).toEqual(searchString);
  });
  it("list can be set in state", () => {
    const characters: Character[] = [
      {name: "char 1", description: "char1 description"},
      {name: "char 2", id: 12345 },
      {name: "char 3", resourceURI: "http://foo.com/char3"},
    ];
    store.dispatch({type: "SET_CHARACTERS", characters});
    characters.forEach(character => 
    expect(store.getState().characters).toContain(character));
  });
});