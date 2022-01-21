import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { actions } from './store/actions';
import { Table } from './Table';

export const PickSeats = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showingId } = useParams();
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
          <Table key={table.id} table={table} currentShowing={currentShowing} />
        ))}

      </section>
      <button onClick={_ => navigate(`/checkout`)} className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  )

}
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
};
