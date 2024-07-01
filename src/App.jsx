import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './firebase';
import { removeUser, setUser } from './redux/auth/authReducer';
import { useDispatch } from 'react-redux';
import {
  FAVORITES_ROUTE,
  HOME_ROUTE,
  TEACHERS_ROUTE,
} from './constants/routes';
import PrivateRoutes from './routes/PrivateRoutes';

const Home = lazy(() => import('./pages/Home/Home'));
const Teachers = lazy(() => import('./pages/Teachers/Teachers'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          setUser({
            email: currentUser.email,
            id: currentUser.uid,
            token: currentUser.accessToken,
          })
        );
      } else {
        dispatch(removeUser(currentUser));
      }
    });
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home />} />
        <Route path={TEACHERS_ROUTE} element={<Teachers />} />
        <Route
          path={FAVORITES_ROUTE}
          element={
            <PrivateRoutes>
              <Favorites />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
      </Routes>
      <ToastContainer />
    </Layout>
  );
}
export default App;
