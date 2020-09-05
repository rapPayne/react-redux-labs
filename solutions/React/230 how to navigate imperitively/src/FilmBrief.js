import React from 'react';
import { useHistory } from 'react-router-dom';
import { ShowingTimes } from './ShowingTimes';

export const FilmBrief = ({film, showings, currentDate}) => {
const history = useHistory();
  return (
  <section onClick={() => history.push({pathname:`/film/${film.id}`})} key={film.id} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
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
  {showings && <ShowingTimes showings={showings} 
                             currentFilm={film} currentDate={currentDate} />}
</div>
</section>
)
  };

const styles = {
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