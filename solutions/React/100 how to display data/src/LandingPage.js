import React from 'react';
import { store } from './store/store';

export const LandingPage = () => {
  console.log("LandingPage");
  const state = store.getState();
  const films = state.films;
  const film = films[1] || {};
  const currentDate = new Date();
  return (
    <>
      <section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
        </div>
      </section>
      <section style={styles.filmsWrapper}>

        <section style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
          <div style={styles.innerWrapper}>
            <div style={styles.posterDiv}>
              <img src={film.poster_path} alt="" style={styles.poster} />
            </div>
            <div style={styles.textDiv}>
              <p style={styles.title}>{film.title}</p>
              <p style={styles.runtimeP}>{film.runtime} minutes</p>
              <p style={styles.tagline}>{film.tagline}</p>
            </div>
          </div>
          <div style={styles.showings}>
            Showing times will go here
        </div>
        </section>

      </section>
    </>
  )
}
const styles = {};
