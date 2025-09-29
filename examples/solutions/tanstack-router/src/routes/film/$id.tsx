import { PickDate } from '../../components/PickDate.tsx';
import { ShowingTimes } from '../../components/ShowingTimes.tsx';
import { Film } from '../../types/Film.ts';
import { Showing } from '../../types/Showing.ts';
import { CSSProperties } from 'react';
import { useStore } from '../../store/useStore.ts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute("/film/$id")({ component: FilmDetails });

function FilmDetails() {
  const params = Route.useParams();
  const filmId = params.id ?? 0;

  const state = useStore();
  const films: Array<Film> = state.films || [];
  const currentDate: Date = state.currentDate;
  const showings: Array<Showing> = state.showings;
  let currentFilm: Film = { id: 0 };

  // If state.films doesn't exist, we can't draw anything ... yet.
  // But in App.js, we're dispatching fetchFilms() and rerendering
  // when a dispatch() happens so this component will in turn
  // be rerendered once films are populated.
  if (films && films.length) {
    currentFilm = films.find(film => film.id === +(filmId ?? 0)) ?? currentFilm;
  }

  const { homepage, poster_path, overview, release_date, runtime, title, tagline, vote_average, vote_count } = currentFilm;
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
            <p>Viewer's ratings: <span>{vote_average}</span>/10 <span>{vote_count} votes</span></p>
            <p>Released: {release_date?.toDateString()}</p>
            <p>{runtime} minutes</p>
            <a href={homepage} target="movie_site">{homepage}</a>
            <PickDate />

            <ShowingTimes styles={styles} showings={showings} currentDate={currentDate} currentFilm={currentFilm} />
          </div>
        </div>
      </div>
    </>
  )
};


const styles: { [P: string]: CSSProperties } = {
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