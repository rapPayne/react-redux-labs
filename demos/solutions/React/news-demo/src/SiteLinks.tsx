import React from 'react';
import { Link } from 'react-router-dom';

export const SiteLinks = () => {
  return (
    <section>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About us</Link></li>
      <li><Link to="/contact">Contact us</Link></li>
      </ul>
    </section>
  )
}