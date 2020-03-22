import React from 'react';
import { store } from './store/store';
import { PickDate } from "./PickDate";
import { ShowingTimes } from './ShowingTimes';

export const FilmDetails = () => {
  console.log("FilmDetails");
  const state = store.getState();
  const films = state.films;
  const film = films[1] || {}; return (
    <>
      <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
        <div style={{}}>
          <h1>{film.title}</h1>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 30%' }}>
            <img src={film.poster_path} alt="" style={styles.poster} />
          </div>
          <div style={{ flex: '1 1 70%' }}>
            <h1>{film.title}</h1>
            <h2>{film.tagline}</h2>
            <p>{film.overview}</p>
            <p>Viewer's ratings: <span>{film.vote_average}</span>/10 <span>{film.vote_count} votes</span></p>
            <p>Released: {film.release_date}</p>
            <p>{film.runtime} minutes</p>
            <a href={film.homepage} target="movie_site">{film.homepage}</a>
            <PickDate />
            <ShowingTimes showings={state.showings} currentDate={state.currentDate} currentFilm={film} />
          </div>
        </div>
      </div>
    </>
  )
}
const styles = {
  container: {
    width: '95%',
    margin: '20px 20px',
    padding: '20px',
  },
  poster: {
    maxWidth: '95%',
    objectFit: 'contain',
  },
  wrapper: {
    marginTop: '20px',
  },
  headline: {
    fontSize: '1.2em',
  },
  showingTimesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tile: {
    background: 'black',
    color: 'white',
    fontWeight: 'bold',
    padding: '20px',
    margin: '10px',
  },
  
};