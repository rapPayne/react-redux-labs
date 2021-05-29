import React, { useState, useEffect } from 'react';
import './App.css';
import { store } from './store/store';
import { actions } from './store/actions';

function App() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    fetch("/api/films")
      .then(res => res.json())
      .then(films => store.dispatch(actions.setFilms(films)));
    return unsubscribe;   // Unsubscribe on teardown
  }, []);

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
            onClick={_ => store.dispatch(actions.setCurrentFilm(film))}
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