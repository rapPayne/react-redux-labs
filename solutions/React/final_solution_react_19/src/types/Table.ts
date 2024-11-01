import { Seat } from "./Seat";

export type Table = {
  id: number;
  table_number: number;
  row: number;
  column: number;
  seats: Seat[];
}