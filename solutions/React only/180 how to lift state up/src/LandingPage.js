import React from 'react';
import { store } from './store/store';
import { PickDate } from './PickDate';
import { FilmBrief } from './FilmBrief';

export const LandingPage = () => {
  console.log("LandingPage");
  const state = store.getState();
  const currentDate = new Date(state.currentDate);
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
          <FilmBrief film={film} showings={state.showings} currentDate={currentDate} key={film.id} />
        ))}

      </section>
    </>
  );
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

};
