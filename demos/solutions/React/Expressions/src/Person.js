import React from 'react';

const sectionStyle = {
  margin: '5px',
  border: '1px solid blue',
  borderRadius: '5px',
  padding: '5px',
  boxShadow: '5px 5px 5px black',
}
export const Person = props => {
  //console.log(props.person);
  const {name, location, picture} = props.person;
  return (
    <section style={sectionStyle}>
      <h1>{name.first} {name.last}</h1>
      <div>
      <p>Address:</p>
      {location.street}<br />
      {location.city}, {location.state}, {location.postcode}
      </div>
    </section>
  )
}