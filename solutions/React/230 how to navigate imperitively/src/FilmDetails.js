import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { PickDate } from "./PickDate";
import { ShowingTimes } from './ShowingTimes';

export const FilmDetails = ({films, showings, currentDate}) => {
  let film = {};
  const { filmId } = useParams();
  if (films && films.length) {
    film = films.find(film => film.id === +filmId);
  }
  return (
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
            <Link to={film.homepage} target="movie_site">{film.homepage}</Link>
            <PickDate />
            <ShowingTimes showings={showings} currentDate={currentDate} currentFilm={film} />
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