import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { actions } from './store/actions';
import { store } from './store/store';
import { PickDate } from './PickDate';
import { ShowingTimes } from './ShowingTimes';

// FilmDetails is a top-level component so we can't always count on its
// props being passed in from a single host/parent. Instead we should 
// get its data from state.
//
// So use route parameters to get the filmId and grab the currentFilm
// from state by filmId. (Note: if all the films were not already in
// application state, we'd need to fetch it from the API)
export const FilmDetails = withRouter((props) => {
 const state = store.getState()
 let currentFilm = {};

 // Stupidly fancy way of saying filmId = props.match.params.filmId
 const { match: { params: { filmId } } } = props;

 // If state.films doesn't exist, we can't draw anything ... yet.
 // But in App.js, we're dispatching fetchFilms() and rerendering
 // when a store.dispatch() happens so this component will in turn
 // be rerendered once films are populated.
 if (state.films && state.films.length) {
  currentFilm = state.films.find(film => film.id === +filmId);
 }

 const { homepage, poster_path, overview, release_date, runtime, title, tagline, vote_average, vote_count } = currentFilm;
 const { currentDate, showings } = state;
 console.warn(showings);
 return (
  <>
   <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
    <div style={{}}>
     <h1>{title}</h1>
    </div>
    <div style={{ display: 'flex' }}>
     <div style={{ flex: '1 1 30%' }}>
      <img src={poster_path} alt="" style={styles.poster} />
     </div>
     <div style={{ flex: '1 1 70%' }}>
      <h1>{title}</h1>
      <h2>{tagline}</h2>
      <p>{overview}</p>
      <p>Viewer's ratings: <span>{vote_average}</span> / <span>{vote_count}</span></p>
      <p>Released: {release_date}</p>
      <p>{runtime} minutes</p>
      <a href={homepage} target="movie_site">{homepage}</a>
      <PickDate />

      <ShowingTimes showings={showings} currentDate={currentDate} currentFilm={currentFilm} />
     </div>
    </div>
   </div>
  </>
 )
});

const styles = {
 container: {
  width: '95%',
  margin: '20px 20px',
  padding: '20px',
 },
 cardTitle: {

 },
 poster: {
  maxWidth: '95%',
  objectFit: 'contain',
 },
}