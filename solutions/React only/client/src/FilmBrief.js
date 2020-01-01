import React from 'react';
import { withRouter } from 'react-router-dom';
import { actions } from './store/actions';
import { ShowingTimes } from './ShowingTimes';
import { store } from './store/store';

export const FilmBrief = withRouter(({ film, showings, history, currentDate }) => {
 const { poster_path, runtime, title, tagline } = film;
 return (
  <>
   <section onClick={handleClick} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
    <div style={styles.posterDiv}>
     <img src={poster_path} alt="" style={styles.poster} />
    </div>
    <div style={styles.textDiv}>
     <p style={styles.title}>{title}</p>
     <p style={styles.runtimeP}>{runtime} minutes</p>
     <p style={styles.tagline}>{tagline}</p>
     {showings && <ShowingTimes showings={showings} currentFilm={film} currentDate={currentDate} />}
    </div>
   </section>
  </>
 )
 function handleClick() {
  history.push({
   pathname: `/filmdetails/${film.id}`,
  })
 }
});

const styles = {
 wrapper: {
  width: '300px',
  display: 'flex',
  flexDirection: 'row',
  margin: '30px',
  cursor: 'pointer',
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
  fontSize: '1.5rem',
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
}