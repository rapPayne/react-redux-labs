import React, { Component } from 'react';
import './Film.css';
import { store } from './store/store';
import { actions } from './store/actions';

export function Film(props) {
    
    return (
        <section className="film" onClick={() => { chooseMe(props.film) }}>
            <h1 className="title">{props.film.title}</h1>
            <img src={`${props.film.poster_path}`} alt="" className="poster" />
            <p className="tagline">{props.film.tagline}</p>
            <p>Foo{props.summary}Bar</p>
        </section>
    )

    function chooseMe(film) {
        store.dispatch(actions.setCurrentFilm(film));
    }
}