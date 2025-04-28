import React from 'react';
import { store } from './store/store';
import { Person } from './Person';

export const People = props => {
  return (<>
  <header>
    <h1>People</h1>
  </header>
  <button onClick={handleAddPerson}>Add person</button>
  <section>
    {props.people ? props.people.map((p,i) => <Person person={p} />) : null}
  </section>
  </>
  )
}

const handleAddPerson = e => {
  store.dispatch({type: "FETCH_PEOPLE", howMany: 10});
}