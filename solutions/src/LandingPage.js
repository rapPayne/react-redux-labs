import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import { FilmsList } from './FilmsList';
import { ShowingDate } from './ShowingDate';
import { FilmDetails } from './FilmDetails';
import { store } from './store/store';
import { actions } from './store/actions';

export class LandingPage extends Component {
  constructor() {
    super();
    this.state = store.getState();
    console.log(`Landing page state`, store.getState())
    store.subscribe(() => {
      console.log('state changed', store.getState());
      this.setState(store.getState());
    });
  }
  componentDidMount() {
    store.dispatch(actions.fetchFilms());
  }
  render() {
    return (
      <div>
        <Link to="Film">Details</Link>
        <ShowingDate date={this.state.showingDate} />

        <div id="layout">
          <div id="filmlist">
            <FilmsList films={this.state.films} />
          </div>
          <aside>
            <FilmDetails film={this.state.currentFilm} showings={this.state.currentFilmShowings} />
          </aside>
        </div>
      </div>
    );
  }
}

