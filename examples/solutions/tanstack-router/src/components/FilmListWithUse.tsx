import { ReactElement, use } from "react";
import { Film } from "../types/Film";

type Props = {
  filmsPromise: Promise<Film[]>;
}
export const FilmList = ({ filmsPromise }: Props): ReactElement => {
  const films: Film[] = use(filmsPromise)
  console.log('got here')
  return (
    <>
      <h1>Films</h1>
      {films.map(f => <p key={f.id}>{f.title}</p>)}
    </>
  )
}