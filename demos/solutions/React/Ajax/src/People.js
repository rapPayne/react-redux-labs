import React from 'react';
import { store } from './store/store';

export const People = props => {
  return (<>
  <header>
    <h1>People</h1>
  </header>
  <button onClick={handleAddPerson}>Add person</button>
  <section>
    {props.people.map((p,i) => <div key={i}>name:{p.name.first} {p.name.last}</div>)}
  </section>
  </>
  )
}

const handleAddPerson = e => {
  store.dispatch({type: "FETCH_PERSON"});
}