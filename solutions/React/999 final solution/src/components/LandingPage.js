import { useSelector } from 'react-redux';
import { FilmBrief } from './FilmBrief';
import { PickDate } from './PickDate';

export const LandingPage = () => {
  const films = useSelector(state => state.films);
  const showings = useSelector(state => state.showings);
  const currentDate = new Date(useSelector(state => state.currentDate))
  return (
    <>
      <section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {currentDate.toShowingDateString()}</span>
        </div>
        <PickDate />
      </section>
      <section style={styles.filmsWrapper}>
        {films.map(film => <FilmBrief film={film} key={film.id} currentDate={currentDate} showings={showings} />)}
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
}