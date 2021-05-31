import { reducer } from '../reducers/reducer';
import { actions, store } from '../store';

describe("Reducer", () => {
  let state = {}
  beforeEach(() => {
    state = {
      cart: { seats: [], food: [] },
      currentDate: new Date().setHours(0, 0, 0, 0),
      films: [],
      reservations: [],
      showings: [],
      theaters: [],
    };
  })
  it("exists", () => {
    expect(reducer).toBeTruthy();
  })
  it("returns unaltered state when no action is passed", () => {
    const newState = reducer(state, undefined);
    expect(newState).toStrictEqual(state);
  })
  it("returns unaltered state when action has no type", () => {
    const newState = reducer(state, { foo: "bar" });
    expect(newState).toStrictEqual(state);
  })
  it("can set films", () => {
    const newFilms = [{ "id": 1, "title": "Chunnel", "homepage": "http://chunnelmovie.com", "release_date": "2021-05-19T04:41:03.548Z", "overview": "There's an explosion in the Chunnel. And the U.S. President's daughter gets stuck in there. There is more than meets the eye in this complex, layered film.", "poster_path": "/img/posters/1.jpg", "runtime": 139, "tagline": "There's a war 100 meters below the English Channel", "popularity": 7, "imdb_id": "tt0137523", "vote_average": 6.2, "vote_count": 52 }, { "id": 2, "title": "Prognosis Negative", "homepage": "http://prognosisnegative.com", "release_date": "2021-05-19T07:53:27.155Z", "overview": "A doctor mulls over the consequences of a new miracle cure he has created while balancing his need to test it fully. But should he to it on his family?", "poster_path": "/img/posters/2.jpg", "runtime": 126, "tagline": "How far will a man go to find a cure?", "popularity": 8, "imdb_id": "tt0137523", "vote_average": 9.3, "vote_count": 822 }, { "id": 3, "title": "Checkmate", "homepage": "http://paramount.com/checkmatemovie", "release_date": "2021-05-23T22:26:05.294Z", "overview": "Checkmate is about a king who likes chess... and finds himself in real-life jeopardy when, like in the game, everyone is after the king. According to transcripts, this FANTASTIC dialogue exchange happens in the movie: Man: I didn't know you enjoyed chess, your majesty. King: Why wouldn't I? Man: Because the king is always in jeopardy. King: Yes, but it's only a game. Man: (suspiciously) Yes, of course. Only a game.", "poster_path": "/img/posters/3.jpg", "runtime": 127, "tagline": "Being the king is not a game... or is it?", "popularity": 3.3, "imdb_id": "tt0137523", "vote_average": 4, "vote_count": 98 },]
    const newState = reducer(state, { type: "SET_FILMS", films: newFilms });
    expect(newState.films).toBe(newFilms);
  });
  it("can add a seat to the cart", () => {
    const seat = { id: 1, seat_number: 1, price: 1.00 };
    store.dispatch(actions.addSeatToCart(seat));
    expect(store.getState().cart.seats).toContain(seat);
  })
  it("can remove a seat from the cart", () => {
    const seat = { id: 1, seat_number: 1, price: 1.00 };
    store.getState().cart.seats = [seat];  // This is illegal of course, but good for the test
    expect(store.getState().cart.seats).toContainEqual(seat)
    store.dispatch(actions.removeSeatFromCart(seat));
    expect(store.getState().cart.seats).not.toContainEqual(seat);
  })
})