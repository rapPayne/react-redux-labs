import React, {useEffect} from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from './fake_auth';

export const Logout = ({setUser}) => {
  useEffect(() => {
    logout();
    setUser(undefined);
  })
  return (
    <>
    <h1>Logout</h1>
    <Redirect to="/" />
    </>
  )
}