import { store } from '../store';

describe("Store", () => {
  test("has an initial state", () => {
    const state = store.getState();
    expect(state).toBeTruthy();
    expect(state.films).toEqual([]);
    expect(state.reservations).toEqual([]);
    expect(state.showings).toEqual([]);
    expect(state.theaters).toEqual([]);
  });

  test("has a do-nothing reducer", () => {
    const state = store.getState();
    store.dispatch({ type: "FOO" });
    expect(store.getState()).toEqual(state);
  })

  test("can be subscribed to", () => {
    const mockedFn = jest.fn()
    store.subscribe(mockedFn)
    store.dispatch({ type: "FOO" });
    expect(mockedFn).toHaveBeenCalled()
  })
})
