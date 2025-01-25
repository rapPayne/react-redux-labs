import { Navigate } from 'react-router-dom';
import { useStore } from '../../store/useStore'
import toast from 'react-hot-toast';
export const Logout = () => {
  const { logout } = useStore()
  logout();
  toast.success("You've been logged out.", { duration: 5000 })
  return (
    <>
      <p>Logging out ...</p>
      <Navigate to="/" />
    </>
  )
}