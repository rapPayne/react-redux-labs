import React, { Component } from 'react';
import { Film } from './Film';
import './FilmsList.css';

export class FilmsList extends Component {
  render() {
    return (
      <div className="filmslist">
        {this.props.films.map((f, i) => {
          return <Film film={f} key={i} />
        })}
      </div>
    )
  }
}