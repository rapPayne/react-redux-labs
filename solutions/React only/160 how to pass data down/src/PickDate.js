import React from 'react';

export const PickDate = () => (
  <div style={styles.pickDateWrapper}>
  {Date.getArrayOfDays(7).map(date => (
    <span
      style={styles.days}
      key={date.getTime()}>
      {date.toShortDayOfWeekString()}
    </span>
  ))}
</div>
);

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