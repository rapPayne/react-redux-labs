import React from 'react';
import { Redirect } from 'react-router-dom';
import { store } from '../store/store';
import { actions } from '../store/actions';

export const Logout = () => {
  console.log("Logout");
  store.dispatch(actions.logout());
  return (
    <>
      <p>Logging out ...</p>
      <Redirect to="/" />
    </>
  )
}