import { Navigate } from 'react-router-dom';
import useRole from '../hooks/useRole';
const DoctorRoute = ({ children }) => {
  const {role} = useRole();

  if (role === 'doctor') return children
  return <Navigate to='/dashboard' />
}

export default DoctorRoute;