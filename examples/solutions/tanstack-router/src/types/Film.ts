// To parse this data:
//
//   import { Convert } from "./file";
//
//   const film = Convert.toFilm(json);

export type Film = {
  id: number;
  title?: string;
  homepage?: string;
  release_date?: Date;
  overview?: string;
  poster_path?: string;
  runtime?: number;
  tagline?: string;
  popularity?: number;
  imdb_id?: string;
  vote_average?: number;
  vote_count?: number;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toFilm(json: string): Film[] {
    let filmApi: Film[] = JSON.parse(json);
    filmApi = filmApi.map(film => ({ ...film, release_date: new Date(film.release_date ?? "") }))
    return filmApi;
  }

  public static filmToJson(value: Film[]): string {
    return JSON.stringify(value);
  }
}
