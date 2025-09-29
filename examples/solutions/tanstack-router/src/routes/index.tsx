import { CSSProperties } from 'react';
import { FilmBrief } from '../components/FilmBrief.tsx';
import { PickDate } from '../components/PickDate.tsx';
import { Showing } from '../types/Showing.ts';
import { toShowingDateString } from '../helpers/Date.ts';
import { useStore } from '../store/useStore.ts';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: LandingPage,
})
function LandingPage() {
  const store = useStore();
  const films = store.films || [];
  const showings: Array<Showing> = store.showings;
  const currentDate: Date = new Date()
  // console.log(showings);
  return (
    <>
      <section style={styles.header} className="mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <span className="mdl-card__title-text">Showings for {toShowingDateString(currentDate)}</span>
        </div>
        <PickDate />
      </section>
      <section style={styles.filmsWrapper}>
        {films.map(film => <FilmBrief film={film} key={film.id} currentDate={currentDate} showings={showings} />)}
      </section>
    </>
  )
}

const styles: { [P: string]: CSSProperties } = {
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