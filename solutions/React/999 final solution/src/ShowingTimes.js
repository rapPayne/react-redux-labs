import React from 'react';
import { useHistory } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const ShowingTimes = ({ styles, showings, currentFilm, currentDate }) => {
  const history = useHistory();
  currentDate = new Date(currentDate);
  const showingsForDateAndFilm = showings.filter(st => st.film_id === currentFilm.id && st.showing_time > currentDate.setHours(0, 0, 0, 0) && st.showing_time < currentDate.setHours(23, 59, 59, 999));
  return (
    <section style={styles.wrapper}>
      <p style={styles.headline}>Showing times for {currentDate.toShowingDateString()}</p>
      <div style={styles.showingTimesWrapper}>
        {showingsForDateAndFilm.map(st => (
          <span style={styles.tile} key={st.id}
            onClick={() => history.push({ pathname: `/pickseats/${st.id}` })}>
            {st.showing_time.toShowingTimeString()}</span>
        )
        )}
      </div>
    </section>
  )
};

// ShowingTimes.propTypes = {
//   styles: PropTypes.object.isRequired,
//   showings: PropTypes.array.isRequired,
//   currentFilm: PropTypes.object.isRequired,
//   currentDate: PropTypes.number.isRequired,
// };