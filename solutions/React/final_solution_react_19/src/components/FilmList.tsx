'use server';

import { use } from "react";
import { Convert as ConvertFilm, Film } from "../types/Film";

export const FilmList = () => {
  const films: Film[] = use<Film[]>(
    fetch("http://localhost:3008/films")
      .then(res => res.text())
      .then(json => ConvertFilm.toFilm(json))
  );
  return (
    <>
      <h1>Films</h1>
      {films.map(f => <p key={f.id}>{f.title}</p>)}
    </>
  )
}