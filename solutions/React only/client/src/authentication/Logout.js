import React from 'react';
import { store } from '../store/store';
import { actions } from '../store/actions';
import { Redirect } from 'react-router-dom';

export const Logout = () => {
  store.dispatch(actions.logout());
  return (
    <Redirect to="/" />
  )
}