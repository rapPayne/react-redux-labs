import {store} from '../store/store';
import Actions from '../store/actions';

describe('Reservation Tests', () => {

  beforeEach(() => {
    const userId = "bob@creator.net";
    const showingId = 5;
    const seatId = 10;
    store.dispatch({type: Actions.MAKE_RESERVATION, userId, showingId, seatId});

  });

  it('Can read the list of films', () => {
    const allFilms = store.getState().films;
    expect(allFilms.length).toBeGreaterThan(0);
  });

  it('Can reserve a seat', () => {
    const userId = "bob@creator.net";
    const showingId = 5;
    const seatId = 100;
    store.dispatch({type: Actions.MAKE_RESERVATION, userId, showingId, seatId});
    expect(store.getState().reservations.some(r => r.seatId === seatId && r.showingId === showingId)).toBeTruthy();
  });

  it('Can remove a reserved seat', () => {
    const showingId = 5;
    const seatId = 10;
    expect(store.getState().reservations.find(r => r.userId==='bob@creator.net' && r.showingId===showingId && r.seatId===seatId)).toBeTruthy();
    store.dispatch({type: Actions.REMOVE_RESERVATION, showingId, seatId});
    expect(store.getState().reservations.find(r => r.userId==='bob@creator.net' && r.showingId===showingId && r.seatId===seatId)).toBeUndefined();
  });

});