import { ReactElement } from "react";
import { useQueryClient } from '@tanstack/react-query';
import { Person } from "./Person";
import { Card } from "./Card";

export const TanstackCache = (): ReactElement => {
  const queryClient = useQueryClient();
  const users: Person[] | undefined = queryClient.getQueryData(['users']);
  console.log({ users })
  if (!users) return <><h1>No users yet</h1><p>Read users from the server first</p></>
  return (
    <>
      <h1>Users (read from TanStack's global cache)</h1>
      <section id="cards">
        {users?.map((person: Person) => <Card person={person} key={person.id} />)}
      </section>
    </>
  )
}