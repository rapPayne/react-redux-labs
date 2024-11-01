import { CSSProperties, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Table } from '../Table.tsx';
import { Film } from '../../types/Film.ts';
import { Showing } from '../../types/Showing.ts';
import { Theater } from '../../types/Theater.ts';
import { Reservation } from '../../types/Reservation.ts';
import { Cart } from '../../types/Cart.ts';
import { State, useStore } from '../../store/useStore.ts';
import { Seat } from '../../types/Seat.ts';
import { toShowingDateString, toShowingTimeString } from '../../helpers/Date.ts';

// Each time we navigate to PickSeats, we may be navigating to a
// different showing, so we should trigger a fetch to get all
// of the reservations for this showing.
export const PickSeats = () => {
  const [reservations, setReservations] = useState<Array<Reservation>>([])
  const store: State = useStore();
  const films: Array<Film> = store.films;
  const showings: Array<Showing> = store.showings;
  const theaters: Array<Theater> = store.theaters;
  const cart: Cart = store.cart;

  let currentShowing: Showing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
  let currentFilm: Film = { id: 0, title: "" };
  let currentTheater: Theater = { id: 0, name: "" };

  const { showingId } = useParams();

  // RAP: We *may* be ever-adding to reservations. We *may* should empty 
  // all current reservations in a reducer before fetching. If we do this, 
  // we might be able to read all reservations from props and remove the 
  // dependency on the store in this component.
  // Once and only once, start the fetch to get all reservations for this showing
  useEffect(() => {
    //TODO: dispatch(actions.fetchReservationsForShowing(showingId));
    fetch(`http://localhost:3008/api/showings/${showingId}/reservations`)
      .then(res => res.json())
      .then(reservations => setReservations(reservations))
  }, [showingId]);

  // If state.showings doesn't exist, we can't draw anything ... yet.
  // But in App.js, we're dispatching fetchShowings() and rerendering
  // when a dispatch() happens so this component will in turn
  // be rerendered once showings are populated.
  if (showings && showings.length) {
    currentShowing = showings.find(showing => showing.id === +(showingId ?? 0)) ?? currentShowing;
    currentFilm = films.find(film => film.id === currentShowing.film_id) ?? currentFilm;
    currentTheater = theaters.find(theater => theater.id === currentShowing.theater_id) ?? currentTheater;
  }

  const navigate = useNavigate();
  const tables = currentTheater?.tables ?? [];
  const allSeats: Seat[] = tables.flatMap(table => table.seats) ?? []
  // Get all reservations
  if (reservations && allSeats) {
    allSeats.forEach(seat => seat.status = "open");

    // Mark all reserved seats as 'reserved'
    reservations.filter(res => res.payment_key).forEach(res => {
      const seat = allSeats.find(seat => seat.id === res.seat_id)
      if (seat) seat.status = "reserved";
    })

    // Mark each seat in your cart as 'inMyCart'
    // TODO: got to be a better way - reduce?
    cart && cart.filter(cartItem => cartItem.showing.id === currentShowing.id)
      .forEach(cartSeat => {
        allSeats.find(seat => seat.id === cartSeat.seat.id)!.status = "inMyCart";
      })
  }

  console.log({ cart, reservations, tables })
  return (
    <section style={styles.header} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
      </div>

      <p>Watching {currentFilm?.title} in {currentTheater.name} on {toShowingDateString(currentShowing.showing_time)} at {toShowingTimeString(currentShowing.showing_time)}</p>
      <section style={styles.tablesSection}>
        {tables && tables.map(table => (
          <Table table={table} currentShowing={currentShowing} key={table.id} />
        ))}
      </section>
      <button onClick={() => navigate("/checkout")} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  )
};

const styles: { [P: string]: CSSProperties } = {
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
