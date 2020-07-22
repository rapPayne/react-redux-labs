import React from 'react';
import * as seatImage from './bundledImages/seat.png';

export const PickSeats = () => {
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
              <div style={{ ...styles.seatItself }} >
                #
              </div>
            </div>
          </div>
        </div>
      </section>
      <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" style={styles.submitButton} >Check out</button>
    </section>
  )
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
