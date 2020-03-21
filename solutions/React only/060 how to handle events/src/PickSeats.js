import React from 'react';
import * as seatImage from './bundledImages/seat.png';
import { store } from './store/store';
import { actions } from './store/actions';
import * as seatImage from './bundledImages/seat.png';

export const PickSeats = () => {
  let table = { id: 0, table_number: 0, x: 1, y: 1, seats: [] };
  let seat = { id: 0, seat_number: 0, price: 10.75 };
  let currentShowing = { id: 0, film_id: 0, theater_id: 0, showing_time: new Date() };
  let currentFilm = { title: "" };
  let currentTheater = { id: 0, name: "" };
  console.log("PickSeats");
  return (
    <section style={styles.header} className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h1 className="mdl-card__title-text">Where would you like to sit?</h1>
      </div>

      <p>Watching FILM_TITLE in THEATER_NAME on SHOWING_DATE at SHOWING_TIME</p>
      <section style={styles.tablesSection}>
        <p>LIST OF TABLES WILL GO HERE</p>
        <p>Here is one table:</p>
        <div style={styles.wrapper}>
          <div style={styles.tableWrapper}>
            <div style={{ ...styles.tableItself }}>TABLE_NUMBER_HERE</div>
          </div>
          <div style={styles.seatsWrapper}>
            <div style={styles.wrapper}>
              <div onClick={e => reserveSeat(seat)} style={{ ...styles.seatItself }} >
                #
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  )
  function reserveSeat(seat) {
    console.log(seat);
    store.dispatch(actions.addSeatToCart(seat, currentShowing));
  }

}
const styles = {
  wrapper: {
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
};
