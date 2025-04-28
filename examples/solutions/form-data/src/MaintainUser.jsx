import React, { useRef, useState } from 'react';

export function MaintainUser({ person: initialPerson = {}, onSubmit }) {
  const formRef = useRef();
  const [person, setPerson] = useState(initialPerson)

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const updatedPerson = {
      ...person,
      first: formData.get('first'),
      last: formData.get('last'),
      email: formData.get('email'),
      cell: formData.get('cell'),
      imageUrl: formData.get('imageUrl'),
    };
    setPerson(updatedPerson);
  };

  return (
    <>
      <p>Editing {person.first} {person.last}</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="first">First Name:</label>
        <input type="text" name="first" defaultValue={person.first} />

        <label htmlFor="last">Last Name:</label>
        <input type="text" name="last" defaultValue={person.last} />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" defaultValue={person.email} />

        <label htmlFor="cell">Cell:</label>
        <input type="tel" name="cell" defaultValue={person.cell} />

        <label htmlFor="imageUrl">Image URL:</label>
        <input type="url" name="imageUrl" defaultValue={person.imageUrl} />

        <button type="submit">Save</button>
      </form>
    </>
  );
}

