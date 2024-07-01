import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import AppBar from '../AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className="min-h-[70vh]">
        <Suspense fallback={<Loader />}>
          <main>{children}</main>
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
