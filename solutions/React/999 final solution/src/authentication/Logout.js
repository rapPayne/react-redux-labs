import React from 'react';
import { store } from '../store/store';
import { actions } from '../store/actions';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
  store.dispatch(actions.logout());
  return (
    <Navigate to="/" />
  )
}