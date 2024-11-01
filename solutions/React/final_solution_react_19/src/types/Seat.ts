
export type Seat = {
  id?: number;
  seat_number?: number;
  price?: number;
  status?: "open" | "inMyCart" | "reserved";
}