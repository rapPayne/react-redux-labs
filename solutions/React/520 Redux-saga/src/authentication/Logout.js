import { useDispatch } from 'react-redux';
import { actions } from '../store/actions';
import { Navigate } from 'react-router-dom';

export const Logout = () => {
  const dispatch = useDispatch();
  dispatch(actions.logout());
  return (
    <Navigate to="/" />
  )
}