import { CSSProperties, ReactElement } from 'react';
import { Showing } from '../types/Showing';
import { Film } from '../types/Film';
import { toShowingDateString, toShowingTimeString } from '../helpers/Date';
import { useNavigate } from '@tanstack/react-router';
type Props = {
  styles: { [P: string]: CSSProperties };
  showings: Array<Showing>;
  currentFilm: Film;
  currentDate: Date;
}
export const ShowingTimes = ({ styles, showings, currentFilm, currentDate }: Props): ReactElement => {
  const navigate = useNavigate();
  const showingsForDateAndFilm = showings.filter(st => st.film_id === currentFilm.id && st.showing_time > new Date(currentDate.setHours(0, 0, 0, 0)) && st.showing_time < new Date(currentDate.setHours(23, 59, 59, 999)));
  return (
    <section style={styles.wrapper}>
      <p style={styles.headline}>Showing times for {toShowingDateString(currentDate)}</p>
      <div style={styles.showingTimesWrapper}>
        {showingsForDateAndFilm.map(st => (
          <button style={styles.tile} key={st.id}
            onClick={(e) => { e.stopPropagation(); navigate({ to: `/pickseats/${st.id}` }) }}>
            {toShowingTimeString(st.showing_time)}</button>
        )
        )}
      </div>
    </section>
  )
};
