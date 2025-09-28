import { use, ReactElement } from 'react';
import { Person } from './Person';
import { Card } from './Card';

const promise = fetch(`http://localhost:3008/api/users`).then(res => res.json());

const Use = (): ReactElement => {
  const people = use(promise);

  return (
    <>
      <div>
        <h1>Users (fetched with `use`)</h1>
        <section id="cards">
          {people && people.map((person: Person) => <Card person={person} key={person.id} />)}
        </section>
      </div>
    </>
  );
};

export default Use;