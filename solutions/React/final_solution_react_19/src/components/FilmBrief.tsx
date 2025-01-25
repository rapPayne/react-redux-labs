import { useNavigate } from 'react-router-dom';
import { ShowingTimes } from './ShowingTimes.tsx';
import { Showing } from '../types/Showing.ts';
import { Film } from '../types/Film.ts';
import { CSSProperties, ReactElement } from 'react';
type Props = {
  film: Film;
  showings: Array<Showing>;
  currentDate: Date;
}
export const FilmBrief = ({ film, showings, currentDate }: Props): ReactElement => {
  const { poster_path, runtime, title, tagline } = film;
  const navigate = useNavigate();
  return (
    <>
      <section onClick={handleClick} style={styles.wrapper} className="mdl-card mdl-shadow--2dp">
        <div style={styles.innerWrapper}>
          <div style={styles.posterDiv}>
            <img src={poster_path} alt="" style={styles.poster} />
          </div>
          <div style={styles.textDiv}>
            <p style={styles.title}>{title}</p>
            <p style={styles.runtimeP}>{runtime} minutes</p>
            <p style={styles.tagline}>{tagline}</p>
          </div>
        </div>
        <div style={styles.showings}>
          {showings && <ShowingTimes styles={styles} showings={showings} currentFilm={film} currentDate={currentDate} />}
        </div>
      </section>
    </>
  )
  function handleClick() {
    navigate(`/film/${film.id}`, { state: { foo: "bar" } });
  }
};

const styles: { [P: string]: CSSProperties } = {
  wrapper: {
    padding: '5px',
    width: '300px',
    margin: '30px',
    cursor: 'pointer',
  },
  headline: {
    margin: '0',
    fontWeight: 'bold',
    fontSize: '0.8em',
  },
  showingTimesWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tile: {
    background: 'rgba(0,0,0,0.25)',
    color: 'black',
    fontWeight: '200',
    fontSize: '0.8em',
    padding: '10px',
    margin: '3px',
    border: 'none',
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
}