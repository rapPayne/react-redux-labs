import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/actions';
import seatImage from './bundledImages/seat.png';

export const PickSeats = () => {
  const state = store.getState()
  const dispatch = useDispatch();
  let showingId = 50;
  let table = { id: 0, table_number: 0, x: 1, y: 1, seats: [] };
  let seat = { id: 0, seat_number: 0, price: 10.75 };
  let currentShowing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
  let currentFilm = { title: "A Cool Movie" };
  let currentTheater = { id: 0, name: "Theater #1" };

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

  console.log(currentTheater, tables);
  return (
    <section style={styles.header} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
      </div>

      <p>Watching {currentFilm.title} in {currentTheater.name} on {currentShowing.showing_time.toShowingDateString()} at {currentShowing.showing_time.toShowingTimeString()}</p>
      <section style={styles.tablesSection}>
        {tables && tables.map(table => (
          <div key={table.id} style={styles.wrapper}>
            <div style={styles.tableWrapper}>
              <div style={{ ...styles.tableItself, ...getTableWidth(table.seats) }}>{table.table_number}</div>
            </div>
            <div style={styles.seatsWrapper}>
              {table.seats.map(seat => (
                <div key={seat.id} style={styles.seatWrapper}>
                  <div onClick={e => reserveSeat(seat)} style={{ ...styles.seatItself }} >
                    {seat.seat_number}
                  </div>
                </div>
              ))}
            </div>
          </div>

        ))}

      </section>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  )
  function reserveSeat(seat) {
    console.log(seat);
    dispatch(actions.addSeatToCart(seat, currentShowing));
  }
  function getTableWidth(seats) {
    return { width: seats.length * 40 + "px" }
  }
}
const styles = {
  seatWrapper: {
    margin: "5px",
  },
  seatItself: {
    backgroundImage: `url(${seatImage})`,
    backgroundSize: "100% 100%",
    width: "30px",
    height: "30px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px 10px 0px 0px",
  },

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
  wrapper: {
    margin: "20px",
  },
  tableWrapper: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  tableItself: {
    height: "40px",
    backgroundColor: "blue",
    borderRadius: "20px",
    color: "white",
    fontSize: "20px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  seatsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

};
