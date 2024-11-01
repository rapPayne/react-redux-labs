import { Navigate } from 'react-router-dom';

export const Logout = () => {
  //TODO: dispatch(actions.logout());
  return (
    <>
      <p>Logging out ...</p>
      <Navigate to="/" />
    </>
  )
}