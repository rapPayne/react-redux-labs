import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { store } from './store/store';
import { actions } from './store/actions';

// Each time we navigate to PickSeats, we may be navigating to a
// different showing, so we should trigger a fetch to get all
// of the reservations for this showing.
export const PickSeats = withRouter((props) => {
  const statuses = { open: "open", inMyCart: "inMyCart", reserved: "reserved" };
  const state = store.getState()
  let currentShowing = {};

  // Stupidly fancy way of saying filmId = props.match.params.filmId
  const { match: { params: { showingId } } } = props;
  
  // Once and only once, start the fetch to get all reservations for this showing
  useEffect(() => {
    console.warn("Gat a showingId", showingId)
    store.dispatch(actions.fetchReservationsForShowing(showingId));
  }, []);

  // If state.showings doesn't exist, we can't draw anything ... yet.
  // But in App.js, we're dispatching fetchShowings() and rerendering
  // when a store.dispatch() happens so this component will in turn
  // be rerendered once showings are populated.
  if (state.showings && state.showings.length) {
    currentShowing = state.showings.find(showing => showing.id === +showingId);
  }

  const { history, reservations, theaters, cart } = props;

  const theater = theaters.find(theater => theater.id === currentShowing.theater_id) || {};
  const tables = theater && theater.tables;
  const allSeats = tables && tables.flatMap(table => table.seats)
  console.log("allseats is", reservations, allSeats)
  // Get all reservations
  if (reservations && allSeats) {
    allSeats.forEach(seat => seat.status = statuses.open);

    // Mark all reserved seats as 'reserved'
    reservations.filter(res => res.payment_key).forEach(res => {
      allSeats.find(seat => seat.id === res.seat_id).status = statuses.reserved;
    })
    // Mark each seat in your cart as 'inMyCart'
    cart && cart.seats && cart.seats.filter(cartSeat => cartSeat.showing_id === currentShowing.id)
    .forEach(cartSeat => {
      // const thisSeat  = allSeats.find(seat => seat.id === cartSeat.seat_id)
      // if (thisSeat) thisSeat.status = statuses.inMyCart;
      allSeats.find(seat => seat.id === cartSeat.seat_id).status = statuses.inMyCart;
    })
  }

  console.log("PS", theater, props);
  return (
    <>
      <h1>Pick Yo Seats</h1>
      <p>{theater.name}</p>
      {tables && tables.map(table => (
        <div key={table.id}>
          <p>table {table.table_number} x:{table.x} y:{table.y}</p>
          {table.seats.map(seat => (
            <div
              onClick={() => reserveSeat(seat)}
              key={seat.id}
            >
              <p style={{ ...styles.seat.baseStyle, ...styles.seat[seat.status] }}>
              Seat: {seat.seat_number} price:{seat.price} status:{seat.status}
              </p>
            </div>
          )
          )}
        </div>
      ))}
      <button onClick={() => history.push({ pathname: "/checkout" })}>Check out</button>
    </>
  )

  function reserveSeat(seat) {
    console.log(seat)
    switch (seat.status) {
      case statuses.reserved:
        console.warn("Seat is reserved. Do nothing")
        break;
      case statuses.inMyCart:
        store.dispatch(actions.removeSeatFromCart(seat, currentShowing));
        break;
      case statuses.open:
        store.dispatch(actions.addSeatToCart(seat, currentShowing));
        break;
      default:
        store.dispatch(actions.addSeatToCart(seat, currentShowing));
    }
  }
})

const styles = {
  seat: {
    baseStyle: {
      fontWeight: "bold",
    },
    open: {
      backgroundColor: "white",
    },
    reserved: {
      backgroundColor: "red",
    },
    inMyCart: {
      backgroundColor: "orange",
    }
  }
}