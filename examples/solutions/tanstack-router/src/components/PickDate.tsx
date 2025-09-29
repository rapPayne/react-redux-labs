import { CSSProperties } from "react";
import { getArrayOfDays, toShortDayOfWeekString } from "../helpers/Date";
import { State, useStore } from "../store/useStore";

export const PickDate = () => {
  const state: State = useStore();
  return (
    <div style={styles.pickDateWrapper}>
      {getArrayOfDays(7).map(date => (
        <span
          onClick={() => set_current_date(date)}
          style={styles.days}
          key={date.getTime()}>
          {toShortDayOfWeekString(date)}
        </span>
      ))}
    </div>
  );

  function set_current_date(date: Date) {
    state.setCurrentDate(date);
  }
}

const styles: { [P: string]: CSSProperties } = {
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