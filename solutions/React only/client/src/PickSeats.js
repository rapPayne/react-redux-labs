import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { store } from './store/store';
import { actions } from './store/actions';
import { Table } from './Table';

// Each time we navigate to PickSeats, we may be navigating to a
// different showing, so we should trigger a fetch to get all
// of the reservations for this showing.
export const PickSeats = props => {
  const state = store.getState()
  let currentShowing = {};
  let showing_time;
  let currentFilm = {};

  const { showingId } = useParams();

  // Once and only once, start the fetch to get all reservations for this showing
  useEffect(() => {
    store.dispatch(actions.fetchReservationsForShowing(showingId));
  }, [showingId]);

  // If state.showings doesn't exist, we can't draw anything ... yet.
  // But in App.js, we're dispatching fetchShowings() and rerendering
  // when a store.dispatch() happens so this component will in turn
  // be rerendered once showings are populated.
  if (state.showings && state.showings.length) {
    currentShowing = state.showings.find(showing => showing.id === +showingId);
    showing_time = currentShowing.showing_time;
    currentFilm = state.films.find(film => film.id === currentShowing.film_id);
  }

  const { reservations, theaters, cart } = props;
  const history = useHistory();
  const theater = theaters.find(theater => theater.id === currentShowing.theater_id) || {};
  const tables = theater && theater.tables;
  const allSeats = tables && tables.flatMap(table => table.seats)
  // Get all reservations
  if (reservations && allSeats) {
    allSeats.forEach(seat => seat.status = statuses.open);

    // Mark all reserved seats as 'reserved'
    reservations.filter(res => res.payment_key).forEach(res => {
      const seat = allSeats.find(seat => seat.id === res.seat_id)
      if (seat) seat.status = statuses.reserved;
    })
    // Mark each seat in your cart as 'inMyCart'
    cart && cart.seats && cart.seats.filter(cartSeat => cartSeat.showing_id === currentShowing.id)
      .forEach(cartSeat => {
        allSeats.find(seat => seat.id === cartSeat.seat_id).status = statuses.inMyCart;
      })
  }
  return (
<section style={styles.header} className="mdl-card mdl-shadow--2dp">
  <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
    <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
  </div>

  <p>Watching {currentFilm && currentFilm.title} in {theater && theater.name} on {showing_time && showing_time.toShowingDateString()} at {showing_time && showing_time.toShowingTimeString()}</p>
  <section style={styles.tablesSection}>
    {tables && tables.map(table => (
      <Table table={table} currentShowing={currentShowing} key={table.id} />
    ))}
  </section>
  <button onClick={() => history.push({ pathname: "/checkout" })} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
</section>
  )
};

const styles = {
  header: {
    width: "95vw",
    margin: "10px auto",
    padding: "10px",
  },
  tablesSection: {
    paddingBottom: '40px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  },
}
const statuses = { open: "open", inMyCart: "inMyCart", reserved: "reserved" };
