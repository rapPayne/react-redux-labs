import React from 'react';

export const FilmDetails = () => {
  console.log("FilmDetails");
  return (
    <>
      <div style={{ ...styles.container }} className='mdl-card mdl-shadow--2dp'>
        <div style={{}}>
          <h1>Movie title goes here</h1>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1 1 30%' }}>
            <img src="/img/posters/1.jpg" alt="" style={styles.poster} />
          </div>
          <div style={{ flex: '1 1 70%' }}>
            <h1>Movie title goes here</h1>
            <h2>Movie tagline goes here</h2>
            <p>Movie overview goes here</p>
            <p>Viewer's ratings: <span>Vote_average</span>/10 <span>Vote_count votes</span></p>
            <p>Released: Release date here</p>
            <p>Runtime minutes</p>
            <a href="HOMEPAGE" target="movie_site">Movie's home page here</a>
        Pick dates will go here
        Showing times will go here
      </div>
        </div>
      </div>
    </>
  )
}
const styles = {};