// To parse this data:
//
//   import { Convert } from "./file";
//
//   const showing = Convert.toShowing(json);

export type Showing = {
  id: number;
  film_id: number;
  theater_id: number;
  showing_time: Date;
}

/**
 * showing_time is a string in the database but needs to be a Date in the object
 */
export class Convert {
  public static toShowing(json: string): Showing[] {
    let showings: Showing[] = JSON.parse(json);
    showings = showings.map((s: Showing) => ({ ...s, showing_time: new Date(s.showing_time) }))
    return showings;
  }

  public static showingToJson(value: Showing[]): string {
    return JSON.stringify(value);
  }
}
