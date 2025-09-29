import { useStore } from '../../store/useStore'
import toast from 'react-hot-toast';
import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/authentication/Logout')({ component: Logout })
function Logout() {
  const { logout } = useStore()
  console.log({ logout });
  //logout(); //TODO: This is causing an endless loop. No idea why.
  toast.success("You've been logged out.", { duration: 5000 })
  return (
    <>
      <p>Logging out ...</p>
      <Navigate to="/" />
    </>
  )
}