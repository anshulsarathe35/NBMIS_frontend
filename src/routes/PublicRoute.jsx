import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PublicRoute = ({ children }) => {
  const { token } = useAuth();

  // If authenticated, redirect to home
  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
