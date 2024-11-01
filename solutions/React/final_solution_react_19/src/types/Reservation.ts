// To parse this data:
//
//   import { Convert } from "./file";
//
//   const reservation = Convert.toReservation(json);

export type Reservation = {
  id?: number;
  showing_id?: number;
  seat_id?: number;
  user_id?: number;
  payment_key?: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toReservation(json: string): Reservation[] {
    return JSON.parse(json);
  }

  public static reservationToJson(value: Reservation[]): string {
    return JSON.stringify(value);
  }
}
