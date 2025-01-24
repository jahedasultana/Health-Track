import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
const UserRoute = ({ children }) => {
  const {role} = useRole();

  if (role === 'user') return children
  return <Navigate to='/dashboard' />
}

export default UserRoute;