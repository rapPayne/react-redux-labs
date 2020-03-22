import React from 'react';
//import './helpers/Date';
import { actions } from './store/actions';
import { store } from './store/store';

export const PickDate = () => {
  return (
    <>
      <div style={styles.pickDateWrapper}>
        {Date.getArrayOfDays(7).map(date => (
          <span
            onClick={() => store.dispatch(actions.setCurrentDate(date))}
            style={styles.days}
            key={date.getTime()}>
            {date.toShortDayOfWeekString()}
          </span>
        ))}
      </div>
    </>
  )
}

const styles = {
  pickDateWrapper: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: '1em',
  },
  days: {
    color: 'rgba(0,0,0,0.75)',
    fontSize: '1.2em',
    padding: '1em',
    cursor: 'pointer',
  }
}