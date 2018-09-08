import React, { Component } from 'react';
import { ShowingsTimes } from './ShowingsTimes';

export class FilmDetails extends Component {
  render() {
    if (! this.props.film) return null;
    return (
      <div>
        <h1>{this.props.film.title}</h1>
        <h2>{this.props.film.tagline}</h2>
        <ShowingsTimes film={this.props.film} showings={this.props.showings} />

        <section>
          <img src={`${this.props.film.poster_path}`} alt="Movie poster" className="poster" />
          <article className="alert alert-danger overview">{this.props.film.overview}</article>
        </section>
      </div>
    )
  }
}