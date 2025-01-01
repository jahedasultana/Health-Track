import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
const AdminRoute = ({ children }) => {
  const [role] = useRole();

  if (role === 'admin') return children
  return <Navigate to='/dashboard' />
}

export default AdminRoute;