import React from 'react';
import { FilmBrief } from './FilmBrief';
import { PickDate } from './PickDate';

export const LandingPage = (props) => {
 const { films, showings } = props;
 const currentDate = new Date(props.currentDate)
 return (
  <>
   <section>
    <span>Showings for {currentDate.toShowingDateString()}</span>
    <PickDate />
   </section>
   <section style={styles.wrapper}>
    {films.map(film => <FilmBrief film={film} key={film.id} currentDate={currentDate} showings={showings} />)}
   </section>
  </>
 )
}

const styles = {
 wrapper: {
  display: 'flex',
  flexWrap: 'wrap',
 },
}