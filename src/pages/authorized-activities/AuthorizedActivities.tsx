import { lazy, useState, Suspense } from 'react';
import Authorization from './Authorization';
import Loading from '../Loading';
import SplitScreen from '../../components/SplitScreen';
const Activities = lazy(() => import('./Activities'));
const ActiveUsers = lazy(() => import('./ActiveUsers'));
import Footer from '../../components/Footer';

const AuthorizedActivities = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <Authorization
        isAuthorized={isAuthorized}
        handleAuthorized={() => setIsAuthorized(!isAuthorized)}
      />
      {isAuthorized && (
        <Suspense fallback={<Loading />}>
          <SplitScreen leftWeight={3} rightWeight={2}>
            <Activities />
            <ActiveUsers />
          </SplitScreen>
          <Footer />
        </Suspense>
      )}
    </>
  );
};

export default AuthorizedActivities;
