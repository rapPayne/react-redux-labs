import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from './store/store';
import { actions } from './store/actions';

export const ShowingTimes = withRouter(({ showings, currentFilm, currentDate, history }) => {
  currentDate = new Date(currentDate);
  const showingsForDateAndFilm = showings.filter(st => st.film_id === currentFilm.id && st.showing_time > currentDate.setHours(0, 0, 0, 0) && st.showing_time < currentDate.setHours(23, 59, 59, 999));
  return (
    <section style={styles.wrapper}>
      <p style={styles.headline}>Showing times for {currentDate.toShowingDateString()}</p>
      <div style={styles.showingTimesWrapper}>
        {showingsForDateAndFilm.map(st => (
          <span
            onClick={() => {
              // console.log('clicked', st);
              // store.dispatch(actions.setCurrentShowing(st));
              history.push(
                {
                  pathname: `/pickseats/${st.id}`,
                  state: { showingId: st.id },
                });
            }
            }
            style={styles.tile}
            key={st.id}>{st.showing_time.toShowingTimeString()}</span>
        )
        )}
      </div>
    </section>
  )
})

const styles = {
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
}

ShowingTimes.propTypes = {
  showings: PropTypes.array.isRequired,
  currentFilm: PropTypes.object.isRequired,
  currentDate: PropTypes.object.isRequired,
};