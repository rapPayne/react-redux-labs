import React from 'react';
import { store } from './store/store';
import { actions } from './store/actions';

export const PickDate = () => (
  <div style={styles.pickDateWrapper}>
  {Date.getArrayOfDays(7).map(date => (
    <span
      onClick = {() => set_current_date(date)}
      style={styles.days}
      key={date.getTime()}>
      {date.toShortDayOfWeekString()}
    </span>
  ))}
</div>
);

function set_current_date(date) {
  store.dispatch(actions.setCurrentDate(date));
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
};