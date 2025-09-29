// To parse this data:
//
//   import { Convert } from "./file";
//
//   const theater = Convert.toTheater(json);

import { Table } from "./Table";

export type Theater = {
  id: number;
  name?: string;
  tables?: Table[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toTheater(json: string): Theater[] {
    return JSON.parse(json);
  }

  public static theaterToJson(value: Theater[]): string {
    return JSON.stringify(value);
  }
}
