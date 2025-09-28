
import { ReactElement, useEffect, useState } from 'react';
import { Person } from './Person';
import { Card } from './Card';

const UseEffectUseState = (): ReactElement => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3008/api/users`)
      .then(res => res.json())
      .then(ppl => {
        setPeople(ppl);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users (fetched with `useEffect` and `useState`)</h1>
      <section id="cards">
        {people && people.map((person: Person) => <Card person={person} />)}
      </section>
    </div>
  );
};

export default UseEffectUseState;