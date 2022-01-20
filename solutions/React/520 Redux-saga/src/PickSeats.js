import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { actions } from './store/actions';
import { Table } from './Table';

// Each time we navigate to PickSeats, we may be navigating to a
// different showing, so we should trigger a fetch to get all
// of the reservations for this showing.
export const PickSeats = () => {
  const dispatch = useDispatch();
  let currentShowing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
  let currentFilm = { title: "" };
  let currentTheater = { id: 0, name: "" };

  const { showingId } = useParams();

  // RAP: We *may* be ever-adding to reservations. We *may* should empty all current reservations in a reducer before fetching. If we do this, we might be able to read all reservations from props and remove the dependency on the store in this component.
  // Once and only once, start the fetch to get all reservations for this showing
  useEffect(() => {
    dispatch(actions.fetchReservationsForShowing(showingId));
    console.log("loading Pickseats")
  }, [showingId]);

  const films = useSelector(state => state.films)
  const showings = useSelector(state => state.showings)
  const theaters = useSelector(state => state.theaters)
  const reservations = useSelector(state => state.reservations)
  const cart = useSelector(state => state.cart)
  // If showings doesn't exist, we can't draw anything ... yet.
  // But in App.js, we're dispatching fetchShowings() and rerendering
  // when a dispatch() happens so this component will in turn
  // be rerendered once showings are populated.
  if (showings?.length) {
    currentShowing = showings.find(showing => showing.id === +showingId);
    currentFilm = films.find(film => film.id === currentShowing.film_id);
    currentTheater = theaters.find(theater =>
      theater.id === currentShowing.theater_id) || {};
  }
  const tables = currentTheater?.tables;

  const history = useHistory();
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

      <p>Watching {currentFilm.title} in {currentTheater.name} on {currentShowing.showing_time.toShowingDateString()} at {currentShowing.showing_time.toShowingTimeString()}</p>
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
