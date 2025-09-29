"use server";  //This is ignored. Does nothing unless you're using NextJS

import { Convert as ConvertFilm } from '../types/Film.ts';

export const fetchFilmsAction = async () => {
  const res = await fetch("http://localhost:3008/api/films");
  const resJson = await res.text();
  //console.log({ filmsAsObjects })
  const films = ConvertFilm.toFilm(resJson);
  console.log({ films })
  return films;
}