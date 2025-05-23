import { Seat } from './Seat';
import { Table as TableType } from '../types/Table.ts';
import { Seat as SeatType } from '../types/Seat.ts';
import { Showing } from '../types/Showing.ts';
import { ReactElement } from 'react';

type Props = {
  table: TableType;
  currentShowing: Showing;
}
export const Table = ({ table, currentShowing }: Props): ReactElement => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.tableWrapper}>
        <div style={{ ...styles.tableItself, ...getTableWidth(table.seats ?? []) }}>{table.table_number}</div>
      </div>
      <div style={styles.seatsWrapper}>
        {table.seats?.map(seat => (
          <Seat seat={seat} currentShowing={currentShowing} key={seat.id} />
        )
        )}
      </div>
    </div>
  )
}

function getTableWidth(seats: SeatType[]) {
  return { width: seats.length * 40 + "px" }
}

const styles = {
  wrapper: {
    margin: "20px",
  },
  tableWrapper: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  tableItself: {
    height: "40px",
    backgroundColor: "blue",
    borderRadius: "20px",
    color: "white",
    fontSize: "20px",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  },
  seatsWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}

