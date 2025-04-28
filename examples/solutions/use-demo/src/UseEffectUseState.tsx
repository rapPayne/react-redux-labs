
import { ReactElement, useEffect, useState } from 'react';

const UseEffectUseState = (): ReactElement => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:3008/api/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
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
      <h1>Users (fetched with `useEffect and useState`)</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};

export default UseEffectUseState;