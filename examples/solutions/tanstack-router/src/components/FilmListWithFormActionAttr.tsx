import { fetchFilmsAction } from "../serverActions/fetchFilmsAction";

import { ReactElement, useActionState, useState, useTransition } from "react";
import { Film } from "../types/Film";

export const FilmList = (): ReactElement => {
  //const [films, setFilms] = useState<Film[]>([]);
  const [films, dispatch, isPending] = useActionState(async (prev, formData) => { return await fetchFilmsAction() }, [])
  //const [isPending, startTransition] = useTransition();
  // const films: Film[] = use(filmsPromise)
  // function handleClick() {
  //   startTransition(() => {
  //     setTimeout(() => console.log('waiting'), 2000)
  //   })
  // }
  async function clickAction(e) {
    console.log(e);
    await fetchFilmsAction()
      .then(films => setFilms(films));
  }
  return (
    <>
      <h1>Films</h1>
      {isPending && <h1 style={{ color: "red" }}>Loading...</h1>}
      {films.map(f => <p key={f.id}>{f.title}</p>)}
      <form action={dispatch}>
        <label htmlFor="first">First</label>
        <input id="first" defaultValue={"Bex"} />
        <button>fetch films</button>
      </form>
    </>
  )
}