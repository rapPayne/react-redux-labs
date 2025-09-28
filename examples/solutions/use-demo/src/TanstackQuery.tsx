import { useQuery } from '@tanstack/react-query';
import { ReactElement } from 'react';
import { Person } from './Person';
import { Card } from './Card';


export const TanstackQuery = (): ReactElement => {
  const { data, error, isPending } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch(`http://localhost:3008/api/users`).then(res => res.json()),
    initialData: [],
  });
  console.log({ data, error, isPending })
  if (isPending) return <section className="spinner"></section>
  if (error) return <>Error. Please try again. Error: {error}</>
  return (
    <>
      <h1>Users (fetched with TanStack Query)</h1>
      <section id="cards">
        {data.map((person: Person) => <Card person={person} key={person.id} />)}
      </section>
    </>
  )
}