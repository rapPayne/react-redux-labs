import { useActionState, ReactElement, } from 'react';
import { Person } from './Person';
import { Card } from './Card';

const fetchUsers = (): Promise<Person[]> => {
  return fetch(`http://localhost:3008/api/users`)
    .then(res => res.json());
}

const UseActionState = (): ReactElement => {

  const [people, dispatch, isPending] = useActionState<Person[] | undefined>(fetchUsers, undefined);
  return (
    <>
      <form action={dispatch}>
        <h1>Users (fetched with `useActionState`)</h1>
        <input type="submit" disabled={isPending} value="Fetch users" />
        {isPending ? <p>Loading ...</p> :
          <section id="cards">
            {people && people.map((person: Person) => <Card person={person} />)}
          </section>
        }
      </form>
    </>
  );
};

export default UseActionState;