import { useSelector } from 'react-redux';
import { HOME_ROUTE } from '../constants/routes';
import { selectAuthIsLoggedIn } from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children, navigaeTo = HOME_ROUTE }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={navigaeTo} replace />;
};

export default PrivateRoutes;
