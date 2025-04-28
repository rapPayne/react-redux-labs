'use server'
import { use, ReactElement } from 'react';

const Use = (): ReactElement => {
  const users = use(fetch("http://localhost:3008/api/users").then(res => res.json()));
  return (
    <>
      <div>
        <h1>Users (fetched with `use`)</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </div>
    </>
  );
};

export default Use;