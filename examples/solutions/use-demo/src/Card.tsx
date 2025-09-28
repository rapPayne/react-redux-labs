import { ReactElement } from 'react';
import './Card.css';
import { Person } from './Person';

interface Props {
  person: Person;
}

export const Card = ({ person }: Props): ReactElement => {
  const { first, last, email, imageUrl } = person
  return (
    <div className="Card">
      <img src={imageUrl} alt={`${first} ${last}`} />
      <div>
        <p>{first} {last}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
