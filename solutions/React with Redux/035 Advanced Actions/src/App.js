import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  useEffect(() => {
    fetch("/api/films")
      .then(res => res.json())
      .then(films => dispatch(actions.setFilms(films)));
  }, []);
  console.log("State is", state);
  return (
    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
        <div className="mdl-layout__header-row">
          <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
          <nav className="mdl-navigation mdl-layout--large-screen-only">
            <a href="/account" className="mdl-layout__tab">My account</a>
            <a href="/logout" className="mdl-layout__tab">logout</a>
            <a href="/checkout" className="mdl-layout__tab"><i className="material-icons">shopping_cart</i></a>
            <a href="/login" className="mdl-layout__tab">Login</a>
            <a href="/register" className="mdl-layout__tab">Register</a>
          </nav>
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <a href="/" className="mdl-layout-title">Dinner and a Movie</a>
        <nav className="mdl-navigation">
          <a href="/account" className="mdl-layout__link">My account</a>
          <a href="/logout" className="mdl-layout__link">logout</a>
          <a href="/checkout" className="mdl-layout__link"><i className="material-icons">shopping_cart</i></a>
          <a href="/login" className="mdl-layout__link">Login</a>
          <a href="/register" className="mdl-layout__link">Register</a>
        </nav>
      </div>
      <main className="mdl-layout__content">
        <section>
          {state.films.map(film => <div
            onClick={_ => dispatch(actions.setCurrentFilm(film))}
            key={film.id}>{film.title} - {film.tagline}</div>)}
          <h1>You chose {state.currentFilm?.title}</h1>
        </section>

      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
