import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { actions } from '../../store/actions';

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(actions.logout());
  return (
    <>
      <p>Logging out ...</p>
      <Navigate to="/" />
    </>
  )
}