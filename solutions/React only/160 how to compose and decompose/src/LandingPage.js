import React from 'react';
import { store } from './store/store';
import { PickDate } from './PickDate';

export const LandingPage = () => {
  console.log("LandingPage");
  const state = store.getState();
  const currentDate = new Date();
  return (
    <>
      <section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
        </div>
        <PickDate />
      </section>
      <section style={styles.filmsWrapper}>
        {state.films.map(film => (
          <section key={film.id} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
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
        ))}

      </section>
    </>
  )
}
const styles = {
  header: {
    width: "95vw",
    margin: "10px auto",
    padding: "10px",
  },
  filmsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapper: {
    width: '300px',
    margin: '30px',
    cursor: 'pointer',
  },
  innerWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  poster: {
    maxWidth: '95%',
    objectFit: 'contain',
  },
  posterDiv: {
    flex: '1 1 25%',
    padding: "5px",
  },
  textDiv: {
    flex: '1 1 25%',
    padding: "10px 5px 10px 5px",
  },
  title: {
    fontSize: '1.75rem',
    fontWeight: '900',
    textTransform: 'uppercase',
    margin: '2px',
  },
  tagline: {
    margin: '2px',
    lineHeight: '1em',
  },
  runtimeP: {
    fontSize: "0.75rem",
    margin: '2px',
  },
};
